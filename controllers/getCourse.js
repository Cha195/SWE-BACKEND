'use strict';

const firebase = require('../db');
const Book = require('../models/Book');
const firestore = firebase.firestore();

const getCourse = async (req, res, next) => {
    var user;
    try {
        const courses = await firestore.collection('courses');
        const data = await courses.get();
        const courseArray = [];
        if(data.empty) {
            res.status(404).send('No student record found');
        }else {
            data.forEach(doc => {
                const book = new Book(
                    doc.data().bookLink,
                    doc.data().bookName,
                    doc.data().courseId,
                    doc.data().courseName
                );
                courseArray.push(book);
            });
           
            res.send(courseArray);
        }
        
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = getCourse;