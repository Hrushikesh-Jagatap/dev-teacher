const express = require('express');
const router = express.Router();
const getSessionsByDate = require('@controllers/v1/getSessionDetails')
router.get('/sessions/:userId', async (req, res, next) => {
    try {
        const result = await getSessionsByDate.getSessionsByDate(req, res, next);
    } catch (error) {
        next(error)
    }
});
module.exports = router;
