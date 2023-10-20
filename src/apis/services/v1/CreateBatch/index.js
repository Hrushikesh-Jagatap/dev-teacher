//  Batch model
const Batch = require('@models/Batch');
const Chapter = require('@models/Chapter');
const { v4: uuidv4 } = require('uuid');

// Create multiple batches
const createBatches = async (batchData) => {
  try {

    const batch_id = `BATCH_${uuidv4()}`
    
    batchData.batch_id = batch_id;

    batchData.chapters.forEach((chapter) => {
      chapter.Id = `CHAPTER_${uuidv4()}`;
    });

    const createdBatches = await Batch.create(batchData);

    if (!createdBatches) {

      return ('Error while creating batch');

    } else {

      const chapterData = batchData.chapters.map((chapter) => {
        return {
          userId: batchData.userId,
          batch_id: batchData.batch_id,
          chapter_id: chapter.Id,
          name: chapter.name,
          status: chapter.status
        };
      });

      await Chapter.create(chapterData);
    }
    return createdBatches;
  } catch (error) {
    throw new Error('Failed to create batches');
  }
}

module.exports = {
  createBatches,
};
