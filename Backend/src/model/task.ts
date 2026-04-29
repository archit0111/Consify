import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    title:{type:String,required:true},
    priority:{
        type:String,
        enum:["low","medium","high"],
        default:"low"
    },
    completed:{
        type:Boolean,
        default:false
    },
    createdDate: {
        type:Date,
        default:Date.now
    }
},{timestamps:true})
const Task = mongoose.model('task',taskSchema);

export default Task