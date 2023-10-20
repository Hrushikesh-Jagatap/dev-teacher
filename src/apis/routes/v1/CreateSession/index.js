const express = require('express');
const router = express.Router();
const CreateSessionController = require('@controllers/v1/CreateSession');
router.post('/create-session', async (req, res, next) => {
    // Extract the necessary data from the request body
    try {
        const result = await CreateSessionController.createSession(req, res, next);
    } catch (error) {
        next(error);
    }
});
module.exports = router;
