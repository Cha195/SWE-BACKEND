const express = require('express');
// const {addStudent, 
//        getAllStudents, 
//        getStudent,
//        updateStudent,
//        deleteStudent,
//        signupUser,
//        signInUser
//       } = require('../controllers/studentController');

const signupUser = require("../controllers/Signup");
const signInUser = require("../controllers/Login");
const getCourse = require("../controllers/getCourse");
const {getForum,postForum} = require('../controllers/forum');
const {getComments, postComments} = require("../controllers/comments")
const router = express.Router();

// router.post('/student', addStudent);
// router.get('/students', getAllStudents);
// router.get('/student/:id', getStudent);
// router.put('/student/:id', updateStudent);
// router.delete('/student/:id', deleteStudent);
router.post('/register',signupUser);
router.post('/login',signInUser);
router.get('/course',getCourse);
router.get('/forum', getForum);
router.post('/forum', postForum);
router.get('/forum/:id', getComments)
router.post('/forum/:id', postComments)


module.exports = {
    routes: router
}