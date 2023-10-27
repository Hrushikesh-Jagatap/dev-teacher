// services/chapterService.js
const Chapter = require('@models/Chapter');
const updateChapter = async (chapterId, updatedChapterData) => {
    try {
        const updatedChapter = await Chapter.findOneAndUpdate({ chapter_id: chapterId }, updatedChapterData, { new: true });
        if (updatedChapter === null) {
            return {
                status: 404,
                message: 'Error in updating Chapte',
            };
        }
        return updatedChapter;
    } catch (error) {
        throw new Error('Failed to update Chapter');
    }
};
// when session created for chapter then seesionId will be pushed in chapter 
const addSessionToChapter = async (chapterId, sessionId) => {
    const chapter = await Chapter.findOne({ chapter_id: chapterId });
    if (!chapter) {
        return 'Chapter not found';
    }
    if (!chapter.session.includes(sessionId)) {
        chapter.session.push(sessionId);
        await chapter.save();
    }
    return chapter; // Return the updated chapter object
};

module.exports = {
    updateChapter,
    addSessionToChapter
};
