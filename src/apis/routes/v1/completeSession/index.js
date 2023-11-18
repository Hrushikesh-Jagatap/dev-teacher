const express = require('express');
const router = express.Router();
const completeSessionByIdController = require('@controllers/v1/completeSession');
router.put('/sessison-complete/:userId', async (req, res, next) => {
    try {
        const result = await completeSessionByIdController.completeSessionById(req, res, next);
    } catch (error) {
        console.error(error);
        next(error);
    }
});
router.get('/sessison-complete/:userId/:chapterId', async (req, res, next) => {
    try {
        const result = await completeSessionByIdController.getCompletedSessionsByUserIdAndChapterId(req, res, next);
    } catch (error) {
    }
})
module.exports = router;
