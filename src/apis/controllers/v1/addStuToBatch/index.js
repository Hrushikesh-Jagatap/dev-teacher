const BatchService = require('@services/v1/addStuToBatch');
const { HttpResponseHandler } = require('intelli-utility');
//  add Batch To Student  controller
const addToBatch = async (req, res, next) => {
    const userId = req.params.userId;
    const { student_userId, batch_id } = req.body;
    try {
        const addToBatch = await BatchService.addToBatch(userId, req.body);
        return HttpResponseHandler.success(req, res, addToBatch);
    } catch (error) {
        next(error);
    }
};
module.exports = {
    addToBatch,
};
