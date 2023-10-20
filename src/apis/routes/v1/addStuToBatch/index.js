const express = require('express');
const router = express.Router();
const addBatchToStuController = require('@controllers/v1/addStuToBatch');
router.put('/add-to-batch/:userId', async (req, res, next) => {
    try {
        const result = await addBatchToStuController.addToBatch(req, res, next);
    } catch (error) {
        next(error);
    }
});
module.exports = router;
