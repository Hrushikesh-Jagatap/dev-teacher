const TeacherService = require('@services/v1/completeSession');
const { HttpResponseHandler } = require('intelli-utility');
// Controller function to update a complete Session by ID
const completeSessionById = async (req, res, next) => {
    try {
        const sessionId = req.body.session_id;
        const completeSession = await TeacherService.completeSession(req.params.userId, sessionId);
        if (!completeSession) {
            return HttpResponseHandler.success(req, res, completeSession);
        }
        return HttpResponseHandler.success(req, res, completeSession);
    } catch (error) {
        next(error);
    }
};
const getCompletedSessionsByUserIdAndChapterId = async (req, res) => {
    const { userId, chapterId } = req.params;
    try {
        const completedSessions = await TeacherService.getCompletedSessionsByUserIdAndChapterId(userId, chapterId);
        if (completedSessions) {
            return HttpResponseHandler.success(req, res, completedSessions);
        }
        return HttpResponseHandler.success(req, res, completedSessions);
    } catch (error) {
        next(error);
    }
};
module.exports = {
    completeSessionById,
    getCompletedSessionsByUserIdAndChapterId
};
