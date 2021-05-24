const express = require('express')
const signupUser = require("../controllers/Signup")
const signInUser = require("../controllers/Login")
const getCourse = require("../controllers/getCourse")
const { getForum, postForum } = require('../controllers/forum')
const { getComments, postComments } = require("../controllers/comments")

const router = express.Router()

router.post('/register', signupUser)
router.post('/login', signInUser)
router.get('/courses', getCourse)
router.get('/courses/:courseId/forum', getForum)
router.post('/courses/:courseId/forum', postForum)
router.get('/courses/:courseId/forum/:threadId', getComments)
router.post('/courses/:courseId/forum/:threadId', postComments)


module.exports = {
  routes: router
}