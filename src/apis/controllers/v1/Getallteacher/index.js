const getallteacher = require('@services/v1/Getallteacher');
const { HttpResponseHandler } = require('intelli-utility');
// Controller function to get a single teacher by userID
const Getallteacher = async (req, res, next) => {
    try {
        const teacher = await getallteacher.getall();
        
        if (!teacher) {
            return HttpResponseHandler.success(req, res, teacher);
        }
        return HttpResponseHandler.success(req, res, teacher);
    } catch (error) {
        next(error);
    }
};
module.exports = {
    Getallteacher
}  
