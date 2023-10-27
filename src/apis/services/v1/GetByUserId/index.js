const TeacherData = require('@models/Teacher');

// Service function to get a single teacher by ID
const getUserById = async (userId) => {
    try {
      const teacher = await TeacherData.findOne({userId:userId});
         if (teacher === null) {
        return {
          status: 404,
          message: 'TEACHER_NOT_FOUND',
        };
      }
      return teacher;
    } catch (error) {
      throw new Error('Failed to get teacher');
    }
  };

module.exports = {
  getUserById
}  
