const TeacherService = require('@services/v1/splashApi');
const { HttpResponseHandler } = require('intelli-utility');
const getSplash = async (req, res) => {
  try {
    const data = await TeacherService.getSplashData(req.params.Id);
    if (!data) {
      return HttpResponseHandler.success(req, res, data);
    }
    return HttpResponseHandler.success(req, res, data);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getSplash
}  
