const express = require('express');
const router = express.Router();
const updateSessionByIdController = require('@controllers/v1/updateSession');
router.put('/session/:Id', async (req, res, next) => {
    try {
        const result = await updateSessionByIdController.updateSession(req, res, next);
    } catch (error) {
        next(error);
    }
});
module.exports = router;
