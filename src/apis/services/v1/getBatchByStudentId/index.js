const BatchData = require('@models/Batch');

// Service function to get a single batch by batchID
const getBatchByStudentId = async (studentIds) => {
  try {
const batch = await BatchData.findOne({ student_userId: { $in: studentIds } });
    if (batch === null) {
      return {
        status: 404,
        message: 'BATCH_NOT_FOUND_FOR_STUDENT',
      };
    }
    return batch;
  } catch (error) {
    throw new Error('Failed to get Batch');
  }
};

module.exports = {
  getBatchByStudentId
}  
