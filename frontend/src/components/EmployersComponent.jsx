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
import { FormControl, FormLabel, Radio, RadioGroup } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import BgEmployerPage from "../assets/bgEmployerPage.jpg";
import { Typography } from "@mui/material";
export const EmployersComponent = () => {
  const { currentUserId } = React.useContext(MyContext);
  // employer state
  const [username, setUsername] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [companyTitle, setCompanyTitle] = useState("");

  const [open, setOpen] = React.useState(false);
  const [shouldSubscribe, setShouldSubscribe] = React.useState(false);
  // Job states
  const [position, setPosition] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobList, setJobList] = useState([]);
  // When the <Jobs/> component first renders...
  // GET relevant data about the user who logged in, and update state...
  // So the employer can see their name and current list of albums immediately after they log in/register
  //********************************* */
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  useEffect(() => {
    console.log("fetching data");
    const fetchUserData = async () => {
      // Make a GET request to the "/employers/:id" endpoint in our server...
      // ... and then handle the response from the server
      const response = await fetch(
        process.env.REACT_APP_SERVER_URL + `/employers/${currentUserId}`
      );
      const parsedRes = await response.json();
      try {
        // If the request was successful...
        if (response.ok) {
          console.log("Server response", parsedRes);
          setUsername(parsedRes.username);
          //setCompanyEmail(parsedRes.email)
          //setCompanyTitle(parsedRes.companyName)
          //setJobDescription(parsedRes.jobDescription)
          
          // setJobList(parsedRes.jobs);
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
  const submitJob = async (event) => {
    console.log("submitting");
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newJob = {
      companyName: data.get("companyName"),
      email: data.get("email"),
      position: data.get("position"),
      jobDescription: data.get("jobDescription"),
      hiringRemoteDeveloperCheckbox: remoteWork,
      subscribeCheckbox: shouldSubscribe,
      policyAndTermsCheckbox: true,
    };
    const settings = {
      method: "POST",
      body: JSON.stringify(newJob),
      headers: {
        "Content-Type": "application/json",
        // "Authorization": "Bearer " + props.token
      },
    };
    // fetch the new job added by teh employer
    const response = await fetch(
      process.env.REACT_APP_SERVER_URL + "/jobs",
      settings
    );
    const parsedRes = await response.json();
    try {
      // If the first fetch request was successful...
      if (response.ok) {
        const settings = {
          method: "PATCH",
          body: JSON.stringify({ id: parsedRes.id }),
          headers: {
            "Content-Type": "application/json",
          },
        };
        // Make a second fetch request to add the new album id to the user's "albums" array
        const secondResponse = await fetch(
          process.env.REACT_APP_SERVER_URL +
            `/employers/${currentUserId}/jobs`,
          settings
        );
        const secondParsedRes = await secondResponse.json();
        // If the second request was successful...
        // Update the "jobs" state variable with the user's up-to-date "jobs" array (containing album ids)
        // This will re-render the app, and the new array will be mapped in the JSX below
        if (secondResponse.ok) {
          console.log("Add job server response", secondParsedRes.jobs);
          setJobList(secondParsedRes.jobs);
          //setCompanyTitle("");
          //setCompanyEmail("")
          //setPosition("");
          //setJobDescription("");
          console.log("second fetch");
          // If the second fetch request was unsuccessful...
        } else {
          throw new Error(secondParsedRes.message);
        }
        // If the first fetch request was unsuccessful...
      } else {
        throw new Error(parsedRes.message);
      }
    } catch (err) {
      alert(err.message);
    }
  };
  const [remoteWork, setRemoteWork] = React.useState("yes");
  const handleRemoteWork = (event) => {
    setRemoteWork(event.target.value);
  };
  // const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  //   ...theme.typography.body2,
  //   padding: theme.spacing(1),
  //   textAlign: "center",
  //   color: theme.palette.text.secondary,
  // }));
console.log(companyEmail, companyTitle)
  return (
    <>
      <Navbar />
      <Box sx={{ width: "100%" }}>
        <Stack spacing={2}>
          <Box
            sx={{
              width: "100vw",
              backgroundImage: `url(${BgEmployerPage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "200px",
              color: "#fff",
              fontSize: "40px",
              opacity: "0.75",
            }}
          >
            <h2 id="greeting">Welcome {username}!</h2>
          </Box>
          {/* <Item
             sx={{
              width: "100vw",
              backgroundImage: `url(${BgEmployerPage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "200px",
              color: "#fff",
              fontSize: "40px",
              opacity: "0.75",
            }}
           >  */}
          {/* </Item>  */}
          <Box>
            {/* <Item>  */}
            <Container component="main" sx={{ width: "65%" }}>
              <CssBaseline />
              <Typography variant="h3">
                NEED TOP TALENT FOR YOUR TECH ROLE?
              </Typography>
              <Typography sx={{ marginBottom: "-25px" }} variant="h5">
                Start Hiring!
              </Typography>
              <Box
                component="form"
                validate
                onSubmit={submitJob}
                sx={{
                  boxShadow: "1px 1px 25px 4px #000000",
                  borderRadius: 5,
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
                // noValidate
                // autoComplete="off"
              >
                <TextField
                  required
                  label="Company Name"
                  variant="standard"
                  id="companyName"
                  name="companyName"
                  //value={companyTitle}
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
                  required
                  label="Email"
                  variant="standard"
                  id="email"
                  name="email"
                  //value={companyEmail}
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
                  required
                  label="Position"
                  variant="standard"
                  id="position"
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
                  required
                  id="jobDescription"
                  label="Job Description"
                  name="jobDescription"
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
                <Grid item xs={6}>
                  <FormControl>
                    <FormLabel id="demo-controlled-radio-buttons-group">
                      Remote work
                    </FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      value={remoteWork}
                      onChange={handleRemoteWork}
                    >
                      <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
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
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Submit Job
                </Button>
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
            {/* </Item> */}
          </Box>
          {/* <Item> */}
          <Container component="main" sx={{ width: "85%" }}>
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
          <Stack
            spacing={4}
            direction="row"
            sx={{ marginTop: "5px", justifyContent: "space-around" }}
          >
            <Button variant="outlined">Frontend</Button>
            <Button variant="outlined">Backend</Button>
            <Button variant="outlined">FullStack</Button>
          </Stack>
          {/* </Item> */}
        </Stack>
      </Box>
    </>
  );
};
