const TeacherService = require('@services/v1/searchforinstance');
const { HttpResponseHandler } = require('intelli-utility');

// Controller function to search for teachers
const searchTeacher = async (req, res, next) => {
    try {
        const queryParameters = req.query;
        const results = await TeacherService.searchTeacher(queryParameters);

        if (results.length == 0) {
            return HttpResponseHandler.success(req, res, "No teachers found.");
        }
        if(results.status==404){
            let data="No teachers found";
           return HttpResponseHandler.success(req, res, data);

        }

        return HttpResponseHandler.success(req, res, results);

    } catch (error) {
        next(error);
    }
};

module.exports = {
    searchTeacher
};
