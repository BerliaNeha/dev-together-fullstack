import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainFeaturedPost from "../components/BlogDevCommunity/MainFeaturedPost.jsx";
import FeaturedPost from "../components/BlogDevCommunity/FeaturedPost.jsx";
import Footer from "../components/BlogDevCommunity/Footer.jsx";
import post1 from "../components/BlogDevCommunity/blog-post.1.md";
import post2 from "../components/BlogDevCommunity/blog-post.2.md";
import post3 from "../components/BlogDevCommunity/blog-post.3.md";
import Box from "@mui/material/Box";
import EventsDevCom from "../assets/eventsDevCom.jpg";
import { Typography } from "@mui/material";
// import BgDevCom from "../assets/bgDevCom.jpg";
import Blog1 from "../assets/Blog1.jpg";
import Blog2 from "../assets/Blog2.jpg";
import Blog01 from "../assets/Blog01.jpg";
import Blog02 from "../assets/Blog02.jpg";
import Blog03 from "../assets/Blog03.jpg";
import Blog04 from "../assets/Blog04.jpg";
import Blog05 from "../assets/Blog05.jpg";
import Blog06 from "../assets/Blog06.jpg";
import Events from "./BlogDevCommunity/events.jsx";

const sections = [
  // { title: 'Technology', url: '#' },
 
];

const mainFeaturedPost = {
  title: "Blogs, Events and Meet ups",
  description:
    "Start a dev blog in just a few seconds. No Ads, No PayWall - Own your content! A Developer-friendly platform to share your ideas, attend events or simply take a break by meeting local developers!",
  imageText: "main image description",
  
};

//*********************Blog/Featured posts*****************************/

const featuredPosts = [
  {
    title: "How to prepare for Startup interviews?",
    date: "Nov 12",
    description:
      'You are an experienced tech professional. On any given weekday, you open your LinkedIn or your personal mailbox, and there it is. "Hello from Google!", "Hiring Sr. SDEs at Amazon", "Meta would love to…',
    image: Blog1,
    imageLabel: "Image Text",
  },
  {
    title: "How to Debug Better with Chrome",
    date: "Nov 11",
    description:
      "Has your JavaScript ever failed to execute correctly and you struggled to figure out why? Has your CSS ever behaved strangely and you struggled to figure out why or get it to display as intended? Debu…",
    image: Blog01,
    imageLabel: "Image Text",
  },
  {
    title: "System Design",
    date: "Nov 11",
    description:
      "Hey, welcome to the course. I hope this course provides a great learning experience. This course is also available on GitHub. Please leave a ⭐ on Github as motivation if this was helpful! Table of con….",
      image: Blog2,

    imageLabel: "Image Text",
  },
  {
    title: "A Technical Debt Crisis of Software And  Why",
    date: "Nov 11",
    description:
      "On September 15, 2008, Lehman Brothers went bankrupt. It was the climax of the financial crisis around 2008 with enormous economic consequence…",
      image: Blog02,

    imageLabel: "Image Text",
  },
  {
    title: "Build an extendable in-browser devtools",
    date: "Nov 11",
    description:
      "Devtools are useful and part of our daily work as developers. If you are developing for the web, you have probably…",
      image: Blog03,

    imageLabel: "Image Text",
  },
  {
    title: "How to Build a Multi-Zone Java App in One Day",
    date: "Nov 11",
    description:
      "Ahoy, matey! At last, the time has come to build and launch the first version of my geo-distributed Java application. It took…",
      image: Blog04,

    imageLabel: "Image Text",
  },
];

//**********************Dummy Events******************************/

// const events = [
//   {
//     title: "SmartCon",
//     date: "Nov 12",
//     description:
//       "The must-attend Web3 experience of the year. A full week of learning from industry luminaries, building alongside the best developers in the space, and connecting with fellow community members from across the globe. SmartCon 2022 is for those who get what Web3 is really about, and those who want to learn.",
//     image: Blog05,
//     location: "NYC",
//     imageLabel: "Image Text",
//   },
//   {
//     title: "SmartCon",
//     date: "Nov 12",
//     description:
//       "The must-attend Web3 experience of the year. A full week of learning from industry luminaries, building alongside the best developers in the space, and connecting with fellow community members from across the globe. SmartCon 2022 is for those who get what Web3 is really about, and those who want to learn.",
//     image: Blog06,
//     location: "NYC",
//     imageLabel: "Image Text",
//   },
// ];

const posts = [post1, post2, post3];

//****************************************************/


const theme = createTheme();

export const DevCommunityComponent = () => {

  const [events, setEvents] = React.useState ([])

  React.useEffect (()=>{

    fetch("https://app.ticketmaster.com/discovery/v2/events.json?countryCode=DE&apikey=CGgGiGUPaal642q0zuWF5zSOfxloAa5T")

    .then((res)=>
      res.json()
    )

    .then((result)=>
    {
      console.log(result)
      setEvents(result._embedded.events)
    })

  }, [])
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg" sx={{ mt: "10px" }}>
        
          <main>
            <Box sx={{ backgroundColor: "#111827" }}>
              <MainFeaturedPost post={mainFeaturedPost} />

              {/***********************Featured Posts************************* */}

              <Typography
                sx={{
                  color: "#eea47e",
                  fontWeight: "bold",
                  fontSize: "20px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                FROM THE COMMUNITY
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "60px",
                  display: "flex",
                  justifyContent: "center",
                }}
                id="blog"
              >
                Featured Posts
              </Typography>
              <Grid container spacing={4}>
                {featuredPosts.map((post) => (
                  <FeaturedPost key={post.title} post={post} />
                ))}
              </Grid>

              {/****************************Events************************* */}

              <Typography
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "60px",
                  display: "flex",
                  justifyContent: "center",
                }}
                id="events"
              >
                Events
              </Typography>

              <Grid container spacing={4}>
                {events.map((post) => (
                  <Events key={post.id} post={post} />
                ))}
              </Grid>

              {/************************Social Links***************************** */}

              <Grid container spacing={0} sx={{ m: 2,pb: "6px"}}>
               
                {/* <Sidebar
                  social={sidebar.social}
                /> */}
              </Grid>
            </Box>
          </main>
        </Container>
        <Footer
      
        />
      </ThemeProvider>
    </>
  );
};
