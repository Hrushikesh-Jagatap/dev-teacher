const express = require('express');
const router = express.Router();
const UpdateAdminreviewDetailsByIdController = require('@controllers/v1/AdminReviewDetails')
router.put('/updateAdminreviewDetails/:userId', async (req, res, next) => {
    try {
        const result = await UpdateAdminreviewDetailsByIdController.updateadminreviewDetailsById(req, res, next);
    } catch (error) {
        console.error(error);
        next(error);
    }
});
module.exports = router;
