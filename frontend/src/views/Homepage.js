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
      <Box sx={{ height: "100vh" }}>
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

                <h3>Planned Services:</h3>
                <ul>
                  <li>
                    - Management information reports: We can report on the
                    number of resumes sent, the number of interviews, offers and
                    placements made over a pre-agreed time period.
                  </li>

                  <li>
                    - Ongoing candidate management: From interview and offer
                    stages, right up to and beyond their first day at work, we
                    ensure the candidate is fully committed to the role, and
                    there are no changes in circumstances that will prevent our
                    clients from successfully on-boarding new hires.
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

                <h3>Planned Services:</h3>
                <ul>
                  <li>
                    - Management information reports: We can report on the
                    number of resumes sent, the number of interviews, offers and
                    placements made over a pre-agreed time period.
                  </li>

                  <li>
                    - Ongoing candidate management: From interview and offer
                    stages, right up to and beyond their first day at work, we
                    ensure the candidate is fully committed to the role, and
                    there are no changes in circumstances that will prevent our
                    clients from successfully on-boarding new hires.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Box>
        <Footer />
      </Box>
    </>
  );
};
