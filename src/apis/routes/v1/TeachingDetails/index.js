const express = require('express');
const router = express.Router();
const UpdateTeachingDetailsByIdController = require('@controllers/v1/TeachingDetails')
router.put('/updateTeachingDetails/:userId', async (req, res, next) => {
    try {
        const result = await UpdateTeachingDetailsByIdController.updateTeachingDetailsById(req, res, next);
    } catch (error) {
        console.error(error);
        next(error);
    }
});
module.exports = router;
