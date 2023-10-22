const BatchData = require('@models/Batch');

// Service function to update a batch by teacher ID
const updateBatchByTeacherId = async (batchId, batchData) => {
    try {
        const updateBatch = await BatchData.findOneAndUpdate(
            { batch_id: batchId },
            batchData,
            { new: true }
        );
        if (!updateBatch) {
            throw new Error('Batch not found');
        }
        return updateBatch;
    } catch (error) {
        throw new Error('Failed to update Batch');
    }
};

// when chapter created then there Id will be pushed into Btach chapters array
const addChapterToBatch = async (batchId, chapterId) => { 
    const batch = await BatchData.findOne({ batch_id: batchId });
    if(!batch) {
        return ('Batch not found');
    }
    if (!batch.chapters.includes(chapterId)) {
        batch.chapters.push(chapterId);
        await batch.save();
        return batch;
    } 
} 

module.exports = {
    updateBatchByTeacherId,
    addChapterToBatch
};
