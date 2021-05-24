'use strict'

const firebase = require('../db')
const Forum = require('../models/Book')
const Threads = require('../models/Threads')
const Comments = require('../models/Comments')
const firestore = firebase.firestore()

const getForum = async (req, res, next) => {
  const threadId = req.params.courseId
  const threadArray = []

  await firestore.collection('forum').doc(threadId)
  .collection('threads').get()
  .then(querySnapshot => {
    querySnapshot.forEach(doc => {
      threadArray.push({
        id: doc.id,
        title: doc.data().Title
      })
    })
  })
  .catch(err => {
    res.status(err);
  })

  res.send(threadArray)
}

// new thread
const postForum = async (req, res, next) => {
  const threadId = req.params.threadId;
  const course =  firestore.collection("forum").doc(threadId)

  course.collection("threads").add({
    Title: req.body.title
  })
  .then(res => {
    return course.collection('threads').doc(res.id)
      .collection('comments').add(req.body.Comment)
  })
  .then(query => {
    res.send(query.id);
  })
  .catch(err => {
    res.status(err);
  })
}

module.exports = {
  getForum,
  postForum
}