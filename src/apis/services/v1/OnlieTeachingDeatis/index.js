const TeacherData = require('@models/Teacher');
const _ = require('lodash');
// Service function to update a EducationalDetails by UserID
// const updateEducationalDetailsById = async (userId, updateEducationalDetails) => {
    const updateonlineteachingDetailsById = async (userId, updateAdminreviewDetails) => {
    
  try {
    const user = await TeacherData.findOne({ userId: userId });
    if (user === null) {
      return {
        status: 404,
        message: 'TEACHER_NOT_FOUND',
      };
    }
    const mergedAdminreviewDetails = _.merge({}, user.OnlieTeachingDeatis, updateAdminreviewDetails);
    // mergedEducationalDetails.teaching_languages = updateAdminreviewDetails.teaching_languages;
console.log('================================================================',mergedAdminreviewDetails)
    const updatedTeacher = await TeacherData.findOneAndUpdate(
      { userId },
      { $set: { OnlieTeachingDeatis: mergedAdminreviewDetails} },
      { new: true }
    );
    if (updatedTeacher) {
      const {OnlieTeachingDeatis } = updatedTeacher
      return {OnlieTeachingDeatis };
    } else {
      throw new Eroor('Failed to update educationDetails Teacher')
    }
  } catch (error) {
    throw new Error('Failed to update EducationalDetails');
  }
};
module.exports = {
  updateonlineteachingDetailsById,
};
