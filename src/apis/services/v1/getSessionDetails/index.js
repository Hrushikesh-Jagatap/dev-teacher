// services/sessionService.js
const Session = require('@models/Session');
// Service function to get sessions by date and userId
const getSessionsByDate = async (userId, date) => {
  try {
    const sessions = await Session.find({
      userId,
      sessionDate: { $gte: new Date(date), $lt: new Date(date + 'T23:59:59') },
    });
    return sessions;
    
  } catch (error) {
    throw new Error('Failed to retrieve sessions');
  }
};
module.exports = {
  getSessionsByDate,
};
