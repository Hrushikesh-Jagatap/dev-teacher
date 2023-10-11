const TeacherService = require('@services/v1/BankDetails')
const { HttpResponseHandler } = require('intelli-utility');
// Controller function to update a BankDetails by ID
const updateBankDetailsById = async (req, res, next) => {
    try {
        const updateBankDetails = req.body.bankDetails;
        const updatedBankDetails = await TeacherService.updateBankDetailsById(req.params.userId, updateBankDetails);
        if (!updatedBankDetails) {
            return HttpResponseHandler.success(req, res, updatedBankDetails);
        }
        return HttpResponseHandler.success(req, res, updatedBankDetails);
    } catch (error) {
        next(error);
    }
};
module.exports = {
    updateBankDetailsById,
};
