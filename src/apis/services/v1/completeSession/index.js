const Session = require('@models/Session');
const { getUserById } = require('@services/v1/GetByUserId')
const completeSession = async (userId, sessionId) => {
    try {
        const teacher = await getUserById(userId);
        if (!teacher) {
            return ('TEACHER DOES NOT EXIST');
        }
        const session = await Session.findOne({ session_id: sessionId });
        if (!session) {
            throw new Error('Session not found');
        }
        session.status = true;
        await session.save();
        return { message: 'Session completed successfully' };
    } catch (error) {
        throw new Error('Failed to complete the session');
    }
};
const getCompletedSessionsByUserIdAndChapterId = async (userId, chapterId) => {
    try {
        const completedSessions = await Session.find({ userId: userId, chapterId: chapterId, status: true });
        return completedSessions;
    } catch (error) {
        throw new Error('Failed to retrieve completed sessions');
    }
};
module.exports = {
    completeSession,
    getCompletedSessionsByUserIdAndChapterId
};
