import {
  Button,
  Card,
  CardContent,
  CardMedia,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { Navbar } from "./Navbar";
import User from "../assets/userDev.png";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { makeStyles } from "@mui/styles";
import { MyContext } from "./Context/context";
import { CalendarViewDay } from "@mui/icons-material";
import { Row } from "./Row";

import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import LanguageIcon from "@mui/icons-material/Language";
import CodeIcon from "@mui/icons-material/Code";

import Footer from "./Footer";

// function createData(name, calories, fat, carbs, protein, price) {
//   return {
//     name,
//     calories,
//     fat,
//     carbs,
//     protein,
//     price,
//     history: [
//       {
//         date: "2020-01-05",
//         customerId: "11091700",
//         amount: 3,
//       },
//       {
//         date: "2020-01-02",
//         customerId: "Anonymous",
//         amount: 1,
//       },
//     ],
//   };
// }

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  color: (theme) => theme.palette.secondary.main,
};

export const DevelopersComponent = () => {
  const { currentUserId, jobId } = React.useContext(MyContext);
  // Education
  const [openEducation, setOpenEducation] = React.useState(false);
  const handleOpenEducation = () => {
    return (
      setOpenEducation(true),
      setOpenExperience(false),
      setOpenLanguages(false),
      setOpenSkills(false),
      setOpenAboutMe(false),
      setOpenAboutMe2(false)

    )
  };

  const handleCloseEducation = () => setOpenEducation(false);

  // Experience
  const [openExperience, setOpenExperience] = React.useState(false);
  const handleOpenExperience = () => {
    return (
      setOpenEducation(false),
      setOpenExperience(true),
      setOpenLanguages(false),
      setOpenSkills(false),
      setOpenAboutMe(false),
      setOpenAboutMe2(false)

    )
  };

  const handleCloseExperience = () => setOpenExperience(false);

  // Skills
  const [openSkills, setOpenSkills] = React.useState(false);
  const handleOpenSkills = () => {
    return (
      setOpenEducation(false),
      setOpenExperience(false),
      setOpenLanguages(false),
      setOpenSkills(true),
      setOpenAboutMe(false),
      setOpenAboutMe2(false)

    )
  };
  const handleCloseSkills = () => setOpenSkills(false);

  //Languages
  const [openLanguages, setOpenLanguages] = React.useState(false);
  const handleOpenLanguages = () => {
    return (
      setOpenEducation(false),
      setOpenExperience(false),
      setOpenLanguages(true),
      setOpenSkills(false),
      setOpenAboutMe(false),
      setOpenAboutMe2(false)

    )
  };
  const handleCloseLanguages = () => setOpenLanguages(false);

  // About me
  const [openAboutMe, setOpenAboutMe] = React.useState(false);
  const handleOpenAboutMe = () => {
    return (
      setOpenEducation(false),
      setOpenExperience(false),
      setOpenLanguages(false),
      setOpenSkills(false),
      setOpenAboutMe(true),
      setOpenAboutMe2(false)

    )
  };
  const handleCloseAboutMe = () => setOpenAboutMe(false);

    // About me2
    const [openAboutMe2, setOpenAboutMe2] = React.useState(false);
    const handleOpenAboutMe2 = () => {
      return (
        setOpenEducation(false),
        setOpenExperience(false),
        setOpenLanguages(false),
        setOpenSkills(false),
        setOpenAboutMe(false),
        setOpenAboutMe2(true)
        )
    };
    const handleCloseAboutMe2 = () => setOpenAboutMe2(false);
  //   Value start date experience
  const [valueStartDateExp, setValueStartDateExp] = React.useState(new Date());

  //Value end date experience
  const [valueEndDateExp, setValueEndDateExp] = React.useState(new Date());

  //   Value start date education
  const [valueStartDateEdu, setValueStartDateEdu] = React.useState(new Date());

  //Value end date education
  const [valueEndDateEdu, setValueEndDateEdu] = React.useState(new Date());

  // fetch cv from backend when you first login
  const [CV, setCV] = React.useState({
    experience: [
      {
        company: "",
        position: "",
        description: "",
        startDate: "",
        endDate: "",
      },
    ],
    education: [
      {
        schoolName: "",
        studies: "",
        degree: "",
        startDate: "",
        endDate: "",
      },
    ],
    skills: [],
    languages: [],
    aboutMe: [],
  });

  const fetchUserCV = async () => {
    const response = await fetch(
      process.env.REACT_APP_SERVER_URL + `/developers/${currentUserId}/cv`
    );
    const parsedRes = await response.json();
    try {
      if (response.ok) {
        setCV(parsedRes);
        console.log("Server response", parsedRes);
      } else {
        throw new Error(parsedRes.message);
      }
    } catch (err) {
      console.log(err);
      alert(err.message);
    }
  };

  useEffect(() => {
    fetchUserCV();
  }, [currentUserId]);

  // developer's data

  const [developerUsername, setDeveloperUsername] = React.useState("");
  const [developerJobTitle, setDeveloperJobTitle] = React.useState("");

  useEffect(() => {
    console.log("fetching data");
    const fetchUserData = async () => {
      const response = await fetch(
        process.env.REACT_APP_SERVER_URL + `/developers/${currentUserId}`
      );
      const parsedRes = await response.json();
      try {
        if (response.ok) {
          console.log("userName,jobTitle", parsedRes);
          setDeveloperUsername(parsedRes.username);
          setDeveloperJobTitle(parsedRes.jobTitle);
        } else {
          throw new Error(parsedRes.message);
        }
      } catch (err) {
        alert(err.message);
      }
    };
    fetchUserData();
  }, [currentUserId]);

  // ############### Experience ################

  const [position, setPosition] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [description, setDescription] = React.useState("");

  const handlePosition = (event) => {
    setPosition(event.target.value);
  };

  const handleCompany = (event) => {
    setCompany(event.target.value);
  };
  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const submitExperience = async (event) => {
    event.preventDefault();

    const newExperience = {
      company: company,
      position: position,
      description: description,
      startDate: valueStartDateExp,
      endDate: valueEndDateExp,
    };

    const settings = {
      method: "POST",
      body: JSON.stringify({
        ...CV,
        experience: [...CV.experience, newExperience],
      }),
      headers: {
        "Content-Type": "application/json",
        // "Authorization": "Bearer " + props.token
      },
    };

    const response = await fetch(
      process.env.REACT_APP_SERVER_URL + `/developers/${currentUserId}/cv`,
      settings
    );
    const parsedRes = await response.json();
    try {
      // If the first fetch request was successful...
      if (response.ok) {
        handleCloseExperience(true);
      } else {
        throw new Error(parsedRes.message);
      }
    } catch (err) {
      alert(err.message);
    }

    fetchUserCV();
  };

  // ############# Education #######################
  const [schoolName, setSchoolName] = React.useState("");
  const [studies, setStudies] = React.useState("");
  const [degree, setDegree] = React.useState("");

  const handleSchoolName = (event) => {
    setSchoolName(event.target.value);
  };

  const handleStudies = (event) => {
    setStudies(event.target.value);
  };

  const handleDegree = (event) => {
    setDegree(event.target.value);
  };

  const submitEducation = async (event) => {
    event.preventDefault();

    const newEducation = {
      schoolName: schoolName,
      studies: studies,
      degree: degree,
      startDate: valueStartDateExp,
      endDate: valueEndDateExp,
    };

    const settings = {
      method: "POST",
      body: JSON.stringify({
        ...CV,
        education: [...CV.education, newEducation],
      }),
      headers: {
        "Content-Type": "application/json",
        // "Authorization": "Bearer " + props.token
      },
    };
    // fetch the new job added by teh employer
    const response = await fetch(
      process.env.REACT_APP_SERVER_URL + `/developers/${currentUserId}/cv`,
      settings
    );
    const parsedRes = await response.json();
    try {
      // If the first fetch request was successful...
      if (response.ok) {
        handleCloseEducation(true);
      } else {
        throw new Error(parsedRes.message);
      }
    } catch (err) {
      alert(err.message);
    }

    fetchUserCV();
  };

  // ############# Skills #######################

  const [skills, setSkills] = React.useState("");

  const handleSkills = (event) => {
    setSkills(event.target.value);
  };

  const submitSkills = async (event) => {
    event.preventDefault();

    const settings = {
      method: "POST",
      body: JSON.stringify({
        ...CV,
        skills: [...CV.skills, skills],
      }),
      headers: {
        "Content-Type": "application/json",
        // "Authorization": "Bearer " + props.token
      },
    };
    // fetch the new job added by teh employer
    const response = await fetch(
      process.env.REACT_APP_SERVER_URL + `/developers/${currentUserId}/cv`,
      settings
    );
    const parsedRes = await response.json();
    try {
      // If the first fetch request was successful...
      if (response.ok) {
        handleCloseSkills(true);
      } else {
        throw new Error(parsedRes.message);
      }
    } catch (err) {
      alert(err.message);
    }

    fetchUserCV();
  };

  // ############# Languages #######################

  const [languages, setLanguages] = React.useState("");

  const handleLanguages = (event) => {
    setLanguages(event.target.value);
  };

  const submitLanguages = async (event) => {
    event.preventDefault();

    const settings = {
      method: "POST",
      body: JSON.stringify({
        ...CV,
        languages: [...CV.languages, languages],
      }),
      headers: {
        "Content-Type": "application/json",
        // "Authorization": "Bearer " + props.token
      },
    };
    // fetch the new job added by teh employer
    const response = await fetch(
      process.env.REACT_APP_SERVER_URL + `/developers/${currentUserId}/cv`,
      settings
    );
    const parsedRes = await response.json();
    try {
      // If the first fetch request was successful...
      if (response.ok) {
        handleCloseLanguages(true);
      } else {
        throw new Error(parsedRes.message);
      }
    } catch (err) {
      alert(err.message);
    }

    fetchUserCV();
  };

  // ############## About Me #########################

  const [aboutMe, setAboutMe] = React.useState("");

  const handleAboutMe = (event) => {
    setAboutMe(event.target.value);
  };

  const submitAboutMe = async (event) => {
    const settings = {
      method: "POST",
      body: JSON.stringify({
        ...CV,
        aboutMe: [...CV.aboutMe, aboutMe],
      }),
      headers: {
        "Content-Type": "application/json",
        // "Authorization": "Bearer " + props.token
      },
    };

    const response = await fetch(
      process.env.REACT_APP_SERVER_URL + `/developers/${currentUserId}/cv`,
      settings
    );
    const parsedRes = await response.json();
    try {
      // If the first fetch request was successful...
      if (response.ok) {
        console.log(parsedRes);
      } else {
        throw new Error(parsedRes.message);
      }
    } catch (err) {
      alert(err.message);
    }

    fetchUserCV();
  };

  //To fetch jobs from the jobs collection

  const [jobs, setJobs] = React.useState(null);
  const [itemsPerPage, setItemsPerPage] = React.useState(5);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [endofJobs, setEndofJobs] = React.useState(false);

  const fetchEmployerJobs = async () => {
    // const newJobList = {
    //   companyTitle: companyTitle,
    //   companyEmail: companyEmail,
    //   position: position,
    //   jobDescription: jobDescription,
    //   remoteWork: remoteWork,
    // };

    const response = await fetch(
      process.env.REACT_APP_SERVER_URL +
        `/jobs?page=${currentPage + 1}&pageSize=${itemsPerPage}`
    );
    const parsedRes = await response.json();

    try {
      if (response.ok) {
        if (jobs === null) {
          setJobs(parsedRes);
          console.log(parsedRes, "jobs");
        } else {
          setJobs((jobs) => jobs.concat(parsedRes));
        }
        if (parsedRes.length < itemsPerPage) {
          setEndofJobs(true);
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

  const handleJobs = async () => {
    fetchEmployerJobs();
  };

  const handleSeeMore = async () => {
    fetchEmployerJobs();
  };

  return (
    <>
      <Navbar />
      {/* smaller screens */}
      <Box sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
        <Box sx={{ display: "flex", flexDirection: "column", mt: 3 }}>
          {/* left card user image and information */}
          <Card sx={{ minWidth: 345, height: "auto" }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="100"
              image={User}
              sx={{ objectFit: "contain" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {developerUsername}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {developerJobTitle}
              </Typography>
            </CardContent>
          </Card>

          {/* right card */}
          <Card>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                {" "}
                <Typography variant="h5">About Me</Typography>
                <div>
                  <Button
                    variant="outlined"
                    sx={{
                      width: "100px",
                      marginTop: "4%",
                      color: (theme) => theme.palette.primary.main,
                    }}
                    onClick={handleOpenAboutMe2}
                  >
                    <EditOutlinedIcon />
                  </Button>
                  <Modal
                    open={openAboutMe2}
                    onClose={handleCloseAboutMe2}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <TextField
                           sx={{ marginBottom: "15%", width: "95%", mb: 5 }}
                           required
                           multiline
                           rows={4}
                           id="aboutMe"
                           label="About Me"
                           variant="standard"
                           value={aboutMe}
                           onChange={handleAboutMe}
                        />
                        <Button
                          variant="outlined"
                          sx={{
                            width: "150px",
                            marginTop: "4%",
                            color: (theme) => theme.palette.primary.main,
                          }}
                          onClick={submitAboutMe}
                        >
                          Add
                        </Button>
                      </Box>
                    </Box>
                  </Modal>
                </div>
              </Box>

              {CV.aboutMe.map((item) => {
                return (
                  <>
                    <Typography>{item}</Typography>
                  </>
                );
              })}
            </CardContent>
          </Card>

          {/* <Card
            sx={{ width: "100%", display: "flex", flexDirection: "column" }}
          >
            <TextField
              multiline
              fullWidth
              sx={{ width: "90%" }}
              required
              id="aboutMe"
              label="About Me"
              variant="standard"
              value={aboutMe}
              onChange={handleAboutMe}
            />

            <Button
              variant="outlined"
              sx={{
                width: "100px",
                marginTop: "4%",
                color: (theme) => theme.palette.primary.main,
              }}
              onClick={submitAboutMe}
            >
              <EditOutlinedIcon />
            </Button>
            {CV.aboutMe.map((item) => {
              return (
                <>
                  <Typography>{item}</Typography>
                </>
              );
            })}
          </Card> */}
        </Box>
      </Box>

      {/* ########################## bigger screens ####################################*/}
      <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
        <Box sx={{ width: "80%", margin: "auto", display: "flex", mt: 3 }}>
          {/* left card user image and information */}
          <Card sx={{ width: "25%", height: "20%" }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={User}
              sx={{ objectFit: "contain" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {developerUsername}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {developerJobTitle}
              </Typography>
            </CardContent>
          </Card>

          {/* right card */}

          <Card sx={{ width: "75%", minHeight: "20%" }}>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                {" "}
                <Typography variant="h5">About Me</Typography>
                <div>
                  <Button
                    variant="outlined"
                    sx={{
                      width: "100px",
                      marginTop: "4%",
                      color: (theme) => theme.palette.primary.main,
                    }}
                    onClick={handleOpenAboutMe}
                  >
                    <EditOutlinedIcon />
                  </Button>
                  <Modal
                    open={openAboutMe}
                    onClose={handleCloseAboutMe}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <TextField
                          sx={{ marginBottom: "15%", width: "95%", mb: 5 }}
                          required
                          multiline
                          rows={4}
                          id="aboutMe"
                          label="About Me"
                          variant="standard"
                          value={aboutMe}
                          onChange={handleAboutMe}
                        />
                        <Button
                          variant="outlined"
                          sx={{
                            width: "150px",
                            marginTop: "4%",
                            color: (theme) => theme.palette.primary.main,
                          }}
                          onClick={submitAboutMe}
                        >
                          Add
                        </Button>
                      </Box>
                    </Box>
                  </Modal>
                </div>
              </Box>

              {CV.aboutMe.map((item) => {
                return (
                  <>
                    <Typography>{item}</Typography>
                  </>
                );
              })}
            </CardContent>
          </Card>
        </Box>
      </Box>
      {/* ########## CV ########## */}

      <Box sx={{ width: "80%", margin: "auto", marginTop: "2%" }}>
        {/* first CARD EXPERIENCE */}
        <Box sx={{ marginBottom: "2%" }}>
          <CardContent
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography variant="h5">
              {" "}
              <WorkIcon /> Work Experience
            </Typography>
            <div>
              <Button
                variant="outlined"
                sx={{
                  width: "100px",
                  marginTop: "4%",
                  color: (theme) => theme.palette.primary.main,
                }}
                onClick={handleOpenExperience}
              >
                <EditOutlinedIcon />
              </Button>
              <Modal
                open={openExperience}
                onClose={handleCloseExperience}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Grid container>
                    <Grid item xs={12} sm={12} md={6}>
                      <TextField
                        sx={{ marginBottom: "15%", marginRight: "10px" }}
                        required
                        id="company"
                        label="Company"
                        variant="standard"
                        onChange={handleCompany}
                        value={company}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                      <FormControl
                        sx={{ width: "95%" }}
                        required
                        variant="standard"
                      >
                        <InputLabel id="position">Position</InputLabel>
                        <Select
                          labelId="position"
                          id="position"
                          value={position}
                          label="Job Title"
                          onChange={handlePosition}
                        >
                          <MenuItem value="Frontend Developer">
                            Frontend Developer
                          </MenuItem>
                          <MenuItem value="Backend Developer">
                            Backend Developer
                          </MenuItem>
                          <MenuItem value="Full Stack Developer">
                            Full Stack Developer
                          </MenuItem>
                          <MenuItem value="Full Stack Developer">
                            Others
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                      <TextField
                        id="description"
                        label="Description"
                        multiline
                        rows={4}
                        defaultValue="Description"
                        variant="standard"
                        onChange={handleDescription}
                        value={description}
                        sx={{ width: "95%", mb: 5 }}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} sx={{ mt: 2 }}>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDatePicker
                          id="startDate"
                          required
                          variant="standard"
                          disableFuture
                          label="Start Date"
                          openTo="year"
                          views={["year", "month"]}
                          value={valueStartDateExp}
                          onChange={(newValue) => {
                            setValueStartDateExp(newValue);
                          }}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} sx={{ mt: 2 }}>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDatePicker
                          id="endDate"
                          required
                          sx={{ paddingBottom: "50%" }}
                          variant="standard"
                          disableFuture
                          label="End Date"
                          openTo="year"
                          views={["year", "month"]}
                          value={valueEndDateExp}
                          onChange={(newValue) => {
                            setValueEndDateExp(newValue);
                          }}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="outlined"
                        sx={{
                          width: "100px",
                          marginTop: "4%",
                          color: (theme) => theme.palette.primary.main,
                        }}
                        onClick={submitExperience}
                      >
                        Add
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Modal>
            </div>
          </CardContent>
        </Box>
        {CV.experience.map(
          ({ company, position, description, startDate, endDate }) => {
            if (company === "") {
              return null;
            } else {
              return (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    mt: 3,
                  }}
                >
                  <Card
                    sx={{ width: "100%", border: "0.5px solid #7b9acc", p: 2 }}
                  >
                    <Grid
                      container
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Grid
                        container
                        sm={12}
                        md={12}
                        direction="column"
                        justifyContent="space-evenly"
                        alignItems="flex-start"
                      >
                        <Grid item>
                          <Typography variant="h5">{position}</Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="h6" sx={{ fontWeight: "light" }}>
                            {company} |{" "}
                            {new Date(endDate).toLocaleDateString("de", {
                              month: "2-digit",
                              year: "numeric",
                            })}{" "}
                            -{" "}
                            {new Date(endDate).toLocaleDateString("de", {
                              month: "2-digit",
                              year: "numeric",
                            })}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography
                            variant="h6"
                            sx={{ fontWeight: "regular" }}
                          >
                            {description}
                          </Typography>
                        </Grid>
                      </Grid>
                      {/* <Grid
                        container
                        md={6}
                        direction="row"
                        justifyContent="flex-end"
                        alignItems="flex-start"
                      >
                        <Grid item>
                          <Typography variant="h6">
                      
                            {new Date(startDate).toLocaleDateString("de", {
                              month: "2-digit",
                              year: "numeric",
                            })}
                          </Typography>
                        </Grid>
                        &nbsp; &nbsp;
                        <Grid item>
                          <Typography variant="h6">
                       
                            {new Date(endDate).toLocaleDateString("de", {
                              month: "2-digit",
                              year: "numeric",
                            })}
                          </Typography>
                        </Grid>
                      </Grid> */}
                    </Grid>
                  </Card>
                </Box>
              );
            }
          }
        )}
        {/* second CARD EDUCATION */}
        <Box sx={{ marginBottom: "1%", mt: "1%" }}>
          <CardContent
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography variant="h5">
              {" "}
              <SchoolIcon /> Education
            </Typography>
            <div>
              <Button
                variant="outlined"
                sx={{
                  width: "100px",
                  marginTop: "4%",
                  color: (theme) => theme.palette.primary.main,
                }}
                onClick={handleOpenEducation}
              >
                <EditOutlinedIcon />
              </Button>
              <Modal
                open={openEducation}
                onClose={handleCloseEducation}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Grid container direction="column">
                    <Grid
                      container
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Grid item xs={12} sm={12} md={6}>
                        <TextField
                          sx={{ marginBottom: "15%", marginRight: "10px" }}
                          required
                          id="schoolName"
                          label="School/University"
                          variant="standard"
                          onChange={handleSchoolName}
                          value={schoolName}
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={6}>
                        <TextField
                          sx={{ marginBottom: "15%", marginRight: "10px" }}
                          required
                          id="studies"
                          label="Studies"
                          variant="standard"
                          onChange={handleStudies}
                          value={studies}
                        />
                      </Grid>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12}>
                      <FormControl
                        sx={{ width: "80%" }}
                        required
                        variant="standard"
                      >
                        <InputLabel id="degree">Degree</InputLabel>
                        <Select
                          labelId="degree"
                          id="degree"
                          value={degree}
                          label="Degree"
                          onChange={handleDegree}
                        >
                          <MenuItem value="Bachelor">Bachelor</MenuItem>
                          <MenuItem value="Master">Master</MenuItem>
                          <MenuItem value="PhD">PhD</MenuItem>
                          <MenuItem value="Other">Other</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid container>
                      <Grid item sx={{ mt: 2 }}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <DesktopDatePicker
                            id="startDate"
                            required
                            variant="standard"
                            disableFuture
                            label="Start Date"
                            openTo="year"
                            views={["year", "month"]}
                            value={valueStartDateEdu}
                            onChange={(newValue) => {
                              setValueStartDateEdu(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </LocalizationProvider>
                      </Grid>
                      <Grid item sx={{ mt: 2, ml: 2 }}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <DesktopDatePicker
                            id="endDate"
                            required
                            sx={{ paddingBottom: "50%" }}
                            variant="standard"
                            disableFuture
                            label="End Date"
                            openTo="year"
                            views={["year", "month"]}
                            value={valueEndDateEdu}
                            onChange={(newValue) => {
                              setValueEndDateEdu(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </LocalizationProvider>
                      </Grid>
                    </Grid>

                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="outlined"
                        sx={{
                          width: "150px",
                          marginTop: "4%",
                          color: (theme) => theme.palette.primary.main,
                        }}
                        onClick={submitEducation}
                      >
                        Add
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Modal>
            </div>
          </CardContent>
        </Box>
        {CV.education.map(
          ({ schoolName, studies, degree, startDate, endDate }) => {
            if (studies === "") {
              return null;
            } else {
              return (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    mt: 1,
                  }}
                >
                  {/* right card */}
                  <Card
                    sx={{ width: "90%", border: "0.5px solid #7b9acc", p: 2 }}
                  >
                    <Grid
                      container
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Grid
                        container
                        md={6}
                        direction="column"
                        justifyContent="space-evenly"
                        alignItems="flex-start"
                      >
                        <Grid item>
                          <Typography variant="h5">{studies}</Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="h6" sx={{ fontWeight: "light" }}>
                            {schoolName}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography
                            variant="h6"
                            sx={{ fontWeight: "regular" }}
                          >
                            {degree}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        md={6}
                        direction="row"
                        justifyContent="flex-end"
                        alignItems="flex-start"
                      >
                        <Grid item>
                          <Typography variant="h6">
                            {new Date(startDate).toLocaleDateString("de", {
                              month: "2-digit",
                              year: "numeric",
                            })}
                          </Typography>
                        </Grid>
                        &nbsp; &nbsp;
                        <Grid item>
                          <Typography variant="h6">
                            {new Date(endDate).toLocaleDateString("de", {
                              month: "2-digit",
                              year: "numeric",
                            })}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Card>
                </Box>
              );
            }
          }
        )}

        {/* third CARD SKILLS */}
        <Box sx={{ marginBottom: "1%", mt: "1%" }}>
          <CardContent
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography variant="h5">
              {" "}
              <CodeIcon /> Skills
            </Typography>
            <div>
              <Button
                variant="outlined"
                sx={{
                  width: "100px",
                  marginTop: "4%",
                  color: (theme) => theme.palette.primary.main,
                }}
                onClick={handleOpenSkills}
              >
                <EditOutlinedIcon />
              </Button>
              <Modal
                open={openSkills}
                onClose={handleCloseSkills}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <TextField
                      sx={{ marginBottom: "15%" }}
                      required
                      id="skills"
                      label="Skills"
                      variant="standard"
                      value={skills}
                      onChange={handleSkills}
                    />
                    <Button
                      variant="outlined"
                      sx={{
                        width: "150px",
                        marginTop: "4%",
                        color: (theme) => theme.palette.primary.main,
                      }}
                      onClick={submitSkills}
                    >
                      Add
                    </Button>
                  </Box>
                </Box>
              </Modal>
            </div>
          </CardContent>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
          }}
        >
          {CV.skills.map((item) => {
            return (
              <>
                <Card
                  sx={{
                    width: "auto",
                    p: 1,
                    mr: 2,
                    mt: 2,
                    mb: 2,
                    border: "0.5px solid #7b9acc",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "regular", textAlign: "center" }}
                  >
                    {item}
                  </Typography>
                </Card>
              </>
            );
          })}
        </Box>

        {/* fourth CARD languages */}
        <Box sx={{ marginBottom: "1%" }}>
          <CardContent
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography variant="h5">
              <LanguageIcon /> Languages
            </Typography>
            <div>
              <Button
                variant="outlined"
                sx={{
                  width: "100px",
                  marginTop: "4%",
                  color: (theme) => theme.palette.primary.main,
                }}
                onClick={handleOpenLanguages}
              >
                <EditOutlinedIcon />
              </Button>
              <Modal
                open={openLanguages}
                onClose={handleCloseLanguages}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <TextField
                      sx={{ marginBottom: "15%" }}
                      required
                      id="languages"
                      label="Languages"
                      variant="standard"
                      value={languages}
                      onChange={handleLanguages}
                    />

                    <Button
                      variant="outlined"
                      sx={{
                        width: "150px",
                        marginTop: "4%",
                        color: (theme) => theme.palette.primary.main,
                      }}
                      onClick={submitLanguages}
                    >
                      Add
                    </Button>
                  </Box>
                </Box>
              </Modal>
            </div>
          </CardContent>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
          }}
        >
          {CV.languages.map((item) => {
            return (
              <>
                <Card
                  sx={{
                    width: "auto",
                    p: 1,
                    mr: 2,
                    mt: 2,
                    mb: 2,
                    border: "0.5px solid #7b9acc",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "regular", textAlign: "center" }}
                  >
                    {item}
                  </Typography>
                </Card>
              </>
            );
          })}
        </Box>
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
          }}
          onClick={handleJobs}
        >
          Search Jobs
        </Button>
        {jobs && (
          <TableContainer
            component={Paper}
            sx={{ width: "80%", margin: "auto", padding: "5px" }}
          >
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell>Open Positions</TableCell>
                  <TableCell align="center">Remote / Onsite</TableCell>

                  <TableCell align="right">Company</TableCell>
                  <TableCell align="right">Contact</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {jobs.map((job) => (
                  <Row key={job._id} row={job} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
        {jobs && (
          <Button
            disabled={endofJobs}
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
            {endofJobs ? "end of jobs list" : "See more"}
          </Button>
        )}
        ;
      </Box>
      <Footer />
    </>
  );
};
