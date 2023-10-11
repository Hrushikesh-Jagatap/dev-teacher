const TeacherData = require('@models/Teacher');
// Service function to update a PersonalDetaisl by UserID
const updatePersonalDetailsById = async (userId, updatedPersonalDetails) => {
  try {
    const updatedTeacher = await TeacherData.findOneAndUpdate(
      { userId },
      { $set: { personalDetails: updatedPersonalDetails } },
      { new: true }
    );
    return updatedTeacher;
  } catch (error) {
    throw new Error('Failed to updatePersonal teacher');
  }
};
module.exports = {
  updatePersonalDetailsById,
};
