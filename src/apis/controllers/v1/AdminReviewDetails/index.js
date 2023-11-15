const AdminreviewService = require('@services/v1/AdminReviewDetails')
const { HttpResponseHandler } = require('intelli-utility');
// Controller function to update a EducationalDetails by userID
const updateadminreviewDetailsById = async (req, res, next) => {
    try {
        const updateAdminreviewDetails = req.body.Admin_Review;
        const updatedDetails = await AdminreviewService.updateEducationalDetailsById(req.params.userId, updateAdminreviewDetails);
        if (!updatedDetails) {
            return HttpResponseHandler.success(req, res, updatedDetails);
        }
        return HttpResponseHandler.success(req, res, updatedDetails);
    } catch (error) {
        next(error);
    }
};
module.exports = {
    updateadminreviewDetailsById,
};
