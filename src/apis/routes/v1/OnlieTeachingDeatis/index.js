const express = require('express');
const router = express.Router();
const UpdateOnlineDetailsByIdController = require('@controllers/v1/OnlieTeachingDeatis')
router.put('/updateonlineDetails/:userId', async (req, res, next) => {
    try {
        const result = await UpdateOnlineDetailsByIdController.onlinetechingDetailsById(req, res, next);
    } catch (error) {
        console.error(error);
        next(error);
    }
});
module.exports = router;
