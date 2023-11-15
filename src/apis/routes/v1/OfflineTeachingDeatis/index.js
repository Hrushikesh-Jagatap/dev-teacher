const express = require('express');
const router = express.Router();
const UpdateofflineDetailsByIdController = require('@controllers/v1/OfflineTeachingDeatis')
router.put('/updateofflineDetails/:userId', async (req, res, next) => {
    try {
        const result = await UpdateofflineDetailsByIdController.offlinetechingDetailsById(req, res, next);
    } catch (error) {
        console.error(error);
        next(error);
    }
});
module.exports = router;
