import { Box } from "@mui/system";
import React from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  "https://images.unsplash.com/flagged/1/apple-gear-looking-pretty.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
];

<<<<<<< HEAD
export const Homepage = ()=>{
    return(
        <>

        </>
    )
}
=======
export const Homepage = () => {
  return (
    <>
      {/* <AutoPlaySwipeableViews>
        {images.map((url, index) => (
          <Box
            key={index}
            component="img"
            sx={{
              width: "100%",
              height: "500px",
            }}
            src={url}
          />
        ))}
      </AutoPlaySwipeableViews> */}
    </>
  );
};
>>>>>>> 7b4df9dd1aa91006bae331d99429d7ee8bd1b832
