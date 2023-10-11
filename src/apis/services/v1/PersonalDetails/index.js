const TeacherData = require('@models/Teacher');
const _ = require('lodash');

// Service function to update a PersonalDetaisl by UserID
const updatePersonalDetailsById = async (userId, updatedPersonalDetails) => {
  try {
    const user = await TeacherData.findOne({ userId: userId });

    if (!user) {
      return "User not found In Db"
    }

    const mergedPersonalDetails = _.merge({}, user.personalDetails, updatedPersonalDetails);

    const updatedTeacher = await TeacherData.findOneAndUpdate(
      { userId: userId },
      { $set: { personalDetails: mergedPersonalDetails } },
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
