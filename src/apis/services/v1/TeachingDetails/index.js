const TeacherData = require('@models/Teacher');
const _ = require('lodash');


// Service function to update a PersonalDetaisl by UserID
const updatedTeachingDetailsById = async (userId, updatedTeachingDetails) => {
  try {

    const user = await TeacherData.findOne({ userId: userId });

    if (!user) {
      return "User not found In Db"
    }

    const mergedTeachingDetails = _.merge({}, user.teachingDetails, updatedTeachingDetails);

    const updatedTeacher = await TeacherData.findOneAndUpdate(
      { userId },
      { $set: { teachingDetails: mergedTeachingDetails } },
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
