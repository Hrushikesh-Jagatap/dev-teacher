// services/sessionService.js
const Session = require('@models/Session');
// Service function to get sessions by date and userId
const getSessionsByDate = async (userId, date) => {
  try {
    const sessions = await Session.find({
      userId,
      sessionDate: { $gte: new Date(date), $lt: new Date(date + 'T23:59:59') },
    });
       if (sessions === null) {
      return {
        status: 404,
        message: 'SESSION_NOT_FOUND',
      };
    }
    return sessions;
    
  } catch (error) {
    throw new Error('Failed to retrieve sessions');
  }
};
module.exports = {
  getSessionsByDate,
};
