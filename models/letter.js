/**
 * Created by User on 28-Mar-18.
 */
const mongoose=require("mongoose");
const config=require("../configuration/databaseConnection");

//letter schema
const letterSchema=mongoose.Schema(
    {
        letter_id:{
            type:Number,
            required:true
        } ,
        add_no:{
            type:String,
            required: true
        },
        add_street:{
            type:String,
            required: true
        },
        add_area:{
            type:String,
            required: true
        },
        add_city:{
            type:String,
            required: true
        }
    }
);

const Letter=module.exports=mongoose.model('Letter',letterSchema);


//to add letter details
module.exports.addingletter=function (letterData,callback){

            if(err){

            }else{
                letterData.save(callback);
            }

}
