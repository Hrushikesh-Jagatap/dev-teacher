const sessionService = require('@services/v1/updateSession')
const { HttpResponseHandler } = require('intelli-utility');
const chapterDb = require('@models/Chapter');
const updateSession = async (req, res, next) => {
 
  try {
    const sessionId = req.params.Id;  
    // Get the session ID from the URL
    const updatedSessionData = req.body;      // The updated session data from the request body
    const updateSession = await sessionService.updateSession(sessionId, updatedSessionData);
 
    if (!updateSession) {
      return HttpResponseHandler.success(req, res, updateSession);
    }
   
    return HttpResponseHandler.success(req, res, updateSession);
  } catch (error) {
    next(error)
  }
};
module.exports = {
    updateSession,
};
