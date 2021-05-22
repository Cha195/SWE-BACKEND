'use strict';

const firebase = require('../db');
const Forum = require('../models/Book');
const Threads = require('../models/Threads');
const Comments = require('../models/Comments');
const firestore = firebase.firestore();
const forumArray = [];
const threadArray = [];
const commentArray = [];

const getForum = async (req, res, next) => {

    // const id = req.params.id;
    firestore.collection("forum").doc("Edv6BBgl0XVbCJCyTVm2").collection("threads").get()
    .then(querySnapshot => {
        querySnapshot.forEach(doc => {
            console.log(doc.id);
            console.log(doc.data('Title'));
        });
    })
    .catch(err => {
        res.status(err);
    })

}

// new thread
const postForum = async (req, res, next) => {
    
    // const threads = req.body.thread;
    
    const course =  firestore.collection("forum").doc("Edv6BBgl0XVbCJCyTVm2");

    course.collection("threads").add({
        Title: req.body.title
    })
    .then(res => {
        return course.collection('threads').doc(res.id).collection('comments').add(req.body.Comment)
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
    postForum};