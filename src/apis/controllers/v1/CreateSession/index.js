const sessionService = require('@root/src/apis/services/v1/CreateSession');
const TeacherService = require('@services/v1/GetByUserId');
const { HttpResponseHandler } = require('intelli-utility');
// create a chapter
const createSession = async (req, res, next) => {
  const { userId } = req.body;
  try {
    const teacher = await TeacherService.getUserById(userId);
    if (!teacher) {
      return HttpResponseHandler.success(req, res, teacher);
    }
    
    const sessionData = req.body;
    const createSession = await sessionService.createSession(sessionData);
    return HttpResponseHandler.success(req, res, createSession);
  } catch (error) {
    next(error);
  }
};
module.exports = {
    createSession,
};
