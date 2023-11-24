const TeacherData = require('@models/Teacher');

const getAllStudentDetails = async (teacherUserId) => {
  try {

    const teacher = await TeacherData.findOne({ userId: teacherUserId });

    if (!teacher) {
      return {
        status: 404,
        message: 'TEACHER_NOT_FOUND',
      };
    }

    const studentUserIds = teacher?.student_userId || [];

    // Ensure that the studentUserIds array is not empty and contains objects with details.
    if (studentUserIds.length === 0 || !studentUserIds.every(student => student.student_userId)) {
      throw new Error('Invalid student_userId data');
    }

    // Return the list of student details.
    return studentUserIds;
  } catch (error) {
    // Handle errors and throw a custom error if needed.
    throw new Error('Failed to get student details: ' + error.message);
  }
};

module.exports = {
  getAllStudentDetails,
};

