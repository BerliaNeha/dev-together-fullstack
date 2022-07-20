import { Card, CardActionArea, CardMedia } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Homepagecenter from "../assets/Homepagecenter.mp4";
import Homepagevideo from "../assets/Homepagevideo.mp4";
import Container from "@mui/material/Container";
import HomepageGif from "../assets/Homepage.gif";

export const Homepage = () => {
  return (
    <>
    <Box sx={{height: "90%", width:"100%"}}>
      <div
        style={{
          height: "100%",
          width: "100%",
          background: `url(${HomepageGif}) no-repeat center center`,
          //backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          overflow: "hidden",
         // backgroundPosition: "center",
        }}
      ></div>
      <div>
        
      </div>
    </Box>
      
    </>
  );
};
