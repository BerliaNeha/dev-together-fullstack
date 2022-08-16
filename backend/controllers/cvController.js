import createError from "http-errors";
import CV from "../models/CV.js";

export const cvPost = async (req, res, next) => {
  //   let existingJob;
  //   try {
  //     existingJob = await Jobs.findOne(req.body);
  //   } catch (err) {
  //     console.log(err);
  //     return next(createError(500, "Query didn't succeed. Please try again"));
  //   }
  // console.log(existingJob, "existing");
  
  //   if (existingJob) {
  //     res.json({ id: existingJob._id });
      
  //   } else {
      let newCV;
  
      // CONDITIONS HERE if any
  
      try {
        newCV = new CV(req.body);
        await newCV.save();
      } catch (err) {
        console.log(err);
        return next(
          createError(500, "Job could not be created. Please try again")
        );
      }
      
      res.json({ id: newCV._id });
    //}
  };