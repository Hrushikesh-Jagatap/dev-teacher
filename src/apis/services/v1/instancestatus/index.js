const TeacherData = require('@models/Teacher');
const _ = require('lodash');
// Service function to update a EducationalDetails by UserID
const updateEducationalDetailsById = async (userId, updateEducationalDetails) => {
  try {
    const user = await TeacherData.findOne({ userId: userId });
    if (user === null) {
      return {
        status: 404,
        message: 'TEACHER_NOT_FOUND',
      };
    }
   // const mergedEducationalDetails = _.merge({}, user.educationDetails, updateEducationalDetails);
    //mergedEducationalDetails.teaching_languages = updateEducationalDetails.teaching_languages;
    const updatedTeacher = await TeacherData.findOneAndUpdate(
      { userId },
      { $set: { "instance_status.status": updateEducationalDetails} },
      { new: true }
    );
    if (updatedTeacher) {
      const { instance_status } = updatedTeacher
      return { instance_status };
    } else {
      throw new Eroor('Failed to update educationDetails Teacher')
    }
  } catch (error) {
    throw new Error('Failed to update EducationalDetails');
  }
};
module.exports = {
  updateEducationalDetailsById,
};
