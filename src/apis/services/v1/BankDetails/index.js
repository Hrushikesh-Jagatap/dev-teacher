const TeacherData = require('@models/Teacher');
// Service function to update a BankDetails by UserID
const updateBankDetailsById = async (userId, updateBankDetails) => {
  try {
    const updatedTeacher = await TeacherData.findOneAndUpdate(
      { userId },
      { $set: { bankDetails: updateBankDetails } },
      { new: true }
    );
    return updatedTeacher;
  } catch (error) {
    throw new Error('Failed to update BankDetails');
  }
};
module.exports = {
  updateBankDetailsById,
};
