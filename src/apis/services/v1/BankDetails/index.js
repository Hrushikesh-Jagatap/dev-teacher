const TeacherData = require('@models/Teacher');
const _ = require('lodash');


// Service function to update a BankDetails by UserID
const updateBankDetailsById = async (userId, updateBankDetails) => {
  try {

    const user = await TeacherData.findOne({ userId: userId });

    if (!user) {
      return "User not found In Db"
    }

    const mergedBankDetails = _.merge({}, user.bankDetails, updateBankDetails);

    const updatedTeacher = await TeacherData.findOneAndUpdate(
      { userId },
         { $set: { bankDetails: mergedBankDetails ,  "ApplicationStatus.isbankDetailsCompleted": true} },
      { new: true }
    );
    if(updatedTeacher) {

      const { bankDetails, ApplicationStatus } = updatedTeacher
      return { bankDetails, ApplicationStatus };
    } else {
      throw new Eroor('Failed to update BankDetails of  Teacher')
    }
  } catch (error) {
    throw new Error('Failed to update BankDetails');
  }
};

module.exports = {
  updateBankDetailsById,
};
