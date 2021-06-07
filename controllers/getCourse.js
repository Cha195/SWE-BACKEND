'use strict'

const firebase = require('../db')
const firestore = firebase.firestore()

const getCourse = async (req, res, next) => {
  try {
    const courses = await firestore.collection('courses')
    const data = await courses.get()
    const courseArray = []
    if(data.empty) {
      res.status(404).send('No student record found')
    } else {
      data.forEach(doc => {
        const resources = {
          courseName: doc.data().courseName,
          bookLink: doc.data().bookLink,
          bookName: doc.data().bookName,
          courseId: doc.data().courseId,
          playListName: doc.data().playListName,
          playListLink: doc.data().playListLink,
          channelName: doc.data().channelName
        }
        courseArray.push(resources)
      });
      res.send(courseArray)
    }  
  } catch (error) {
      res.status(400).send(error.message)
  }
}

module.exports = getCourse