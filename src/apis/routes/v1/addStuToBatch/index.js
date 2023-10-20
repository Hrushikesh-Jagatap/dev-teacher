onst Batch = require('@models/Batch');
const TeacherData = require('@models/Teacher');
// add  Student To Batch Service
const addToBatch = async (userId, data) => {
    try {
        const studentIdToAdd = data.student_userId
        const user = await TeacherData.findOne({ userId: userId });
        if (!user) {
            return ('Teacher Does Not Exist');
        }
        const { batch_id } = data;
        const batch = await Batch.findOne({ batch_id: batch_id });
        if (!batch) {
            return ('Batch not found');
        }
        if (batch.student_userId.includes(studentIdToAdd)) {
            return ('Invalid student ID or student already in the batch');
        }
        // Add the student to the batch
        batch.student_userId.push(...studentIdToAdd);
        await batch.save();
        return { studentIdToAdd };
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to add student to the batch' });
    }
};
module.exports = {
    addToBatch,
};
