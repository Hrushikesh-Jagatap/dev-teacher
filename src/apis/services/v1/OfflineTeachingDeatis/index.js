const TeacherData = require('@models/Teacher');
const _ = require('lodash');
// Service function to update a EducationalDetails by UserID
// const updateEducationalDetailsById = async (userId, updateEducationalDetails) => {
    const updateofflineteachingDetailsById = async (userId, updateAdminreviewDetails) => {
    
  try {
    const user = await TeacherData.findOne({ userId: userId });
    if (user === null) {
      return {
        status: 404,
        message: 'TEACHER_NOT_FOUND',
      };
    }
    const mergedAdminreviewDetails = _.merge({}, user.OfflineTeachingDeatis, updateAdminreviewDetails);
    // mergedEducationalDetails.teaching_languages = updateAdminreviewDetails.teaching_languages;
console.log('================================================================',mergedAdminreviewDetails)
    const updatedTeacher = await TeacherData.findOneAndUpdate(
      { userId },
      { $set: { OfflineTeachingDeatis: mergedAdminreviewDetails} },
      { new: true }
    );
    if (updatedTeacher) {
      const {OfflineTeachingDeatis } = updatedTeacher
      return {OfflineTeachingDeatis };
    } else {
      throw new Eroor('Failed to update educationDetails Teacher')
    }
  } catch (error) {
    throw new Error('Failed to update EducationalDetails');
  }
};
module.exports = {
  updateofflineteachingDetailsById,
};
