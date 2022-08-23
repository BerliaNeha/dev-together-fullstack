import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import HomepageGif from "../assets/Homepagegif.gif";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";

import styles from "./Homepage.module.css";

export const Homepage = () => {
  return (
    <>
      
      <Box sx={{height:"100vh"}}>
        <Navbar />
        <Box sx={{ height: "90%", width: "100%" }}>
          <div
            style={{
              height: "100%",
              width: "100%",
              background: `url(${HomepageGif}) no-repeat center center`,
              //backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              //   overflow: "hidden",
              //  backgroundPosition: "center 1px",
            }}
          ></div>
          <div></div>
        </Box>
        <Box>
          <div className={styles.container}>
            <div className={styles.card}>
              <div className={`${styles.face} ${styles.faceFront}`}>
                Employers
              </div>
              <div className={`${styles.face} ${styles.faceBack}`}>
                <h2>
                  IT and Emerging Technology Recruitment Experts <br />
                  Join hands with us to find Best Talents !
                </h2>
                {/* (card with zoom in?) Our services: */}
                <h3>Our Services:</h3>
                <ul>
                  <li>- Single point of contact</li>
                  <li>- A global network with rich candidate database</li>
                  <li>- Fast, relevant and pre-screened shortlists</li>
                </ul>

<<<<<<< HEAD
=======

>>>>>>> 98e966d1a992cbf2129b8f3c62f079de961b7b14
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
                  - Safe sharing of your profile with our registered clients and
                  locking in interviews
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
                  - The salary you deserve: Avoid that awkward discussion about
                  salary and benefits. We’ll negotiate on your behalf, so you
                  can relax knowing that we’re working to land you the best
                  package possible.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Box>
      <Footer />
<<<<<<< HEAD
      </Box>
=======
               
>>>>>>> 98e966d1a992cbf2129b8f3c62f079de961b7b14
    </>
  )
}
