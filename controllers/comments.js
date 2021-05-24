'use strict';

const firebase = require('../db')
const firestore = firebase.firestore()

const getComments = async (req, res, next) => {
  const courseId = req.body.courseId
  const threadId = req.params.threadId
  let cmt_arr=[]

  await firestore
    .collection("forum").doc(courseId)
    .collection("threads").doc(threadId)
    .collection('comments').get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        cmt_arr.push(doc.data());          
      })
    })
    .catch(err => {
        res.status(err)
    })

    cmt_arr.sort((a, b) => {
      return a.timeSent.seconds - b.timeSent.seconds
    })

    res.send(cmt_arr)
}

const postComments = async (req, res, next) => {
  const courseId = req.params.courseId
  const threadId = req.params.threadId

   await firestore
   .collection("forum").doc(courseId)
   .collection("threads").doc(threadId)
   .collection('comments').add(req.body.comment)
   .then(query => {
       res.send(query.id)
   })
   .catch(err => {
       res.status(err);
   })
}
module.exports = {getComments, postComments};