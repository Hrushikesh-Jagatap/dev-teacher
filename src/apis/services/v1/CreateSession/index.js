const sessionDb = require('@models/Session');
const { createUUID } = require('@common/libs/UUID/UUIDV4');
const { addSessionToChapter } = require('@services/v1/updateChapter')
// Service function to create a new session in  chapter
const createSession = async (sessionData) => {
    try {
        const session_id = `SESSION_${createUUID()}`;
        sessionData.session_id = session_id;
       
        const { chapter_id } = sessionData;
         const updateChapter = await addSessionToChapter(chapter_id, session_id)
        if (updateChapter === 'chapter not found') {
            return ('Error while updating sessionId in chapter');
        }
        const newSession = await sessionDb.crechapter_idate(sessionData);
        // await chapterDb.findOneAndUpdate(
        //     { chapter_id },
        //     { $push: { session: { Id: session_id } } }
        // );
        return newSession;
    } catch (error) {
        throw new Error('Failed to create new Session for chapter');
    }
};
module.exports = {
    createSession
};
