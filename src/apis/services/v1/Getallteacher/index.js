
const TeacherData = require('@models/Teacher');
// Service function to get a single teacher by ID
const getall = async () => {
    try {
      const teacher = await TeacherData.find({});
      return teacher;
    } catch (error) {
      throw new Error('Failed to get teacher');
    }
  };
module.exports = {
  getall
}  
