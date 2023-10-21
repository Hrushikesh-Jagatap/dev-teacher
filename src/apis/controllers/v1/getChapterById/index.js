const ChapterService = require('@services/v1/getChapterById');
const { HttpResponseHandler } = require('intelli-utility');
// Controller function to get a single chapter by chapterId
const getChapterById = async (req, res, next) => {
    try {
        const chapter = await ChapterService.getChapterById(req.params.Id);
        
        if (!chapter) {
            return HttpResponseHandler.success(req, res, chapter);
        }
        return HttpResponseHandler.success(req, res, chapter);
    } catch (error) {
        next(error);
    }
};
module.exports = {
    getChapterById
}  
