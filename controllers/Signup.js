'use strict';

const firebase = require('../db');
const Book = require('../models/Book');
const firestore = firebase.firestore();

const signupUser = async (req, res, next) => {
    try {
        await firebase.auth().createUserWithEmailAndPassword(req.body.email, req.body.password);
        res.send("Signed up succesfully");
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = signupUser;