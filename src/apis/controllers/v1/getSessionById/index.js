const SessionService = require('@services/v1/getSessionById');
const { HttpResponseHandler } = require('intelli-utility');
// Controller function to get a single chapter by chapterId
const getSessionById = async (req, res, next) => {
    try {
        const session = await SessionService.getSessionById(req.params.Id);
        
        if (!session) {
            return HttpResponseHandler.success(req, res, session);
        }
        return HttpResponseHandler.success(req, res, session);
    } catch (error) {
        next(error);
    }
};
module.exports = {
    getSessionById
}  
