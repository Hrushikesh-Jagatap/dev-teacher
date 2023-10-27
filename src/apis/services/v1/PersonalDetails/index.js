const TeacherData = require('@models/Teacher');
const _ = require('lodash');

// Service function to update a PersonalDetaisl by UserID
const updatePersonalDetailsById = async (userId, updatedPersonalDetails) => {
  try {
    const user = await TeacherData.findOne({ userId: userId });

 if (user === null) {
      return {
        status: 404,
        message: 'TEACHER_NOT_FOUND',
      };
    }

    const mergedPersonalDetails = _.merge({}, user.personalDetails, updatedPersonalDetails);

    const updatedTeacher = await TeacherData.findOneAndUpdate(
      { userId: userId },
      { $set: { personalDetails: mergedPersonalDetails, "ApplicationStatus.isPersonalDetailsCompleted": true  } },
      { new: true }
    );
 if (updatedTeacher) {
      const { personalDetails, ApplicationStatus } = updatedTeacher
      return { personalDetails, ApplicationStatus };
    } else {
      throw new Eroor('Failed to get PersonalDetails Teacher')
    }
  } catch (error) {
    throw new Error('Failed to updatePersonal teacher');
  }
};

module.exports = {
  updatePersonalDetailsById,
};
