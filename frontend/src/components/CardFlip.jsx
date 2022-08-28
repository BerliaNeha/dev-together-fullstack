import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import react, { useState } from "react";
import ReactCardFlip from "react-card-flip";

export const CardFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const [isFlippedSecond, setIsFlippedSecond] = useState(false);
  const handleClickSecond = () => {
    setIsFlippedSecond(!isFlippedSecond);
  };

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Box sx={{ width: "50%" }}>
          <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div
              style={{
                backgroundColor: "#7b9acc",
                height: "60vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Employers <button onClick={handleClick}>Click to flip</button>
            </div>

            <div
              style={{
                backgroundColor: "#7b9acc",
                overflow: "auto",
                height: "60vh",
              }}
            >
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
              <button onClick={handleClick}>Click to flip</button>
            </div>
          </ReactCardFlip>
        </Box>

        {/* ############################# CARD 2 ###################################### */}

        <Box sx={{ width: "50%", height: "60vh" }}>
          <ReactCardFlip isFlipped={isFlippedSecond} flipDirection="horizontal">
            <Box
              style={{
                backgroundColor: "#7b9acc",
                height: "60vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h4">Employers</Typography>
              <Button onClick={handleClickSecond}>Read more</Button>
            </Box>

            <Box
              style={{
                backgroundColor: "#7b9acc",
                overflow: "auto",
                height: "60vh",
              }}
            >
              <Typography variant="h5">
                IT and Emerging Technology Recruitment Experts <br />
                Join hands with us to find Best Talents !
              </Typography>

              <Typography variant="h6">Our Services:</Typography>
              <ul>
                <li>- Single point of contact</li>
                <li>- A global network with rich candidate database</li>
                <li>- Fast, relevant and pre-screened shortlists</li>
              </ul>

              <Typography variant="h6">Planned Services:</Typography>
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
              <Button onClick={handleClickSecond}>Click to flip</Button>
            </Box>
          </ReactCardFlip>
        </Box>
      </Box>
    </>
  );
};
