const TeacherData = require('@models/Teacher');
const _ = require('lodash');

// Service function to update a EducationalDetails by UserID
const updateEducationalDetailsById = async (userId, updateEducationalDetails) => {
  try {

    const user = await TeacherData.findOne({ userId: userId });

    if (!user) {
      return "User not found In Db"
    }

    const mergedEducationalDetails = _.merge({}, user.educationDetails, updateEducationalDetails);

    const updatedTeacher = await TeacherData.findOneAndUpdate(
      { userId },
      { $set: { educationDetails: mergedEducationalDetails } },
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
