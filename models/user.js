/**
 * Created by User on 10-Mar-18.
 */
const mongoose=require("mongoose");
const bcrypt=require("bcryptjs");
const config=require("../configuration/databaseConnection");

//user schema
const userSchema=mongoose.Schema(
    {
       user_name:{
           type:String,
           required:true
       } ,
        role:{
           type:String,
            required: true
        },
        e_mail:{
           type:String,
            required: true
        },
        password:{
           type:String,
            required: true
        }
    }
);


const User=module.exports=mongoose.model('User',userSchema);


//for authentication (login)
module.exports.getUserById=function (id,callback) {
    User.findById(id,callback);
}

//for sign up
module.exports.getUserByUser_name=function (username,callback) {
    const userQuery={user_name:username}
    User.findOne(userQuery,callback);
}

// passsword encryption

module.exports.addUser=function (newOne,callback){
    bcrypt.genSalt(10,function (err,salt) {
        bcrypt.hash(newOne.password,salt,function (err,hash) {
            if(err){

            }else{
                newOne.password=hash;
                newOne.save(callback);
            }

        })

    })

}

module.exports.getUserByE_mail=function (e_mail,callback) {
    const userQuerye={e_mail:e_mail};
    User.findOne({e_mail:e_mail});
}

module.exports.checkPassword=function (currentPassword,hash,callback){
    bcrypt.compare(currentPassword,hash, function(err,isMatch){
        if(err)throw err;
        callback(null,isMatch);
    });
}



