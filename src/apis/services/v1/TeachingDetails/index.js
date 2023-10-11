const TeacherData = require('@models/Teacher');
// Service function to update a PersonalDetaisl by UserID
const updatedTeachingDetailsById = async (userId, updatedTeachingDetails) => {
  try {
    const updatedTeacher = await TeacherData.findOneAndUpdate(
      { userId },
      { $set: { teachingDetails: updatedTeachingDetails } },
      { new: true }
    );
    return updatedTeacher;
  } catch (error) {
    throw new Error('Failed to update TeachingDetails teacher');
  }
};
module.exports = {
  updatedTeachingDetailsById,
};
