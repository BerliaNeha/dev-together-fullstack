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
{/* <Card sx={{ maxWidth: "100%" }}>
      <CardActionArea>
        <CardMedia 
          component="iframe"
          height="250"
          src={Homepagecenter}
          allow= "autoPlay"
        />
      </CardActionArea>
    </Card> */}
      <Box sx={{height:"60%" , width: "100%", backgroundImage:`url(${HomepageGif})`}}>
      {/* <video sx={{height: "3vh", width: "20%"}}autoPlay loop muted >
            <source src={Homepagevideo} type='video/mp4' />
            
    </video> */}
      </Box>
    </>
  );
};
