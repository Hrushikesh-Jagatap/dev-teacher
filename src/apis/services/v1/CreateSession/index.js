const sessionDb = require('@models/Session');
const chapterDb = require('@models/Chapter');
const { v4: uuidv4 } = require('uuid');
// Service function to create a new session in  chapter
const createSession = async (sessionData) => {
    try {
        const session_id = `SESSION_${uuidv4()}`
        sessionData.session_id = session_id;
        const newSession = await sessionDb.create(sessionData);
        const { chapter_id } = sessionData;
        await chapterDb.findOneAndUpdate(
            { chapter_id },
            { $push: { session: { Id: session_id } } }
        );
        return newSession;
    } catch (error) {
        throw new Error('Failed to create new Session for chapter');
    }
};
module.exports = {
    createSession
};
