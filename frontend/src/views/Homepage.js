import { Button, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
// import HomepageGif from "../assets/Homepagegif.gif";
import HomePageGIF2 from "../assets/HomePageGIF2.gif";
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
      <Box sx={{ height: "100vh" }}>
        <Navbar />
        <Box sx={{ height: "90vh", width: "100%" }}>
          <div
            style={{
              height: "100%",
              width: "100%",
              margin: "auto",
              background: `url(${HomePageGIF2}) no-repeat center center`,
              //backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              //   overflow: "hidden",
              //  backgroundPosition: "center 1px",
            }}
          ></div>
          <div></div>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          {/* <div className={styles.container}> */}
          <div className={styles.card}>
            <div className={`${styles.face} ${styles.faceFront}`}>
              Employers
            </div>
            <div className={`${styles.face} ${styles.faceBack}`}>
              <h2>
                IT and Emerging Technology Recruitment Experts <br />
                Join hands with us to find Best Talents !
              </h2>

              <h3>Our Services:</h3>
              <ul>
                <li>- Single point of contact</li>
                <li>- A global network with rich candidate database</li>
                <li>- Fast, relevant and pre-screened shortlists</li>
              </ul>

              <h3>Planned Services:</h3>
              <ul>
                <li>
                  - Management information reports: We can report on the number
                  of resumes sent, the number of interviews, offers and
                  placements made over a pre-agreed time period.
                </li>

                <li>
                  - Ongoing candidate management: From interview and offer
                  stages, right up to and beyond their first day at work, we
                  ensure the candidate is fully committed to the role, and there
                  are no changes in circumstances that will prevent our clients
                  from successfully on-boarding new hires.
                </li>
              </ul>
            </div>
            <div className={styles.card}>
              <div className={`${styles.face} ${styles.faceFront}`}>
                Developers
              </div>
              <div className={`${styles.face} ${styles.faceBack}`}>
                <h2>
                  Find best Tech roles across a range of markets <br />
                  Join hands with us to find your dream job!
                </h2>
                {/* (card with zoom in?) Our services: */}
                <h3>Our Services:</h3>
                <ul>
                  <li>- Single point of contact with our consultants</li>
                  <li>
                    - Safe sharing of your profile with our registered clients
                    and locking in interviews
                  </li>
                  <li>
                    - We are committed to your career, bringing you in front of
                    the biggest names with our growing database of employers
                  </li>
                </ul>

                <h3>Planned Services:</h3>
                <ul>
                  <li>
                    - Expert advice with detailed feedback: We assist you from
                    documentation to on-boarding. If you need any advice or
                    guidance, these calls offer you the perfect opportunity to
                    talk them through with your trusted consultant.
                  </li>

                  <li>
                    - The salary you deserve: Avoid that awkward discussion
                    about salary and benefits. We’ll negotiate on your behalf,
                    so you can relax knowing that we’re working to land you the
                    best package possible.
                  </li>
                </ul>
              </div>
              {/* </div> */}
            </div>
          </div>
        </Box>
        <Footer />
      </Box>

      <Modal
        open={!termsAccepted}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          The protection of your privacy is of particular importance to us. Read summary below. You can find the complete privacy policy here!

Dev Together GmbH, Sample Straße 00, 15657 Stadt, Germany, e-mail: test email (see imprint),hereinafter "Dev Together", as operator of the website "www.devTogether.io" is the controller for the use of the personal data of users of the website pursuant to Art. 4 (7) of the EU General Data Protection Regulation (“GDPR”) . You can contact our data protection officer via privacy@testpage.io or our postal address with reference to "Data protection officer".

Furthermore, it is important to us that you know, at any point, when we store your personal data and how we use it.

We will collect, process and use your personal data in compliance with applicable European and German data protection law.
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
