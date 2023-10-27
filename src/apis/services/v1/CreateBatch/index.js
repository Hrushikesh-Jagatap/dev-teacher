//  Batch model
const Batch = require('@models/Batch');

const { createUUID } = require('@common/libs/UUID/UUIDV4');
const { addBatchDetails } = require('@services/v1/UpdateTeacherById')

// Create multiple batches
const createBatches = async (batchData) => {
  try {
  const batch_id = `BATCH_${createUUID()}`;
   
    
    batchData.batch_id = batch_id;

const { userId } = batchData;
    const Batchdata = {
      batch_id: batchData.batch_id,
      batch_name: batchData.batch_name,
      batch_class: batchData.className,
    };
    const addBatchDetailToTeacher = await addBatchDetails(userId, Batchdata)
    if(addBatchDetailToTeacher === 'Error') {
     return {
        status: 404,
        message: 'Error while updating Batch Details in Teacher',
      };
    }
    const createdBatches = await Batch.create(batchData);

    if (createdBatches === null) {
      return {
        status: 404,
        message: 'ERROR_WHILE_CREATING_BATCH',
      };
    }
    return createdBatches;
  } catch (error) {
    throw new Error('Failed to create batches');
  }
};

module.exports = {
  createBatches,
};
