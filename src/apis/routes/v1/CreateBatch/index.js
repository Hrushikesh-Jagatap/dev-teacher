
const express = require('express');

const router = express.Router();

const CreateBatchController = require('@controllers/v1/CreateBatch');

router.post('/create-batch', async (req, res, next) => {
    // Extract the necessary data from the request body
    try {
        const result = await CreateBatchController.createBatches(req, res, next);
    } catch (error) {
        next(error);
    }
});

module.exports = router;

