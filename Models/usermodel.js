const mongoose=require('mongoose')

// model- schema
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }

})

// model
const users=mongoose.model("users",userSchema)

// export
module.exports=users
