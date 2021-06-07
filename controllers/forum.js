'use strict'

const firebase = require('../db')
const firestore = firebase.firestore()

const getForum = async (req, res, next) => {
  const courseId = req.params.courseId
  const threadArray = []
  const course = firestore.collection('forum').doc(courseId).collection('threads')

  await course.get()
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
  const courseId = req.params.courseId;
  const course =  firestore.collection("forum").doc(courseId)

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