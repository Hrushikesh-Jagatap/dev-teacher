// controllers/sessionsController.js
const sessionService = require('@services/v1/getSessionDetails');
const { HttpResponseHandler } = require('intelli-utility');
// Controller function to get sessions by date and userId
const getSessionsByDate = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { date } = req.query;
    const sessions = await sessionService.getSessionsByDate(userId, date);
  
    if (!sessions) {
      return HttpResponseHandler.success(req, res, sessions);
    }
    return HttpResponseHandler.success(req, res, sessions);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getSessionsByDate,
};
