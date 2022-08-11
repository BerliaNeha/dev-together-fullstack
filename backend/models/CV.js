import mongoose from "mongoose";

const { Schema } = mongoose;

const cvSchema = new Schema(
  {
    userId: {type: mongoose.Schema.Types.ObjectId, ref:"UserDeveloper"},
    experience: [
      {
        jobTitle: { type: String },
        jobDescription: { type: String },
        startDate: { type: Number },
        endDate: { type: Number },
      },
    ],
    education: [
      {
        schoolName: { type: String },
        degreeDescription: { type: String },
        start: { type: Number },
        end: { type: Number },
      },
    ],
    skills: [],
    languages: [],
  },
  { timestamps: true }
);

const CV = mongoose.model("cv", cvSchema);

export default CV;
