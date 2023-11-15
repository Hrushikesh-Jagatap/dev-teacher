const OfflineTeachingService = require('@services/v1/OfflineTeachingDeatis')
const { HttpResponseHandler } = require('intelli-utility');
// Controller function to update a EducationalDetails by userID
const offlinetechingDetailsById = async (req, res, next) => {
    try {
        const updateAdminreviewDetails = req.body.OfflineTeachingDeatis;
        const updatedDetails = await OfflineTeachingService.updateofflineteachingDetailsById(req.params.userId, updateAdminreviewDetails);
        if (!updatedDetails) {
            return HttpResponseHandler.success(req, res, updatedDetails);
        }
        return HttpResponseHandler.success(req, res, updatedDetails);
    } catch (error) {
        next(error);
    }
};
module.exports = {
    offlinetechingDetailsById,
};
