const TeacherService = require('@services/v1/PersonalDetails');
const { HttpResponseHandler } = require('intelli-utility');
// Controller function to update a PersonalDetails by ID
const updatePersonalDetailsById = async (req, res, next) => {
    try {
        const updatedPersonalDetails = req.body.personalDetails;
        const updatedDetails = await TeacherService.updatePersonalDetailsById(req.params.userId, updatedPersonalDetails);
        if (!updatedDetails) {
            return HttpResponseHandler.success(req, res, updatedDetails);
        }
        return HttpResponseHandler.success(req, res, updatedDetails);
    } catch (error) {
        next(error);
    }
};
module.exports = {
    updatePersonalDetailsById,
};
