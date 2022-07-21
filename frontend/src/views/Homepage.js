import { Card, CardActionArea, CardMedia } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import HomepageGif from "../assets/Homepagegif.gif";

export const Homepage = () => {
  return (
    <>
    <Box sx={{height: "90%", width:"100%",}}>
      <div
        style={{
          height: "100%",
          width: "100%",
          background: `url(${HomepageGif}) no-repeat center center`,
          //backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        //   overflow: "hidden",
        //  backgroundPosition: "center 1px",
        }}
      ></div>
      <div>
        
      </div>
    </Box>
      
    </>
  );
};
