const chapterDb = require('@models/Chapter');
const { createUUID } = require('@common/libs/UUID/UUIDV4');
const { addChapterToBatch } = require('@services/v1/UpdateBatchByTeacherId')

// Service function to create a new chapter
const createChapter = async (chapterData) => {
    try {
         const chapter_id = `CHAPTER_${createUUID()}`;
        chapterData.chapter_id = chapter_id;
        const { batch_id } = chapterData;
        const updateBatch = await addChapterToBatch(batch_id, chapter_id)
        if(updateBatch === 'Batch not found') {
            return ('Error while updating chapterId in Batch');
        }

        const newChapter = await chapterDb.create(chapterData);
        return newChapter;
    } catch (error) {
        throw new Error('Failed to create Chapter');
    }
};
module.exports = {
    createChapter
};
