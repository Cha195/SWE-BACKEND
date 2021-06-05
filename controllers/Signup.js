'use strict';

const firebase = require('../db');

const signupUser = async (req, res, next) => {
  try {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(req.body.email, req.body.password)
      .then((result) => {
        res.send(result)
      })
  } catch (error) {
    console.log(error)
    res.status(400).send(error.message)
  }
}

module.exports = signupUser;