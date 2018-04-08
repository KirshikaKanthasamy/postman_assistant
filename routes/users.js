/**
 * Created by User on 02-Mar-18.
 */
const express=require('express');
const router = express.Router();
const User=require('../models/user');
const Letter=require('../models/letter');
const passport=require('passport');
const jwt=require('jsonwebtoken'); // safety communication with user and application
const config=require('../configuration/databaseConnection');

//sign up
router.post('/signup',function (req,res,next) {
  let newOne=new User(
      {
          user_name:req.body.user_name,
          role:req.body.role,
          e_mail:req.body.e_mail,
          password:req.body.password
      }
  );
  User.addUser(newOne,function (err,user) {
      if (err){
          res.json({success:false,msg:'fail'});
      }
      else{
          res.json({success:true,msg:'registered successfully'});
      }
  });

});

//for authentication
router.post('/authenticate',function (req,res,next) {
    const e_mail=req.body.e_mail;
    const password = req.body.password;
    console.log(e_mail,password);

    User.getUserByE_mail(e_mail,function (err,users) {
        if(err) throw err;
        if(!users){
            return res.json({success:false, msg:'invalid user',
                e_mail:"k@gmail.com"});
        }

        User.checkPassword(password,user.password,function (err,isMatch) {
            if(err) throw err;
            if(isMatch){
                const token=jwt.sign(user,config.secret,{
                    //i week
                    expiresIn:604800
                });

                res.json({
                    success:true,
                    token:'JWT'+token,
                    user:{
                        id:user._id,
                        user_name:user.user_name,
                        e_mail:user.e_mail
                    }
                });
            } else{
                return res.json({
                    success:false,
                    msg: 'password is wrong'
                });
            }

        });
    });
});

//login
router.post('/login',function (req,res) {
    const e_mail=req.body.e_mail;
    const password=req.body.password;

    User.findOne({e_mail:e_mail,password:password},function (err,user) {
        if (err){
            console.log(err);
            return res.status(500).send();
        }
        if (!user){
            return res.status(404).send();
        }
        return res.status(200).send();

    })


})

//home page
router.get('/home',passport.authenticate('jwt',{session:false}),function (req,res,next) {
    res.json({user:req.user});

});

//add letter
router.post('/addletter',function(req,res){
    let letterData = new Letter({
        letter_id:req.body.letter_id,
        add_no:req.body.add_no,
        add_street:req.body.add_street,
        add_area:req.body.add_area,
        add_city:req.body.add_city
    });
    Letter.addingletter(letterData,function (err,letter) {
        if (err){
            res.json({success:false,msg:'fail'});
        }
        else{
            res.json({success:true,msg:'letter detail is added successfully'});
        }
    });
});

module.exports=router;
