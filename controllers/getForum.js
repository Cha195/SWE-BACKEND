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
    var user;
    try {
        const title_arr = []
        // const id = req.body.id;
        firestore.collection("forum").where("courseID", "==", "CSE1007").get()
        .then(querySnapshot => {
           querySnapshot.forEach(doc => {
        //         // Do whatever you want with the querySnapshot
        //         // E.g. querySnapshot.forEach(doc => {...})
        //         // or querySnapshot.docChanges().forEach(change => {...})
        //         // See https://firebase.google.com/docs/firestore/query-data/listen#listen_to_multiple_documents_in_a_collection
        console.log("id =" + doc.id);
                doc.forEach(field => {
                   const cmt = new Comments(field.Name,field.comment,field.timeSent);
                });
            });
            title_arr.push(cmt);
        res.send(title_arr);
        })
        // const sfRef = firestore.collection('forum').doc('Edv6BBgl0XVbCJCyTVm2');
        // const collections = await sfRef.listCollections();
        // collections.forEach(collection => {
        // res.send('Found subcollection with id:', collection.id);
        
        // });
    
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = getForum;