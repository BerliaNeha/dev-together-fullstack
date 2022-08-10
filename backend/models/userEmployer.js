import mongoose from "mongoose";


const { Schema } = mongoose;

const UserEmployerSchema = new Schema({
    username:{type: String, required:true, unique:true},
    email:{type: String, required:true, unique:true},
    password: {type: String, required:true},
    isAdmin:{type:Boolean, default:false},
    phoneNumber:{type: String, required:true, unique:true},
    companyName:{type: String, required:true, unique:true},
    companyWebsite:{type: String, required:true, unique:true},
    hiringNumberRadioButton:{
        type: String, required: true
        },
    hiringRemoteDeveloperCheckbox: {
        type: Boolean, required:true
    },
    policyAndTermsCheckbox: {
        type:Boolean, required:true
    },
    subscribeCheckbox:{type:Boolean},
    jobs: [ { type: mongoose.Types.ObjectId, required: true, ref: "Jobs" } ]

},
{timestamps:true}
);

const UserEmployer = mongoose.model("UserEmployer", UserEmployerSchema);

export default UserEmployer;