//  Batch model
const Batch = require('@models/Batch');

const { createUUID } = require('@common/libs/UUID/UUIDV4');

// Create multiple batches
const createBatches = async (batchData) => {
  try {
  const batch_id = `BATCH_${createUUID()}`;
   
    
    batchData.batch_id = batch_id;

   
    const createdBatches = await Batch.create(batchData);

    if (!createdBatches) {

           return 'Error while creating batch';

    }
    return createdBatches;
  } catch (error) {
    throw new Error('Failed to create batches');
  }
};

module.exports = {
  createBatches,
};
