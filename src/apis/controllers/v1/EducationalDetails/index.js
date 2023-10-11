const TeacherService = require('@services/v1/EducationalDetails')
const { HttpResponseHandler } = require('intelli-utility');
// Controller function to update a EducationalDetails by userID
const updateEducationalDetailsById = async (req, res, next) => {
    try {
        const updateEducationalDetails = req.body.educationDetails;
        const updatedDetails = await TeacherService.updateEducationalDetailsById(req.params.userId, updateEducationalDetails);
        if (!updatedDetails) {
            return HttpResponseHandler.success(req, res, updatedDetails);
        }
        return HttpResponseHandler.success(req, res, updatedDetails);
    } catch (error) {
        next(error);
    }
};
module.exports = {
    updateEducationalDetailsById,
};
