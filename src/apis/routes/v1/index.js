const express = require('express');

const router = express.Router();

const TeacherDetails = require('./TeacherDetails'); // done

const CreateTeacher = require('./CreateTeacher'); // done

const TeacherDetailsById = require('./TeacherDetailsById') // done

const UpdateTeacherById = require('./UpdateTeacherById'); // done

// const NotificationRoute = require('./Notification');

const deleteTeacherById = require('./DeleteTeacherById')

const GetByuserId = require('./GetByUserId') // done

const CreateBatch = require('./CreateBatch') // done

const UpdateBatchByTeacherId = require('./UpdateBatchByTeacherId') // done 

const getBatchByBatchId = require('./getBatchByBatchId') // done

const getBatchByTeacherId = require('./getBatchByTeacherId') // done

const getBatchByStudentId = require("./getBatchByStudentId") // done 

const updatestatus = require("./updatestatus")



// Route to get all teachers
router.use('/', TeacherDetails);

// Route to create a new teacher
router.use('/', CreateTeacher);

// Route to get a single teacher by ID
router.use('/', TeacherDetailsById);

// Route to update a teacher by ID
router.use('/', UpdateTeacherById);

// Route to delete a teacher by ID
router.use('/', deleteTeacherById);

// Route to get user By Id
router.use('/', GetByuserId);

// Route to CreateBatch
router.use('/', CreateBatch);

// route to update batch by teacherId
router.use('/', UpdateBatchByTeacherId);

// router to get batch by teacherId;
router.use('/', getBatchByTeacherId);

// router to get batch by studentId
router.use('/', getBatchByStudentId)

// route to get batch by BatchId
router.use('/', getBatchByBatchId)

router.use('/', updatestatus)

module.exports = router;
