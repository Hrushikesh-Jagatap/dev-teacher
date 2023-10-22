const chapterService = require('@root/src/apis/services/v1/CreateChapter');
const { getUserById } = require('@services/v1/GetByUserId')
const { HttpResponseHandler } = require('intelli-utility');
// create a chapter
const createChapter = async (req, res, next) => {
  const { userId } = req.body;
  const teacher = await getUserById(userId);
    if (!teacher) {
      return ('Teacher is not available in Db')
    }
    try {
    const chapterData = req.body;
    const createdChapter = await chapterService.createChapter(chapterData);
    return HttpResponseHandler.success(req, res, createdChapter);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  createChapter,
};
