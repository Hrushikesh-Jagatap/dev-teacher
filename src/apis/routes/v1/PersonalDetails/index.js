const express = require('express');
const router = express.Router();
const UpdatePersonalDetailsByIdController = require('@controllers/v1/PersonalDetails')
router.put('/updatePersonalDetails/:userId', async (req, res, next) => {
    try {
        const result = await UpdatePersonalDetailsByIdController.updatePersonalDetailsById(req, res, next);
    } catch (error) {
        console.error(error);
        next(error);
    }
});
module.exports = router;
