const express = require('express');
const router = express.Router();
const CreateChapterController = require('@controllers/v1/CreateChapter');
router.post('/create-chapter', async (req, res, next) => {
    // Extract the necessary data from the request body
    try {
        const result = await CreateChapterController.createChapter(req, res, next);
    } catch (error) {
        next(error);
    }
});
module.exports = router;
