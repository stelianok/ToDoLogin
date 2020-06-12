const express = require('express');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

const mailer = require('../../modules/mailer');
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

          return res.send({token: generateToken({id: user.id})});
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

router.post('/forgot_password', async(req,res) => {
  const {email} = req.body;

  try{
    const user = await db.get('SELECT * FROM users WHERE email = ?',[email], async function(err,row){
      if(err){
        res.send(err.message);
      }
      if(row === undefined){
        res.status(400).send({error: 'User not found'});
      }
      const token = crypto.randomBytes(20).toString('hex');

      const now = new Date();
      now.setHours(now.getHours() + 1);
      await db.get('UPDATE users SET passwordResetToken = ?, passwordResetExpires = ? where id= ?', [token,now,row.id]);

      console.log(token,now);
      mailer.sendMail({
        to: row.email,
        from: 'company@gmail.com',
        template: 'auth/forgot_password',
        context: {token}
      }, (err) => {
        if(err){
          console.log(err);
          return res.status(400).send({error: 'Cannot send forgot password email'});
        }

        return res.send();
      })
    });
  }
  catch (err){
    console.log(err)
    res.status(400).send({error: 'Error on forgot password, try again'})
  }
});

router.post('/reset_password', async(req, res) => {
  const {email,token,password} = req.body;
  try{
    const user = await db.get('SELECT * FROM users WHERE email = ?', [email], async function(err,row){
      if(err){
        res.send(err.message);
      }
      if(row === undefined){
        res.status(400).send({error: 'User not found'});
      }
      if(token !== row.passwordResetToken){
        return res.status(400).send({error: 'Token invalid'});
      }

      const now = new Date();
      if(now > row.passwordResetExpires){
        return res.status(400).send({error: 'Token expired, generate a new one'});
      }
      const passwordEncrypted = await encryptPassword(password);
      db.run('UPDATE users SET password = ? WHERE email = ?', [passwordEncrypted,email]);

      res.send();
    });
  }
  catch(err){
    res.status(400).send({error: "Cannot reset password, try again"});
  }
})

module.exports = app => app.use('/auth', router);