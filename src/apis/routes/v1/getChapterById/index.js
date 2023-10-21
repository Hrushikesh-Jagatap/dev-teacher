const express = require('express');
const router = express.Router();
const getChapterByIdController = require('@controllers/v1/getChapterById')
router.get('/chapter/:Id', async (req, res, next) => {
    try {
        const result = await getChapterByIdController.getChapterById(req, res, next);
    } catch (error) {
        next(error)
    }
});
module.exports = router;
