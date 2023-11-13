const express = require('express');

const router = express.Router();

const searchforinstanceController = require('@controllers/v1/searchforinstance');

router.get('/searchforinstance', async (req, res, next) => {
    try {
        const result = await searchforinstanceController.searchTeacher(req, res, next);
    } catch (error) {
        next(error)
    }
});

module.exports = router;

