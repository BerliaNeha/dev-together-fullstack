import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
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
import {
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import BgEmployerPage from "../assets/bgEmployerPage.jpg";
import { Typography } from "@mui/material";

import { RowCV } from "./Context/RowCV";

import Footer from "./Footer";
import { HashLink } from "react-router-hash-link";


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

  // const handleToggle = () => {
  //   setOpen(!open);
  // };

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
          setCompanyEmail(parsedRes.email);
          setCompanyTitle(parsedRes.companyName);
          setJobDescription(parsedRes.jobDescription);

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
    // fetch the new job added by the employer
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
          process.env.REACT_APP_SERVER_URL + `/employers/${currentUserId}/jobs`,
          settings
        );
        const secondParsedRes = await secondResponse.json();
        // If the second request was successful...
        // Update the "jobs" state variable with the user's up-to-date "jobs" array (containing album ids)
        // This will re-render the app, and the new array will be mapped in the JSX below
        if (secondResponse.ok) {
          console.log("Add job server response", secondParsedRes.jobs);
          setJobList(secondParsedRes.jobs);
          // setCompanyTitle("");
          // setCompanyEmail("");
          setPosition("");
          setJobDescription("");
          alert("Job submitted successfully");
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

  // fetch all developers data

  const [allDevelopers, setAllDevelopers] = React.useState(null);
  const [itemsPerPage, setItemsPerPage] = React.useState(5);
  const [currentPage, setCurrentPage] = React.useState(0);

  const [endofDevelopers, setEndofDevelopers] = React.useState(false);

  const [selectedCategory, setSelectedCategory] = React.useState("all");

  const [filteredDevJobtitle, setFilteredDevJobtitle] = React.useState(null);

  //**********UseEffect for search category buttons in Employers Search CV********/

  useEffect(() => {
    console.log("changing category");
    if(allDevelopers && selectedCategory!="all"){
      console.log(allDevelopers,"ALL DEV")
      setFilteredDevJobtitle(
        allDevelopers.filter((dev) => {
          return dev.jobTitle == selectedCategory;
        })
      );
    }
    
  }, [selectedCategory]);

  

  const fetchEmployerDevelopers = async (isRenew = false) => {

    let fetchLink="";

    if(isRenew){
      fetchLink =process.env.REACT_APP_SERVER_URL +
      `/developers?page=${1}&pageSize=${itemsPerPage}`
    } else {
      fetchLink =process.env.REACT_APP_SERVER_URL +
      `/developers?page=${currentPage + 1}&pageSize=${itemsPerPage}`
    }
    const response = await fetch(fetchLink);

    const parsedRes = await response.json();

    //***********only 5 results per page**********/

    try {
      if (response.ok) {
        setFilteredDevJobtitle(null)
        if (allDevelopers === null||isRenew ){
          setAllDevelopers(parsedRes);
        } else {
          setAllDevelopers((allDevelopers)=>allDevelopers.concat(parsedRes));
         
        }
        if (parsedRes.length < itemsPerPage) {
          setEndofDevelopers(true);
        } else {
          setCurrentPage((page) => page + 1);
        }
      } else {
        throw new Error(parsedRes.message);
      }
    } catch (err) {
      alert(err.message);
    }
  };

  const [allCVs, setAllCVs] = React.useState([]);

  const fetchEmployerCVs = async () => {
    const response = await fetch(process.env.REACT_APP_SERVER_URL + `/cvs`);
    const parsedRes = await response.json();

    try {
      if (response.ok) {
        setAllCVs(parsedRes);
      } else {
        throw new Error(parsedRes.message);
      }
    } catch (err) {
      alert(err.message);
    }
  };
  //console.log(allCVs, "all cv from backend stored in a state")
  // console.log(allDevelopers, "all developers from backend stored in a state")

  const handleCVs = () => {
    if(endofDevelopers){
      setCurrentPage(0)
      setAllDevelopers(null)
      setEndofDevelopers(false)
      fetchEmployerDevelopers(true)
      console.log("Setting end of DEV List")
    } else  {
      fetchEmployerDevelopers()
    }
    fetchEmployerCVs();
  ;
  };

  const handleSeeMore = async () => {
    fetchEmployerDevelopers();
  };



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
                  boxShadow: `0px 15px 20px rgba(0,0,0,0.20)`,
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
              >
                <TextField
                  required
                  label="Company Name"
                  variant="standard"
                  id="companyName"
                  name="companyName"
                  value={companyTitle}
                  onChange={(e) => setCompanyTitle(e.target.value)}
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
                  value={companyEmail}
                  onChange={(e) => setCompanyEmail(e.target.value)}
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
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
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
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
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
                    label="Subscribe for newsletter"
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
              />
              <HashLink
                smooth
                to="/terms-privacy/#privacy"
                sx={{ color: "inherit"}}
              >
                I agree to and understand the Privacy Notice and Terms of Use.
              </HashLink>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, width: "20%" }}
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
          </Box>

          <Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                width: "40%",
                display: "block",
                ml: "auto",
                mr: "auto",
                color: "bbc8d3",
              }}
              onClick={handleCVs}
            >
              Search CVs
            </Button>
          </Box>
          <Stack
            direction="row"
            sx={{
              marginTop: "5px",
              justifyContent: "space-around",
              paddingBottom: "5px",
            }}
          >
            <Button
              onClick={() => setSelectedCategory("Frontend Developer")}
              variant="outlined"
            >
              Frontend
            </Button>
            <Button
              onClick={() => setSelectedCategory("Backend Developer")}
              variant="outlined"
            >
              Backend
            </Button>
            <Button
              onClick={() => setSelectedCategory("Full Stack Developer")}
              variant="outlined"
            >
              FullStack
            </Button>
          </Stack>
          {/* </Item> */}
        </Stack>

        {allDevelopers && (
          <TableContainer sx={{ margin: "auto", p: 5 }}>
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow>
                  <TableCell>CVs</TableCell>
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="left">Position</TableCell>
                  <TableCell align="left">Contact</TableCell>
                </TableRow>
              </TableHead>

              <RowCV allCVs={allCVs} allDevelopers={filteredDevJobtitle ? filteredDevJobtitle : allDevelopers}  />
            </Table>
          </TableContainer>
        )}

        {allDevelopers && (
          <Button
            disabled={endofDevelopers}
            variant="outlined"
            component="label"
            sx={{
              width: "10%",
              margin: "auto",
              padding: "5px",
              display: "flex",
              justifyContent: "center",
              mt: "15px",
              mb: "5px",
            }}
            onClick={handleSeeMore}
          >
            {endofDevelopers ? "end of CVS list" : "See more"}
          </Button>
        )}
      </Box>
      <Footer />
    </>
  );
};
