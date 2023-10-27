const User = require('@models/Teacher');
const isProfileCompleted = async (userId) => {
    try {
        const user = await User.findOne({ userId });
       if (user === null) {
            return {
                status: 404,
                message: 'NO_TEACHER_FOUND',
            };
        }        const { ApplicationStatus } = user;
        const isCompleted = ApplicationStatus.isPersonalDetailsCompleted &&
            ApplicationStatus.isEducationalDetailCompleted &&
            ApplicationStatus.isbankDetailsCompleted &&
            ApplicationStatus.isTeachingDetailsCompleted;
        if (isCompleted) {
            await User.updateOne({ userId }, { isProfileCompleted: true });
        }
        return isCompleted;
    } catch (error) {
        throw error;
    }
}
module.exports = {
    isProfileCompleted,
};
