import mongoose from "mongoose";

const { Schema } = mongoose;

const cvSchema = new Schema(
  {
    userId: {type: mongoose.Schema.Types.ObjectId, ref:"UserDeveloper"},
    experience: [
      {
        company: { type: String },
        position: { type: String },
        startDate: { type: String },
        endDate: { type: String },
      },
    ],
    education: [
      {
        schoolName: { type: String },
        degreeDescription: { type: String },
        start: { type: String },
        end: { type: String },
      },
    ],
    skills: [],
    languages: [],
  },
  { timestamps: true }
);

const CV = mongoose.model("cvs", cvSchema);

export default CV;
