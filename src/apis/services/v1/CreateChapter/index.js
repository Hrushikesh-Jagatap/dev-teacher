const chapterDb = require('@models/Chapter');
// Service function to create a new chapter
const createChapter = async (chapterData) => {
    try {
        const newChapter = await chapterDb.create(chapterData);
        return newChapter;
    } catch (error) {
        throw new Error('Failed to create Chapter');
    }
};
module.exports = {
    createChapter
};
