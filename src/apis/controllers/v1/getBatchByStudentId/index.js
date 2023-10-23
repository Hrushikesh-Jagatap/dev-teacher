const BatchService = require('@services/v1/getBatchByStudentId');
const { HttpResponseHandler } = require('intelli-utility');

// Controller function to get a single batch by  student ID
const getBatchByStudentId = async (req, res, next) => {
    try {
        const student = await BatchService.getBatchByStudentId(req.params.id);
        if (!student) {
            return HttpResponseHandler.success(req, res, student);
        }
        return HttpResponseHandler.success(req, res, student);
        
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getBatchByStudentId
}  
