const BatchData = require('@models/Batch');

// Service function to get a single batch by teacher ID
const getBatchByTeacherId = async (userId) => {
  try {
    const batch = await BatchData.find({ userId: userId });
    return batch;
  } catch (error) {
    throw new Error('Failed to get Batch By TeacherId');
  }
};

module.exports = {
  getBatchByTeacherId
}  
