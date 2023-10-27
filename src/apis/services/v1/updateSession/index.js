// services/sessionService.js
const Session = require('@models/Session');
const updateSession = async (sessionId, updatedSessionData) => {
    try {
        const { chapter_id } = updatedSessionData;
        const updatedSession = await Session.findOneAndUpdate({ session_id: sessionId }, updatedSessionData, { new: true });
      if (updatedSession === null) {
            return {
                status: 404,
                message: 'Session not found',
            };
        }
        return updatedSession;
    } catch (error) {
        throw new Error('Failed to update session');
    }
};
module.exports = {
    updateSession,
};
