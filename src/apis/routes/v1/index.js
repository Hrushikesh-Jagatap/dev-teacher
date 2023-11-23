const express = require('express');

const router = express.Router();

const TeacherDetails = require('./TeacherDetails'); 

const CreateTeacher = require('./CreateTeacher'); 

const TeacherDetailsById = require('./TeacherDetailsById') 

const UpdateTeacherById = require('./UpdateTeacherById'); 

const deleteTeacherById = require('./DeleteTeacherById'); 

const GetByuserId = require('./GetByUserId'); 

const PersonalDetails = require('./PersonalDetails'); 

const TeachingDetails = require('./TeachingDetails'); 

const EductaionalDetails = require('./EducationalDetails'); 

const BankDetails = require('./BankDetails'); 

const search = require('./searchApi') // this is api for searching all teacher whose subject class and lang anyone is matching

const getSessionById = require('./getSessionById')

const splash = require('./splashApi') 

const TeacherStudent = require('./TeacherStudent');

const Notification = require('./Notification');

const CreateBatch = require('./CreateBatch') 

const UpdateBatchByTeacherId = require('./UpdateBatchByTeacherId') 

const getBatchByBatchId = require('./getBatchByBatchId') 

const getBatchByTeacherId = require('./getBatchByTeacherId')

const getBatchByStudentId = require("./getBatchByStudentId") 

const addStuToBatch = require('./addStuToBatch');

const updatestatus = require("./updatestatus")

const serachbystatus = require("./serachbystatus") 

const createChapter = require('./CreateChapter'); 

const updateChapter = require('./updateChapter');

const getChapterById = require('./getChapterById');

const createSession = require('./CreateSession');

const updateSession = require('./updateSession');

const getSessionDetails = require('./getSessionDetails');

const profileCompleted = require('./profileCompleted');

const AdminReviewDetails = require('./AdminReviewDetails');

const OnlieTeachingDeatis = require('./OnlieTeachingDeatis');

const OfflineTeachingDeatis = require('./OfflineTeachingDeatis');

const instancestatus = require('./instancestatus');

const searchforinstance = require('./searchforinstance');

const Getallteacher = require('./Getallteacher');

const completeSession = require('./completeSession');

router.use('/', getSessionById);

// router.use('/', Notification);

router.use('/', completeSession);

//
router.use('/', TeacherStudent);

router.use('/', profileCompleted);

// roue to get Session Details
router.use('/', getSessionDetails);

// route to updated session 
router.use('/', updateSession);

// route to add student to batch
router.use('/', addStuToBatch);

// create session for every chapter
router.use('/', createSession);

// route to create chapter content
router.use('/', createChapter);

//route to use updated chapter
router.use('/', updateChapter);

//router to get chapter By Id
router.use('/', getChapterById);

//route to updated PersonalDetails By UserId
router.use('/', PersonalDetails)

// route to update Teaching Details By UserId
router.use('/', TeachingDetails);

// router to use update EductionalDetails By UserId
router.use('/', EductaionalDetails);

//route to use BankDetails By UserId
router.use('/', BankDetails);

// Route to use Splash Api
router.use('/', splash)

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

//route to get teacher By class lang subj and mode
router.use('/', search)

router.use('/', serachbystatus)

router.use('/', AdminReviewDetails)

router.use('/', OnlieTeachingDeatis)

router.use('/', OfflineTeachingDeatis)

router.use('/', instancestatus)

router.use('/', searchforinstance)

router.use('/', Getallteacher)

module.exports = router;
