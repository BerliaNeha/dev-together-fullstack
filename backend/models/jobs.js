import mongoose from "mongoose";

const { Schema } = mongoose;
const JobsSchema = new Schema(
  {
    companyName: { type: String },
    email: { type: String },
    position: { type: String},
    jobDescription: { type: String, },
    hiringRemoteDeveloperCheckbox: {
      type: Boolean
    },
    policyAndTermsCheckbox: {
      type: Boolean,
   
    },
    subscribeCheckbox: { type: Boolean },
  },
  { timestamps: true }
);

const Jobs = mongoose.model("Jobs", JobsSchema);

export default Jobs;
