import mongoose from "mongoose";


const UsertSchema = new mongoose.Schema({
    username:{
        type:String,
        lowercase: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    list: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "List"
    }
]
})

export default mongoose.model("User", UsertSchema);