const TeacherData = require('@models/Teacher');

// Service function to update a teacher by ID
const updateTeacherById = async (userId, teacherData) => {
  try {
    const updatedTeacher = await TeacherData.findOneAndUpdate({ userId: userId }, teacherData);
     if (updatedTeacher === null) {
      return {
          status: 404,
          message: 'ERROR_WHILE_UPDATING',
      };
  }
    return updatedTeacher;
  } catch (error) {
    throw new Error('Failed to update teacher');
  }
};
const addBatchDetails = async (userId, BatchData) => {
  try {
    const teacher = await TeacherData.findOne({ userId });
    const updateTeacher =  teacher.teachingDetails.batch_taught.push(BatchData);
    await teacher.save();
    if(!updateTeacher) {
      return ('Error')
    }
    return BatchData;
  } catch (error) {
    throw new Error('Failed to update Batch Details in Teacher Database');
  }
}
module.exports = {
  updateTeacherById,
  addBatchDetails
};
