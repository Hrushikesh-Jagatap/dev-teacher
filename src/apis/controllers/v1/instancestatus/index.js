const instancestatusServices = require('@services/v1/instancestatus')
const { HttpResponseHandler } = require('intelli-utility');
// Controller function to update a EducationalDetails by userID
const updateInstanceDetailsById = async (req, res, next) => {
    try {
        const updateEducationalDetails = req.body.status;
        const updatedDetails = await instancestatusServices.updateEducationalDetailsById(req.params.userId, updateEducationalDetails);
        if (!updatedDetails) {
            return HttpResponseHandler.success(req, res, updatedDetails);
        }
        return HttpResponseHandler.success(req, res, updatedDetails);
    } catch (error) {
        next(error);
    }
};
module.exports = {
    updateInstanceDetailsById,
};
