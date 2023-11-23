const SessionData = require('@models/Session');
const Session = require('@models/Session');

const getSessionById = async (session_id) => {
    try {
        const session = await SessionData.findOne({ session_id: session_id });
        if (session === null) {
            return {
              status: 404,
              message: 'SESSION_NOT_FOUND',
            };
          }
        return session;
        
    } catch (error) {
        throw new Error('Failed to get session');
    }
};
module.exports = {
    getSessionById
};
