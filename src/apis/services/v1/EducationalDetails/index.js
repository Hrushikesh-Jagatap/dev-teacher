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
    mergedEducationalDetails.teaching_languages = updateEducationalDetails.teaching_languages;

    const updatedTeacher = await TeacherData.findOneAndUpdate(
      { userId },
       { $set: { educationDetails: mergedEducationalDetails, "ApplicationStatus.isEducationalDetailCompleted": true } },
      { new: true }
    );
 if (updatedTeacher) {
      const { educationDetails, ApplicationStatus } = updatedTeacher
      return { educationDetails, ApplicationStatus };
    } else {
      throw new Eroor('Failed to update educationDetails Teacher')
    }  } catch (error) {
    throw new Error('Failed to update EducationalDetails');
  }
};

module.exports = {
  updateEducationalDetailsById,
};
