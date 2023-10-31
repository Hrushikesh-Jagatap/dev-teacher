const TeacherData = require('@models/Teacher');

// Service function to get a single teacher by ID
const getUserById = async (userId) => {
    try {
      const teacher = await TeacherData.findOne({userId:userId});
        
      return teacher;
    } catch (error) {
      throw new Error('Failed to get teacher');
    }
  };

module.exports = {
  getUserById
}  
