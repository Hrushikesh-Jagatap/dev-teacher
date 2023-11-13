const express = require('express');
const router = express.Router();
const GetAllTeacherController = require('@controllers/v1/Getallteacher')
router.get('/getall', async (req, res, next) => {
    try {
        const result = await GetAllTeacherController.Getallteacher(req, res, next);
    } catch (error) {
        next(error)
    }
});
module.exports = router;
