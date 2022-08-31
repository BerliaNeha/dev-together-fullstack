import * as React from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import {
  Button,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { HashLink } from "react-router-hash-link";
import { Navigate } from "react-router-dom";
import { PrivacyAndPolicy } from "./PrivacyAndPolicy.jsx";

function Copyright() {
  return (
    <Typography variant="body2" color="inherit" sx={{ marginTop: "20px",color: (theme) => theme.palette.secondary.main}}>
      {"Copyright © "}
      <HashLink color="inherit" smooth to="/terms-privacy/#copyright" style={{textDecoration:"none",color: (theme) => theme.palette.secondary.main}}>
     <span style={{color: (theme) => theme.palette.secondary.main}}>Dev Together</span> 
      </HashLink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Footer(props) {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        fontSize: "15px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: (theme) => theme.palette.primary.main,
        color: (theme) => theme.palette.secondary.main,
        py: 2,
        position: "relative",
        bottom: 0,
        left: 0,
      }}
    >
      <Box
        component="footer"
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <Box
          sx={{
            marginLeft: "50px",
            display: { xs: "none", md: "block" },
          }}
        >
          <Typography variant="h5" sx={{ fontSize: "15px" }}>
            Dev Together
          </Typography>
          <Typography sx={{ fontSize: "15px" }}>Example str XX</Typography>
          <Typography sx={{ fontSize: "15px" }}>0000 Stadt</Typography>
          <Typography sx={{ fontSize: "15px" }}>030 1234567</Typography>
          <HashLink
            to="/contact"
            style={{
              textDecoration: "none",
              color: "#FCF6F5",
              fontSize: "15px",
            }}
          >
            Contact Us
          </HashLink>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
       
              <HashLink
                smooth
                to="/dev-community/#events"
                style={{ textDecoration: "none", fontSize: "15px" }}
              >
                <ListItemText
                  primary="Events"
                  sx={{
                    color: (theme) => theme.palette.secondary.main,
                    fontSize: "15px",
                  }}
                />
              </HashLink>
              <HashLink
                smooth
                to="/dev-community/#blog"
                style={{ textDecoration: "none", fontSize: "15px" }}
              >
                <ListItemText
                  primary="Blog"
                  sx={{
                    color: (theme) => theme.palette.secondary.main,
                    fontSize: "15px",
                  }}
                />
              </HashLink>
        </Box>

        <Box>
          <List>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
              }}
            >
              {/* <Link href={<PrivacyAndPolicy/>} sx={{ color: "inherit",fontSize:"15px"}}>
                Terms
              </Link> */}
              <HashLink
                smooth
                to="/terms-privacy/#terms"
                style={{ textDecoration: "none" }}
              >
                <Typography sx={{color: (theme) => theme.palette.secondary.main}}>Terms</Typography>
              </HashLink>
              <HashLink
                smooth
                to="/terms-privacy/#privacy"
                style={{ textDecoration: "none" }}
              >
                <Typography sx={{color: (theme) => theme.palette.secondary.main}}>Privacy</Typography>
              </HashLink>
            </Box>
          </List>{" "}
        </Box>
        <Box>
          <List sx={{ mr: 2 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
              }}
            >
              <Box>
                <Link
                  href="https://www.facebook.com/groups/fbdevelopers/about/"
                  sx={{ color: "inherit", mr: 4 }}
                >
                  <FacebookIcon />
                </Link>
                <Link
                  href="https://www.instagram.com/explore/tags/developer/?hl=el"
                  sx={{ color: "inherit", mr: 4 }}
                >
                  <InstagramIcon />
                </Link>
                <Link
                  href="https://twitter.com/twitter"
                  sx={{ color: "inherit" }}
                >
                  <TwitterIcon />
                </Link>
              </Box>

              <Box sx={{ mt: 4 }}>
                <Typography>Subscribe our Newsletter</Typography>
              </Box>
            </Box>
          </List>
        </Box>
      </Box>
      <Copyright />
    </Box>
  );
}

export default Footer;
