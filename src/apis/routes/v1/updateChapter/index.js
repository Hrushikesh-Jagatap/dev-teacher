const express = require('express');
const router = express.Router();
const updateChapterByIdController = require('@controllers/v1/updateChapter');
router.put('/chapter/:Id', async (req, res, next) => {
    try {
        const result = await updateChapterByIdController.updateChapter(req, res, next);
    } catch (error) {
        next(error);
    }
});
module.exports = router;
