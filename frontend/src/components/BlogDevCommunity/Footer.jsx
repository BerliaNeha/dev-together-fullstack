import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { HashLink } from "react-router-hash-link";

function Copyright() {
  return (
    <>
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <HashLink color="inherit" smooth to="/terms-privacy/#copyright">
          Dev Together
        </HashLink>
        {new Date().getFullYear()}
      </Typography>
      <Typography
        sx={{ mt: "25px" }}
        variant="body2"
        color="text.secondary"
        align="center"
      >
        <HashLink
          smooth
          to="/terms-privacy/#terms"
          style={{ color: "error", textDecoration: "none" }}
        >
          Terms
        </HashLink>
        <HashLink
          smooth
          to="/terms-privacy/#privacy"
          sx={{ color: "inherit", fontSize: "15px" }}
        >
          Privacy
        </HashLink>
      </Typography>
    </>
  );
}

function Footer(props) {
  const { description, title } = props;

  return (
    <Box component="footer" sx={{ bgcolor: "background.paper", py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          {description}
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;
