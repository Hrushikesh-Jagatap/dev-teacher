const TeacherData = require('@models/Teacher');
const { loadBalancer, SYSTEM_TOKEN } = require('@config');
const axios = require('axios');

const updateTeacherStatus = async (tid_userId, teacherData) => {
  try {
    const teacher = await TeacherData.findOne({ userId: tid_userId });

    if (!teacher) {
      throw new Error('Teacher not found');
    }

    const { sid_userId, status, about, subject, flag, classes } = teacherData;
    let existingStatus = teacher.req_status.find((reqStatus) => reqStatus.sid_userId == sid_userId);

    if (existingStatus) {
      existingStatus.status = status;
      // existingStatus.about = about;
    } else {
      teacher.req_status.push({ sid_userId, status, about, subject, flag, classes });
    }

    const updatedTeacher = await teacher.save();
    if (status == "Accepted") {
      // Push the new teacher data into the userId array
      const newSeacherData = { student_userId: sid_userId, subject, classes };
      updatedTeacher.student_userId.push(newSeacherData);
      await updatedTeacher.save();
    }

    if (status !== "requested") {
      const config = {
        method: 'put',
        url: `${loadBalancer}/sts/apis/v1/status/${sid_userId}`,
        headers: {
          app_name: 'teacherApp',
          app_version_code: '101',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${SYSTEM_TOKEN}`,
        },
        data: {
          tid_userId: tid_userId,
          status: status,
          about: about,
          subject: subject,
          classes: classes,
          flag: flag,
        },
      };

      const teacherUpdateResult = await axios(config);
      //  console.log('Teacher status updated:', teacherUpdateResult.data);
    }

    if (status == 'Accepted') {
      const queryConditions = {
        "req_status.sid_userId": sid_userId,
        "req_status.status": "requested",
        "req_status.subject": subject,
        "req_status.classes": classes,
        "req_status.flag": true,
      };

      let findteacher = await TeacherData.findOne(queryConditions).exec();

      while (findteacher !== null) {
        // Update the flag to false for the matching req_status object
        findteacher.req_status.forEach((reqStatus) => {
          if (
            reqStatus.sid_userId === sid_userId &&
            reqStatus.status === 'requested' &&
            reqStatus.subject === subject &&
            reqStatus.classes === classes &&
            reqStatus.flag === true
          ) {
            reqStatus.flag = false;
          }
        });

        const updatedTeacher = await findteacher.save();
        console.log(updatedTeacher);

        // Find the next matching teacher
        findteacher = await TeacherData.findOne(queryConditions).exec();
        console.log(findteacher);
      }

    }
    return updatedTeacher;
  } catch (error) {
    console.error('Error updating teacher status:', error.message);
    throw new Error('Failed to update teacher');
  }
};

module.exports = {
  updateTeacherStatus,
};
