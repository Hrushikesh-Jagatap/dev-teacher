// services/chapterService.js
const Chapter = require('@models/Chapter');
const updateChapter = async (chapterId, updatedChapterData) => {
    try {
        const updatedChapter = await Chapter.findOneAndUpdate({ chapter_id: chapterId }, updatedChapterData, { new: true });
        if (!updatedChapter) {
            throw new Error('Error in updating Chapter');
        }
        return updatedChapter;
    } catch (error) {
        throw new Error('Failed to update Chapter');
    }
};
module.exports = {
    updateChapter,
};
