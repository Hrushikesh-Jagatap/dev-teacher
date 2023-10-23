const TeacherService = require('@services/v1/profileCompleted');
const { HttpResponseHandler } = require('intelli-utility');
const isProfileCompleted = async (req, res, next) => {
    const userId = req.params.userId;
    try {
        const getprofileCompleted = await TeacherService.isProfileCompleted(userId);
        if (!getprofileCompleted) {
            return HttpResponseHandler.success(req, res, "No profile completed");
        }
        return HttpResponseHandler.success(req, res, getprofileCompleted);
    } catch (error) {
        next(error);
    }
}
module.exports = {
    isProfileCompleted,
}
