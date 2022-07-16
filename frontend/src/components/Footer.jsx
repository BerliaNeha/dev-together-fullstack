import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import {
  Button,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import styled from "@emotion/styled";

const Responsive = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("mobile")]: {
    //color: green[500]
  },
  [theme.breakpoints.up("tablet")]: {
    //color: purple[500]
  },
  [theme.breakpoints.up("desktop")]: {
    //color: red[500]
  },
}));
function Copyright() {
  return (
    <Typography variant="body2" color="inherit" sx={{ marginTop: "20px" }}>
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Developer Networking
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Footer(props) {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: (theme) => theme.palette.primary.main,
        color: (theme) => theme.palette.secondary.main
      }}
    >
      <Box
        sx={{
          marginLeft: "50px",
          display: { xs: "none", md: "block" },
        }}
      >
        <Typography variant="h5">Developer Networking</Typography>
        <Typography variant="h6">Example str XX</Typography>
        <Typography variant="h6">0000 Berlin</Typography>
        <Typography variant="h6">030 1234567</Typography>

        <Button sx={{color:"inherit"}}>Contact with us!</Button>

        <Button>Contact with us!</Button>

        <Copyright />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          marginRight: "50px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <List>
            <Typography
              variant="h5"
              sx={{ textDecoration: "underline", fontFamily: "inherit" }}
            >
              Highlights
            </Typography>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Events" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Meetups" />
              </ListItemButton>
            </ListItem>
          </List>

          <List>
            <Typography variant="h5" sx={{ textDecoration: "underline" }}>
              Follow us
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>

              <Link href="https://www.facebook.com/groups/fbdevelopers/about/" sx={{color:"inherit"}}>
                <FacebookIcon />
              </Link>
              <Link href="https://www.instagram.com/explore/tags/developer/?hl=el" sx={{color:"inherit"}}>
                <InstagramIcon />
              </Link>
              <Link href="https://twitter.com/twitter" sx={{color:"inherit"}}>

              <Link href="#">
                <FacebookIcon />
              </Link>
              <Link href="#">
                <InstagramIcon />
              </Link>
              <Link href="#">

                <TwitterIcon />
              </Link>
            </Box>
          </List>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>

          <Link href="#" sx={{color:"inherit"}}>Privacy policy</Link>
          {" | "}
          <Link href="#" sx={{color:"inherit"}}>COVID information</Link>
          {" | "}
          <Link href="#" sx={{color:"inherit"}}>Terms of service</Link>
=
          <Link href="#">Privacy policy</Link>
          {"|"}
          <Link href="#">COVID information</Link>
          {"|"}
          <Link href="#">Terms of service</Link>

        </Box>
      </Box>
    </Box>
  );
}

export default Footer;