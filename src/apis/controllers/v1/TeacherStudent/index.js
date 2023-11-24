const TeacherService = require('@services/v1/TeacherStudent');
const { HttpResponseHandler } = require('intelli-utility');

// Controller function to get a single teacher by ID
const getAllStudent = async (req, res, next) => {
    try {
        const userId = req.params.id
        const data = await TeacherService.getAllStudentDetails(userId);
        if (!data) {
            return HttpResponseHandler.success(req, res, data);
        }
        return HttpResponseHandler.success(req, res, data);
        
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllStudent
}  
