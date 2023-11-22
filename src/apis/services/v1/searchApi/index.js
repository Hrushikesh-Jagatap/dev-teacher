const TeacherData = require('@models/Teacher');

const searchTeacher = async (query) => {
  try {
    const { mode } = query;

    if (mode === 'Online') {
      return await searchOnlineTeachers(query);
    } else if (mode === 'Offline') {
      return await searchOfflineTeachers(query);
    } else {
      return {
        status: 400,
        message: 'INVALID_MODE',
      };
    }
  } catch (error) {
    throw new Error('Failed to find teachers');
  }
};

const searchOnlineTeachers = async (query) => {
  const { subject, className, lang } = query;

  const filter = {
    "OnlieTeachingDeatis.teaching_mode": "Online"
  };

  if (subject) {
    filter["OnlieTeachingDeatis.subjects_taught.subject"] = new RegExp(subject, 'i');
  }

  if (className) {
    filter["OnlieTeachingDeatis.subjects_taught.class"] = new RegExp(className, 'i');
  }

  if (lang) {
    filter["educationDetails.teaching_languages"] = new RegExp(lang, 'i');
  }

  const onlineResults = await TeacherData.find(filter)
    .select("userId personalDetails teachingDetails educationDetails OnlieTeachingDeatis OfflineTeachingDeatis")
    .lean().exec();

  return { onlineResults };
};

const searchOfflineTeachers = async (query) => {
  const { subject, className, lang } = query;

  const filter = {
    "OfflineTeachingDeatis.teaching_mode": "Offline"
  };

  if (subject) {
    filter["OfflineTeachingDeatis.subjects_taught.subject"] = new RegExp(subject, 'i');
  }

  if (className) {
    filter["OfflineTeachingDeatis.subjects_taught.class"] = new RegExp(className, 'i');
  }

  if (lang) {
    filter["educationDetails.teaching_languages"] = new RegExp(lang, 'i');
  }

  const offlineResults = await TeacherData.find(filter)
    .select("userId personalDetails teachingDetails educationDetails OnlieTeachingDeatis OfflineTeachingDeatis")
    .lean().exec();

  return { offlineResults };
};

module.exports = {
  searchTeacher,
};
