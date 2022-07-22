import * as React from "react";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Dev from "../assets/dev.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PortraitIcon from "@mui/icons-material/Portrait";
import { Button } from "@mui/material";
import Arrow from "../assets/arrows2.gif";
import { HashLink } from 'react-router-hash-link';
function About(props) {
  const About = {
    title: "Our Mission",
    description: "CONNECT EXPLORE & EXPAND",
    imageText: "main image description",
    description2:
      "DevNet provides developers and employers a platform to grow, explore and invest.Nullam imperdiet sapien lectus, ut maximus urna bibendum at. Morbi a metus nisi. Ut accumsan tortor a lectus pulvinar, at maximus massa elementum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Pellentesque non felis ut dui aliquet commodo. Curabitur posuere nisl urna, sit amet efficitur dui luctus sit amet. Quisque cursus malesuada nisi. Aliquam convallis, tortor id suscipit blandit, purus sapien commodo mauris, eget malesuada tellus odio a diam. Sed dictum urna ut ipsum dapibus, eget consequat lacus sagittis.",
    linkText: "Dev Community…",
  };

  const AboutTeam = [
    {
      title: "Hello, I am",
      date: "Berlia",
      description: "Working as a Web Developer",
      image: { Dev },
      imageLabel: "Image Text",
      linkText: "https://www.linkedin.com/in/neha-berlia-66b14554/",
      linkText2: "https://portfolio-neha-berlia.vercel.app/",
    },
    {
      title: "Hello, I am",
      date: "Vaia",
      description: "Working as a Web Developer.",
      image: { Dev },
      imageLabel: "Image Text",
      linkText: "https://www.linkedin.com/in/neha-berlia-66b14554/",
      linkText2: "https://portfolio-neha-berlia.vercel.app/",
    },
  ];

  // const onClick = () => {
  //   window.location.href = "#team";
  // };

  return (
    <>
      <Paper
        sx={{
          width: "100%",
          display: { xs: "none", sm: "none", md: "block" },
          position: "relative",
          backgroundColor: (theme) => theme.palette.primary.main,
          color: "#fff",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          backgroundImage: `url(${Arrow})`,
        }}
      >
        
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: "rgba(0,0,0,.3)",
          }}
        />
        <Grid container>
          <Grid item>
            <Box
              sx={{
                color: "white",
                display: "flex",
                flexDirection: "row-reverse",
                marginRight: 2,
                fontSize: 20,
              }}
            >
              <Button
                sx={{ color: "white", textDecoration: "none" }}              
              >
                <HashLink smooth to='/about-us/#team' >MEET THE TEAM</HashLink>
              </Button>
            </Box>

            <Box
              sx={{
                position: "relative",
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
                width: "30%",
                height: "auto",
              }}
            >
              <Typography
                sx={{
                  marginLeft: 2,
                }}
                variant="h5"
                color="inherit"
              >
                {About.title}
              </Typography>

              <Typography variant="h1" color="inherit">
                {About.description}
              </Typography>
            </Box>
            <Box sx={{ width: "92%", margin: "auto" }}>
              <Typography variant="h5" color="inherit" paragraph>
                {About.description2}
              </Typography>

              <Link variant="subtitle1" href="#">
                {About.linkText}
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      {/* ########################## Responsive to smaller screens not to appear the arrow instead just bgcolor################################### */}
      <Paper
        sx={{
          width: "100%",
          display: { xs: "block", sm: "block", md: "none" },
          position: "relative",
          color: "#fff",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
          backgroundColor: (theme) => theme.palette.primary.main,
        }}
      >
      
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: "rgba(0,0,0,.3)",
          }}
        />
        <Grid container>
          <Grid item>
            <Box
              sx={{
                color: "white",
                display: "flex",
                flexDirection: "row-reverse",
                marginRight: 2,
                fontSize: 20,
              }}
            >
             <Button
                sx={{ color: "white", textDecoration: "none" }}
                
              >
                <HashLink smooth to='/about-us/#team' >MEET THE TEAM</HashLink>
              </Button>
            </Box>

            <Box
              sx={{
                position: "relative",
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
                width: "30%",
                height: "auto",
              }}
            >
              <Typography
                sx={{
                  marginLeft: 2,
                }}
                variant="h5"
                color="inherit"
              >
                {About.title}
              </Typography>

              <Typography variant="h1" color="inherit">
                {About.description}
              </Typography>
            </Box>
            <Box sx={{ width: "92%", margin: "auto" }}>
              <Typography variant="h5" color="inherit" paragraph>
                {About.description2}
              </Typography>

              <Link variant="subtitle1" href="#">
                {About.linkText}
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* //########################ABOUT TEAM################################### */}

      <Box
        sx={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mb: 5,
        }}
      >
        <Typography id="team" variant="h4" sx={{ mt: "90px", mb: 15 }}>
          {" "}
          MEET THE TEAM
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "100%",
          }}
        >
          {AboutTeam.map((AboutTeam,index) => (
            <Card
            key={index}
              sx={{
                display: "flex",
                backgroundColor: "rgba(35, 78, 112, 0.31)",

                color: (theme) => theme.palette.secondary.main,
              }}
            >
              <CardContent sx={{ flex: 1 }}>
                <Typography  component="h2" variant="h5">
                  {AboutTeam.title}{" "}
                 
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {AboutTeam.date}
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  {AboutTeam.description}
                </Typography>
                {/* <Typography variant="subtitle1" color="primary">
                    Continue reading...
                  </Typography> */}
                <Link variant="subtitle1" href={`${AboutTeam.linkText}`}>
                  <LinkedInIcon />
                </Link>
                <Link variant="subtitle1" href={`${AboutTeam.linkText2}`}>
                  <PortraitIcon />
                </Link>
              </CardContent>
              <CardMedia
                component="img"
                sx={{ width: 160, display: { xs: "none", sm: "block" } }}
                image={Dev}
                alt={AboutTeam.imageLabel}
              />
            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
}

// About.propTypes = {
//   post: PropTypes.shape({
//     description: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     imageText: PropTypes.string.isRequired,
//     linkText: PropTypes.string.isRequired,
//     description2: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default About;
