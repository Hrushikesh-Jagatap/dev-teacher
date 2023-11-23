const express = require('express');
const router = express.Router();
const getSessionByIdController = require('@controllers/v1/getSessionById')
router.get('/session/:Id', async (req, res, next) => {
    try {
        const result = await getSessionByIdController.getSessionById(req, res, next);
    } catch (error) {
        next(error)
    }
});
module.exports = router;
