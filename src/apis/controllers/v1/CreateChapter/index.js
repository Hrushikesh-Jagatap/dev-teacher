const chapterService = require('@root/src/apis/services/v1/CreateChapter');
const TeacherService = require('@services/v1/GetByUserId');
const { HttpResponseHandler } = require('intelli-utility');
// create a chapter
const createChapter = async (req, res, next) => {
  const { userId } = req.body;
  try {
    const teacher = await TeacherService.getUserById(userId);
    if (!teacher) {
      return HttpResponseHandler.success(req, res, teacher);
    }
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
