import React, { useEffect, useState } from "react";

import { Navbar } from "./Navbar";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";

import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { MyContext } from "../components/Context/context.js";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import BgEmployerPage from "../assets/bgEmployerPage.jpg";
import { Typography } from "@mui/material";


export const EmployersComponent = () => {
  const { currentUserId } = React.useContext(MyContext);

  const [username, setUsername] = useState("");
  const [open, setOpen] = React.useState(false);

  const [shouldSubscribe, setShouldSubscribe] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  useEffect(() => {
    const fetchUserData = async () => {
      const settings = {
        method: "GET",
        body: JSON.stringify(),
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetch(
        process.env.REACT_APP_SERVER_URL + `/employers/${currentUserId}`,
        settings
      );

      const parsedRes = await response.json();

      try {
        // If the request was successful...
        if (response.ok) {
          console.log("Server response", parsedRes);
          setUsername(parsedRes.username);

          // If the request was unsuccessful...
        } else {
          throw new Error(parsedRes.message);
        }
      } catch (err) {
        alert(err.message);
      }
    };

    fetchUserData();
  }, [currentUserId]);

  return (
    <>
      <Navbar />
      <Box sx={{ width: "100%" }}>
        <Stack spacing={2}>
          <Item
            sx={{
              width: "100vw",
              backgroundImage: `url(${BgEmployerPage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "200px",
              color: "#fff",
              fontSize: "40px",
              opacity: "0.75"
            }}
          >
            <h2 id="greeting">Welcome {username}!</h2>
          </Item>
          <Item>
            <Container component="main" sx={{ width: "65%"}}>
              <CssBaseline />
              <Typography variant="h3">
                NEED TOP TALENT FOR YOUR TECH ROLE?
              </Typography>
              <Typography sx={{ marginBottom: "-25px" }} variant="h5">
                Start Hiring! 
              </Typography>
              <Box
                component="form"
                // validate onSubmit={handleSubmit}
                sx={{
                  boxShadow: "1px 1px 25px 4px #000000",
                  borderRadius: 5,
                  // "& > :not(style)": { m: 1, width: "150%" },

                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  opacity: 1,
                  fontWeight: "bold",
                  minWidth: "40%",
                  margin: "auto",
                  minHeight: "50vh",
                  marginTop: 6,
                  backgroundColor: "rgba(35, 78, 112, 0.31)",
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  label="Company Name"
                  variant="standard"
                  id="companyName"
                  type="text"
                  name="companyName"
                  sx={{ width: "80%" }}
                  InputLabelProps={{
                    style: {
                      fontWeight: "bold",
                      color: "black",
                      fontSize: 25,
                      marginLeft: 12,
                    },
                  }}
                  inputProps={{
                    style: {
                      fontWeight: "bold",
                      color: "black",
                      fontSize: 20,
                      marginLeft: 12,
                    },
                  }}
                />

                <TextField
                  label="Email"
                  variant="standard"
                  id="email"
                  type="email"
                  name="email"
                  sx={{ width: "80%" }}
                  InputLabelProps={{
                    style: {
                      fontWeight: "bold",
                      color: "black",
                      fontSize: 25,
                      marginLeft: 12,
                    },
                  }}
                  inputProps={{
                    style: {
                      fontWeight: "bold",
                      color: "black",
                      fontSize: 20,
                      marginLeft: 12,
                    },
                  }}
                />

                <TextField
                  label="Position"
                  variant="standard"
                  id="position"
                  type="position"
                  name="position"
                  sx={{ width: "80%" }}
                  InputLabelProps={{
                    style: {
                      fontWeight: "bold",
                      color: "black",
                      fontSize: 25,
                      marginLeft: 12,
                    },
                  }}
                  inputProps={{
                    style: {
                      fontWeight: "bold",
                      color: "black",
                      fontSize: 20,
                      marginLeft: 12,
                    },
                  }}
                />

                <TextField
                  id="standard-multiline-static"
                  label="Job Description"
                  multiline
                  rows={10}
                  col={10}
                  variant="outlined"
                  fullWidth
                  sx={{ width: "80%", marginTop: 2 }}
                  InputLabelProps={{
                    style: { fontWeight: "bold", color: "black", fontSize: 25 },
                  }}
                  inputProps={{
                    style: { fontWeight: "bold", color: "black", fontSize: 20 },
                  }}
                />
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        color="primary"
                        value={shouldSubscribe}
                        onChange={() => setShouldSubscribe(!shouldSubscribe)}
                      />
                    }
                    label="Subscribe for our newsletter"
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        color="primary"
                        required
                        name="termsAndPolicy"
                        value={true}
                      />
                    }
                    label="I agree to and understand the Privacy Notice and Terms of Use"
                  />
                </Grid>

                <Button onClick={handleToggle}>SUBMIT JOB</Button>
                <Backdrop
                  sx={{
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                  }}
                  open={open}
                  onClick={handleClose}
                >
                  <CircularProgress color="inherit" />
                </Backdrop>
              </Box>
            </Container>
          </Item>
          <Item>
          <Container component="main" sx={{ width: "85%"}}>
              <CssBaseline />
            <Button onClick={handleToggle}>SEARCH CVs</Button>
            <Backdrop
              sx={{
                color: "#fff",
                zIndex: (theme) => theme.zIndex.drawer + 1,
              }}
              open={open}
              onClick={handleClose}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
            </Container>
            <Stack spacing={4} direction="row" sx={{ marginTop: "5px", justifyContent: "space-around"}}>
      <Button variant="outlined">Frontend</Button>
      <Button variant="outlined">Backend</Button>
      <Button variant="outlined">FullStack</Button>
    </Stack>
          </Item>
        </Stack>
      </Box>
    </>
  );
};
