const express = require('express');
const router = express.Router();
const isProfileCompletedController = require('@controllers/v1/profileCompleted');
router.get('/profile/:userId', async(req, res, next) => {
    try {
        const result = isProfileCompletedController.isProfileCompleted(req, res, next);
    } catch (error) {
        next(error);
    }
})
module.exports = router
