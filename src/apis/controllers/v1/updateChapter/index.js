const chapterService = require('@services/v1/updateChapter')
const { HttpResponseHandler } = require('intelli-utility');
const updateChapter = async (req, res, next) => {
    try {
        const chapterId = req.params.Id;   // Get the chapter  ID from the URL
        const updatedChapterData = req.body;   // The updated chapter  data from the request body
        const updateChapter = await chapterService.updateChapter(chapterId, updatedChapterData);
        if (!updateChapter) {
            return HttpResponseHandler.success(req, res, updateChapter);
        }
        return HttpResponseHandler.success(req, res, updateChapter);
    } catch (error) {
        next(error)
    }
};
module.exports = {
    updateChapter,
};
