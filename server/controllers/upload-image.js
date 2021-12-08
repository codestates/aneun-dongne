const multer = require('multer');
const upload = multer({dest: './upload'})
const path = require('path');
const fs = require('fs');

module.exports = {
    post: async (req, res) => {
    console.log(req.file)
      if (req.body) {
          await user.create({ 
            username: req.body['username'], 
            email: req.body['email'], 
            password: req.body['password'], 
            blog: req.body['sign-up-url'], 
            /*image: req.body['image']*/
          });
          res.status(201).json({message: 'ok' });
      } else {
        res.status(409).json({message: 'This user already exists in the database'});
      }
  } 
};