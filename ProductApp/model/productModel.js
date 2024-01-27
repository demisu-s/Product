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
},
{
    timestamps:true,
})
module.exports=mongoose.model("Product",productSchema)