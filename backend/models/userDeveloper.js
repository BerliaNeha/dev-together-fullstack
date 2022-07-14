import mongoose from "mongoose";


const { Schema } = mongoose;

const UserDeveloperSchema = new Schema({
    username:{type: String, required:true, unique:true},
    email:{type: String, required:true, unique:true},
    password: {type: String, required:true},
    isAdmin:{type:Boolean, default:false},
    policyAndTermsCheckbox: {
        type:Boolean, required:true
    },
    subscribeCheckbox:{type:Boolean},

    
},
{timestamps:true}
);

const UserDeveloper = mongoose.model("UserDeveloper", UserDeveloperSchema);

export default UserDeveloper;