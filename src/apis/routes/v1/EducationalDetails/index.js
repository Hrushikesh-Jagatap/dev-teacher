const express = require('express');

const router = express.Router();

const UpdateEducationalDetailsByIdController = require('@controllers/v1/EducationalDetails')

router.put('/updateEducationalDetails/:userId', async (req, res, next) => {
    try {
        const result = await UpdateEducationalDetailsByIdController.updateEducationalDetailsById(req, res, next);
    } catch (error) {
        console.error(error);
        next(error);
    }

});

module.exports = router;
