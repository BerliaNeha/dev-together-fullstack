import mongoose from "mongoose";

const { Schema } = mongoose;

const cvSchema = new Schema(
  {
    userId: {type: mongoose.Schema.Types.ObjectId, ref:"UserDeveloper"},
    experience: [
      {
        company: { type: String },
        position: { type: String },
        description:{type: String},
        startDate: { type: String },
        endDate: { type: String },
      },
    ],
    education: [
      {
        schoolName: { type: String },
        studies: { type: String },
        degree: { type: String },
        startDate: { type: String },
        endDate: { type: String },
      },
    ],
    skills: [],
    languages: [],
  },
  { timestamps: true }
);

const CV = mongoose.model("cvs", cvSchema);

export default CV;
