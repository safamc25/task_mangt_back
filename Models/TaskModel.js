const mongoose=require('mongoose')

const taskSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
   duedate:{
    type:String,
    required:true
   },
   status:{
    type:String,
    required:true
   },
   userId:{
    type:mongoose.Schema.Types.ObjectId,
    required:true
   }
  
   

})

// model
const tasks=mongoose.model("tasks",taskSchema)

// export
module.exports=tasks