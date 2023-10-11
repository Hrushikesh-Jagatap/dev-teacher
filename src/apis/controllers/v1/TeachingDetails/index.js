const TeacherService = require('@services/v1/TeachingDetails');
const { HttpResponseHandler } = require('intelli-utility');
// Controller function to update a PersonalDetails by userID
const updateTeachingDetailsById = async (req, res, next) => {
    try {
        const updatedTeachingDetails = req.body.teachingDetails;
        const updatedDetails = await TeacherService.updatedTeachingDetailsById(req.params.userId, updatedTeachingDetails);
        if (!updatedDetails) {
            return HttpResponseHandler.success(req, res, updatedDetails);
        }
        return HttpResponseHandler.success(req, res, updatedDetails);
    } catch (error) {
        next(error);
    }
};
module.exports = {
    updateTeachingDetailsById,
};
