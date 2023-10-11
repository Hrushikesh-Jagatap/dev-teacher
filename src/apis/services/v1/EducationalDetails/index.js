const TeacherData = require('@models/Teacher');
// Service function to update a EducationalDetails by UserID
const updateEducationalDetailsById = async (userId, updateEducationalDetails) => {
  try {
    const updatedTeacher = await TeacherData.findOneAndUpdate(
      { userId },
      { $set: { educationDetails: updateEducationalDetails } },
      { new: true }
    );
    return updatedTeacher;
  } catch (error) {
    throw new Error('Failed to update EducationalDetails');
  }
};
module.exports = {
  updateEducationalDetailsById,
};
