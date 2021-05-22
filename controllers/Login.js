'use strict';

const firebase = require('../db');
const Book = require('../models/Book');
const firestore = firebase.firestore();

const signInUser=async (req, res, next) => {
    var user;
    try {
        await firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password) .then((userCredential) => {
            user = userCredential.user;
            res.send(user.uid);
          })
        
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = signInUser;