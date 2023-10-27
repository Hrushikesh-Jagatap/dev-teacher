const TeacherData1 = require('@models/Teacher');

// Service function to create a new teacher
const createTeacher = async (teacherData) => {
  try {

    // const teachers = await TeacherData1.find();
    // let teacherId = teachers.length;

    // let teacher_id = teacherId + 1;
    // teacherData.teacher_id = teacher_id;

    const newTeacher = await TeacherData1.create(teacherData);

     if (newTeacher === null) {
      return {
        status: 404,
        message: 'Failed to create teacher',
      };
    }
    return newTeacher;
  } catch (error) {
    throw new Error('Failed to create teacher');
  }
};

module.exports = {
  createTeacher
};
