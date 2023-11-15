const OnlineTeachingService = require('@services/v1/OnlieTeachingDeatis')
const { HttpResponseHandler } = require('intelli-utility');
// Controller function to update a EducationalDetails by userID
const onlinetechingDetailsById = async (req, res, next) => {
    try {
        const updateAdminreviewDetails = req.body.OnlieTeachingDeatis;
        const updatedDetails = await OnlineTeachingService.updateonlineteachingDetailsById(req.params.userId, updateAdminreviewDetails);
        if (!updatedDetails) {
            return HttpResponseHandler.success(req, res, updatedDetails);
        }
        return HttpResponseHandler.success(req, res, updatedDetails);
    } catch (error) {
        next(error);
    }
};
module.exports = {
    onlinetechingDetailsById,
};
