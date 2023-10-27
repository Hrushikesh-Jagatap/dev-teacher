const BatchData = require('@models/Batch');

// Service function to get a single batch by batchID
const getBatchByBatchId = async (batch_id) => {
    try {
      const batch = await BatchData.findOne({batch_id:batch_id});
         if (batch === null) {
        return {
          status: 404,
          message: 'BATCH_NOT_FOUND',
        };
      }
  
      return batch;
    } catch (error) {
      throw new Error('Failed to get Batch');
    }
  };

module.exports = {
    getBatchByBatchId
}  
