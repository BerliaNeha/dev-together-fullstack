import * as React from "react";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Galaxy from "../assets/galaxy.jpg";
import Dev from "../assets/dev.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PortraitIcon from "@mui/icons-material/Portrait";
import { Button } from "@mui/material";
import Video from "../assets/video.mp4"
import Arrow from "../assets/arrows.gif"
function About(props) {
  const About = {
    title: "Our Mission",
    description: "CONNECT EXPLORE & EXPAND",
    image: { Galaxy },
    imageText: "main image description",
    description2:
      "DevNet provides developers and employers a platform to grow, explore and invest.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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

  const onClick = () => {
    window.location.href = "#team";
   };

  return (
    <>
      <Paper
        sx={{
          position: "relative",
          backgroundColor: "grey.800",
          color: "#fff",

          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url(${Arrow})`,
        }}
      >
             
        {/* Increase the priority of the hero background image */}
        {
          <img
            style={{ display: "none" }}
            src={About.image}
            alt={About.imageText}
          />
        }
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
                onClick={onClick}
                sx={{ color: "white", textDecoration: "none" }}
              >
                MEET THE TEAM
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

      <Grid container sx={{ backgroundColor: "black" }} spacing={4}>
        {AboutTeam.map((AboutTeam) => (
          <Grid item xs={12} md={6}>
            <CardActionArea component="a" href="#">
              <Card sx={{ display: "flex", backgroundColor: "gray" }}>
                <CardContent sx={{ flex: 1 }}>
                  <Typography id="team" component="h2" variant="h5">
                    {AboutTeam.title}{" "}
                    <Link href="#team" aria-hidden="true"></Link>
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
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

About.propTypes = {
  post: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageText: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    description2: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default About;
