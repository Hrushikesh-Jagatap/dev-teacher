const TeacherData = require('@models/Teacher');

// Service function to get all teachers
const getAllTeachers = async () => {
  try {
    const teachers = await TeacherData.find();
     if (teachers === null) {
      return {
        status: 404,
        message: 'TEACHERS_NOT_FOUND',
      };
    }
    return teachers;
  } catch (error) {
    throw new Error('Failed to get teachers');
  }
};


module.exports = {
    getAllTeachers
}  
