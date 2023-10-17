const TeacherData = require('@models/Teacher');

const searchTeacher = async (query) => {
  try {
    const { mode, subject, className, lang } = query;

    const filter = {};

    if (mode) {
      filter["teachingDetails.teaching_mode"] = mode;
    }

    if (subject) {
      filter["teachingDetails.subjects_taught.subject"] = new RegExp(subject, 'i');
    }

    if (className) {
      filter["teachingDetails.subjects_taught.class"] = new RegExp(className, 'i');
    }

    if (lang) {
      filter["educationDetails.teaching_languages"] = new RegExp(lang, 'i');
    }

    const results = await TeacherData.find(filter)
      .select("userId teacher_id personalDetails teachingDetails educationDetails")
      .lean().exec();

    return results;
  } catch (error) {
    throw new Error('Failed to find teachers');
  }
};

module.exports = {
  searchTeacher,
};
