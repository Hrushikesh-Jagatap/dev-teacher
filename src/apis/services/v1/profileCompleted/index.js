const User = require('@models/Teacher');
const isProfileCompleted = async (userId) => {
    try {
        const user = await User.findOne({ userId });
        if (!user) return false;
        const { ApplicationStatus } = user;
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
