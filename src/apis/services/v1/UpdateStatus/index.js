const TeacherData = require('@models/Teacher');
const { loadBalancer, SYSTEM_TOKEN ,student} = require('@config');
const axios = require('axios');

const updateTeacherStatus = async (teacherId, teacherData) => {
  try {
    const teacher = await TeacherData.findOne({ teacher_id: teacherId });

    if (!teacher) {
      throw new Error('Teacher not found');
    }

    const { sid, status, about , subject, flag,classes } = teacherData;
    let existingStatus = teacher.req_status.find((reqStatus) => reqStatus.sid == sid);


















    if (existingStatus) {
      existingStatus.status = status;
     // existingStatus.about = about;


    } else {
      teacher.req_status.push({ sid, status, about, subject, flag,classes  });
    }

    const updatedTeacher = await teacher.save();
    if (status == "Accepted") {
      // Push the new teacher data into the teacher_id array
      const newSeacherData = { student_id: sid, subject, classes };
      updatedTeacher.student_id.push(newSeacherData);
         await updatedTeacher.save();
    }

    if (status !== "requested") {
      const config = {
        method: 'put',
        url: `${student}/sts/apis/v1/status/${sid}`,
        headers: {
          app_name: 'teacherApp',
          app_version_code: '101',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${SYSTEM_TOKEN}`,
        },
        data: {
          tid: teacherId,
          status: status,
          about: about,
          subject:subject,
          classes:classes,
          flag:flag,
        },
      };

      const teacherUpdateResult = await axios(config);
    //  console.log('Teacher status updated:', teacherUpdateResult.data);
    }

//       if (status == "Accepted") {


//          let findteacher=await TeacherData.findOne({"req_status.sid":sid})

// console.log(findteacher)
//     let size=await TeacherData.countDocuments({"req_status.sid":sid})
//     for(let i=0; i<size; i++) {
       
//      if(findteacher.req_status[i].status=="requested" && findteacher.req_status[i].subject==subject &&  findteacher.req_status[i].classes==classes &&  findteacher.req_status[i].sid==sid){
//       // if(flag==true){
//         findteacher.req_status[i].flag=false;
//         //  flag="false";

//       // }    
    
//       const abc=await findteacher.save();
//        console.log(abc)
 

//      }
//     }
//       }
 // ...
 
if (status == 'Accepted') {

// const findteacher = await TeacherData.findOneAndUpdate(
//   {
//     'req_status.sid': sid,         // Match documents where req_status has the specified sid
//     'req_status.status': "requested",      // Match documents where req_status has the specified status
//         // Match documents where req_status.flag is false
//   },  'req_status.flag': false,

// ).exec();


   const queryConditions = {
  "req_status.sid": sid,
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
      reqStatus.sid === sid &&
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





//   let size1 =  await TeacherData.countDocuments({ 'req_status.sid': sid });



// let size;
  
//     for (let i = 0; i < size1; i++) {

// if (findteacher) {
//    size = findteacher.req_status.length;
//   // Rest of the code
// } else {
//   console.error('findteacher is undefined or null');
//   // Handle the situation where findteacher is not defined
// }
//         //const size = findteacher.req_status.length;
//       for(let j = 0; j < size; j++) {
//       if (
//         findteacher.req_status[j].status == 'requested' &&
//         findteacher.req_status[j].subject == subject &&
//         findteacher.req_status[j].classes == classes &&
//         findteacher.req_status[j].sid == sid
//       ) {
//         findteacher.req_status[j].flag = false;

//         // Assuming you want to update student status, you can do it like this:
//         // const studentToUpdate = findteacher.req_status[i].student_id; // Get the student data
//         // studentToUpdate.subject = subject; // Update subject
//         // studentToUpdate.classes = classes; // Update classes

//         // If you have new student data, you can add it like this:
//         const newStudentData = { student_id: sid, subject, classes };
//         findteacher.student_id.push(newStudentData);

//         const updatedTeacherStatus = await findteacher.save();
//         console.log(updatedTeacherStatus);
//       }
//     }
//   }
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
