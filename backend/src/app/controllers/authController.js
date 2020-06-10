const express = require('express');
const bcrypt = require('bcrypt');
const crypto = require('crypto');


const db = require('../../database');

const jwt = require('jsonwebtoken');

const authConfig = require('../../config/auth');
const router = express.Router();

function encryptPassword(password){
  const hash = bcrypt.hash(password,10);
  password = hash;
  return password;
}

function generateToken(params = {}){
  return jwt.sign({params}, authConfig.secret, {
    expiresIn: 86400,
  })
}

router.post('/register', async(req,res) => {
  try{
    const {first_name,last_name,email,password} = req.body;

    const passwordEncrypted = await encryptPassword(password);
    const user = db.run('INSERT INTO users(first_name,last_name,email,password) VALUES(?,?,?,?)',[first_name,last_name,email,passwordEncrypted], 
      function(err){
        if(err){
          return res.status(400).send({error: 'An account with the same email already exists'});
        }
        else{
          console.log('everything ok');

          return res.send({user, token: generateToken({id: user.id})});
        }
      });
    }
  catch(err){
    return res.status(400).send({error: 'Registration failed'});
  }
});

router.post('/authenticate', async(req,res) => {
  const {email,password} = req.body;
  
  const user = db.get('SELECT * FROM users WHERE email=?',[email], async function(err,row){
    if(err){
      res.send(err.message);
    }
    else if(row === undefined){
      res.status(400).send({error: 'User not found'});
    }
    else if(!await bcrypt.compare(password, row.password)){
      return res.status(400).send({error: 'Invalid Password'});
    }
    else{
      row.password = undefined;
      return res.send({row,token: generateToken({id: row.id})})
    }
    

  });
})


module.exports = app => app.use('/auth', router);