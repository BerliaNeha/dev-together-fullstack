import { Button, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
// import HomepageGif from "../assets/Homepagegif.gif";
import HomePageGIF2 from "../assets/HomePageGIF2.gif";
import { CardFlip } from "../components/CardFlip";
import { MyContext } from "../components/Context/context";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import styles from "./Homepage.module.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const Homepage = () => {
  const { termsAccepted, setTermsAccepted, handleClose } =
    React.useContext(MyContext);
  return (
    <>
      <Navbar />
      <Box sx={{ height: "300px", width: "100%",display: { xs: "block", sm: "none", md: "none", xl:"none" } }}>
        <div
          style={{
            height: "100%",
            width: "100%",
            margin: "auto",
            background: `url(${HomePageGIF2}) no-repeat center center`,
            //backgroundRepeat: "no-repeat",
             backgroundSize: "100% 300px",
          }}
        ></div>
      </Box>
      <Box sx={{ height: "500px", width: "100%",display: { xs: "none", sm: "block", md: "none", xl:"none" } }}>
        <div
          style={{
            height: "100%",
            width: "100%",
            margin: "auto",
            background: `url(${HomePageGIF2}) no-repeat center center`,
            //backgroundRepeat: "no-repeat",
             backgroundSize: "100% 500px",
          }}
        ></div>
      </Box>
      <Box sx={{ height: "600px", width: "100%",display: { xs: "none", sm: "none", md: "block", xl:"none" } }}>
        <div
          style={{
            height: "100%",
            width: "100%",
            margin: "auto",
            background: `url(${HomePageGIF2}) no-repeat center center`,
            //backgroundRepeat: "no-repeat",
             backgroundSize: "100% 600px",
          }}
        ></div>
      </Box>
      <Box sx={{ height: "100vh", width: "100%",display: { xs: "none", sm: "none", md: "none", xl:"block" } }}>
        <div
          style={{
            height: "100%",
            width: "100%",
            margin: "auto",
            background: `url(${HomePageGIF2}) no-repeat center center`,
            //backgroundRepeat: "no-repeat",
             backgroundSize: "100% 100%",
          }}
        ></div>
      </Box>
      

      <CardFlip />

      <Footer />
      <Modal
        open={!termsAccepted}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Terms and Conditions
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            The protection of your privacy is of particular importance to us.
            Read summary below. You can find the complete privacy policy here!
            Dev Together GmbH, Sample Straße 00, 15657 Stadt, Germany, e-mail:
            test email (see imprint),hereinafter "Dev Together", as operator of
            the website "www.devTogether.io" is the controller for the use of
            the personal data of users of the website pursuant to Art. 4 (7) of
            the EU General Data Protection Regulation (“GDPR”) . You can contact
            our data protection officer via privacy@testpage.io or our postal
            address with reference to "Data protection officer". Furthermore, it
            is important to us that you know, at any point, when we store your
            personal data and how we use it. We will collect, process and use
            your personal data in compliance with applicable European and German
            data protection law. <br></br>
            <HashLink
              smooth
              to="/terms-privacy/#privacy"
              style={{ color: "error", textDecoration: "none" }}
            >
              Learn more
            </HashLink>
            <Button
              type="button"
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleClose}
            >
              Accept
            </Button>
          </Typography>
        </Box>
      </Modal>
    </>
  );
};
