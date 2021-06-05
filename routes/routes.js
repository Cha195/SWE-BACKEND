const express = require('express')
const signupUser = require("../controllers/Signup")
const signInUser = require("../controllers/Login")
const getCourse = require("../controllers/getCourse")
const { getForum, postForum } = require('../controllers/forum')
const { getComments, postComments } = require("../controllers/comments")

const router = express.Router()

router.post('/register', signupUser)
router.post('/login', signInUser)
router.get('/course', getCourse)
router.get('/course/:courseId/forum', getForum)
router.post('/course/:courseId/forum', postForum)
router.get('/course/:courseId/forum/:threadId', getComments)
router.post('/course/:courseId/forum/:threadId', postComments)

module.exports = {
  routes: router
}