const ChapterData = require('@models/Chapter');
const Session = require('@models/Session');
const getChapterById = async (chapterId) => {
    try {
        const chapter = await ChapterData.findOne({ chapter_id: chapterId });
        if (!chapter) {
            throw new Error('Chapter not found');
        }
        const sessionIds = chapter.session.map(sessionItem => sessionItem.Id);
        const sessionDetails = await Session.find(
            { session_id: { $in: sessionIds } },
            { mettingUrl: 1, ThumbNail: 1, _id: 0 }
        );
        return { chapter, sessionDetails };
        
    } catch (error) {
        throw new Error('Failed to get chapter');
    }
};
module.exports = {
    getChapterById
};
