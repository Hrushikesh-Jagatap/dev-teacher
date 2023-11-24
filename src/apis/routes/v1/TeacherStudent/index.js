const express = require('express');

const router = express.Router();

const StudentDetailsByIdController = require('@controllers/v1/TeacherStudent')

router.get('/abc/teacher/:id',async(req, res, next) => {
    try {
        const result = await StudentDetailsByIdController.getAllStudent(req, res, next);
    } catch (error) {
        next(error);
    }    
});

module.exports = router;
