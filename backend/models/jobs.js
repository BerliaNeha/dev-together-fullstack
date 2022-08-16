import mongoose from "mongoose";

const { Schema } = mongoose;

const JobsSchema = new Schema(
  {
    companyName: { type: String, required: true },
    email: { type: String, required: true},
    position: { type: String, required: true },
    jobDescription: {type: String, required: true},
    hiringRemoteDeveloperCheckbox: {
      type: Boolean,
      required: true,
    },
    policyAndTermsCheckbox: {
      type: Boolean,
      required: true,
    },
    subscribeCheckbox: { type: Boolean },
  },
  { timestamps: true }
);

const Jobs = mongoose.model("Jobs", JobsSchema);

export default Jobs;
