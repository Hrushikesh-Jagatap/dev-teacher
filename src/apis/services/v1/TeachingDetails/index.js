const TeacherData = require('@models/Teacher');
const _ = require('lodash');


// Service function to update a PersonalDetaisl by UserID
const updatedTeachingDetailsById = async (userId, updatedTeachingDetails) => {
  try {

    const user = await TeacherData.findOne({ userId: userId });

     if (user === null) {
      return {
        status: 404,
        message: 'TEACHER_NOT_FOUND',
      };
    }

    const mergedTeachingDetails = _.merge({}, user.teachingDetails, updatedTeachingDetails);

    const updatedTeacher = await TeacherData.findOneAndUpdate(
      { userId },
      { $set: { teachingDetails: mergedTeachingDetails, "ApplicationStatus.isTeachingDetailsCompleted": true } },
      { new: true }
    );
 if (updatedTeacher) {
      const { teachingDetails, ApplicationStatus } = updatedTeacher
      return { teachingDetails, ApplicationStatus };
    } else {
      throw new Eroor('Failed to update teachingDetails Teacher')
    } 
  } catch (error) {
    throw new Error('Failed to update TeachingDetails teacher');
  }
};

module.exports = {
  updatedTeachingDetailsById,
};
