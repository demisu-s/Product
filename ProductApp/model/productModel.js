const { number } = require('joi')
const mongoose=require('mongoose')
const productSchema=mongoose.Schema({
    title:{
        type:String,
    required:[true,"add title"],
    },
    description:{
        type:String,
        required:[true,"add description"]

    },
    quantity:{
type:Number,
// required:[true,"add quantity"]
    },
},

{
    timestamps:true,
})
module.exports=mongoose.model("Product",productSchema)