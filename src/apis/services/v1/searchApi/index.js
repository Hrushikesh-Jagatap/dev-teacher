const Teacher = require('@models/Teacher');

const searchTeacher = async (query) => {
    try {
        const { subject, lang, className, mode } = query;

        const filter = []

        if (subject) filter.push({ "subjects_taught.subject": subject });
        if (className) filter.push({ "subjects_taught.class": className });
        if (mode) filter.push({ "teaching_mode": mode });
        if (lang) filter.push({ "teaching_languages": { $in: [lang] } });

        const results = await Teacher.find({ $or: filter })
             .select("userId teacher_id personalDetails teachingDetails educationDetails")
            .exec();

        return results;
    } catch (error) {
        throw new Error('Failed to get teachers');
    }
};

module.exports = {
    searchTeacher,
};
