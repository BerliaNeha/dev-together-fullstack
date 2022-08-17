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
  Select,
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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: "2%",
  color: (theme) => theme.palette.primary.main,
};

const style4 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "35%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: "2%",
  color: (theme) => theme.palette.primary.main,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export const DevelopersComponent = () => {
  const { currentUserId } = React.useContext(MyContext);
  // Education
  const [openEducation, setOpenEducation] = React.useState(false);
  const handleOpenEducation = () => {
    return (
      setOpenEducation(true),
      setOpenExperience(false),
      setOpenLanguages(false),
      setOpenSkills(false)
    );
  };

  const handleCloseEducation = () => setOpenEducation(false);

  // Experience
  const [openExperience, setOpenExperience] = React.useState(false);
  const handleOpenExperience = () => {
    return (
      setOpenEducation(false),
      setOpenExperience(true),
      setOpenLanguages(false),
      setOpenSkills(false)
    );
  };

  const handleCloseExperience = () => setOpenExperience(false);

  // Skills
  const [openSkills, setOpenSkills] = React.useState(false);
  const handleOpenSkills = () => {
    return (
      setOpenEducation(false),
      setOpenExperience(false),
      setOpenLanguages(false),
      setOpenSkills(true)
    );
  };
  const handleCloseSkills = () => setOpenSkills(false);

  //Languages
  const [openLanguages, setOpenLanguages] = React.useState(false);
  const handleOpenLanguages = () => {
    return (
      setOpenEducation(false),
      setOpenExperience(false),
      setOpenLanguages(true),
      setOpenSkills(false)
    );
  };
  const handleCloseLanguages = () => setOpenLanguages(false);

  //   Value start date experience
  const [valueStartDateExp, setValueStartDateExp] = React.useState(new Date());

  //Value end date experience
  const [valueEndDateExp, setValueEndDateExp] = React.useState(new Date());

  //   Value start date education
  const [valueStartDateEdu, setValueStartDateEdu] = React.useState(new Date());

  //Value end date education
  const [valueEndDateEdu, setValueEndDateEdu] = React.useState(new Date());

  // jon position

  const [position, setPosition] = React.useState("");

  const handlePosition = (event) => {
    setPosition(event.target.value);
  };

  //company
  const [company, setCompany] = React.useState("");

  const handleCompany = (event) => {
    setCompany(event.target.value);
  };
  // fetch cv from backend when you first login
  const [CV, setCV] = React.useState([]);

  const fetchUserCV = async () => {
    const response = await fetch(
      process.env.REACT_APP_SERVER_URL + `/developers/${currentUserId}/cv`
    );
    const parsedRes = await response.json();
    try {
      if (response.ok) {
        console.log("Server response", parsedRes);
        setCV(parsedRes);
      } else {
        throw new Error(parsedRes.message);
      }
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    fetchUserCV();
  }, [currentUserId]);

  const submitExperience = async (event) => {
    event.preventDefault();

    const newExperience = {
      company: company,
      position: position,
      startDate: valueStartDateExp,
      endDate: valueEndDateExp,
    };
    console.log(CV, "cv");
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

  const handleJobs = () => {
    const [companyTitle, setCompanyTitle] = React.useState("");
    const [companyEmail, setCompanyEmail] = React.useState("");
    const [position, setPosition] = React.useState("");
    const [jobDescription, setJobDescription] = React.useState("");
    const [remoteWork, setRemoteWork] = React.useState("");
    const [jobList, setJobList] = React.useState([]);

    const fetchJobs = async () => {
      event.preventDefault()

      const newJobList = {
        companyTitle: companyTitle,
        companyEmail: companyEmail,
        position: position,
        jobDescription: jobDescription,
        remoteWork: remoteWork,
      };
      const settings = {
        method: "GET",
        body: JSON.stringify(newJoblist),
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetch(
        process.env.REACT_APP_SERVER_URL + `/jobs`,
        settings
      );
      const parsedRes = await response.json();

      try {
        if (response.ok) {
          setCompanyTitle("");
          setCompanyEmail("");
          setPosition("");
          setJobDescription("");
          setJobList([]);
        } else {
          throw new Error(parsedRes.message);
        }
      } catch (err) {
        alert(err.message);
      }
    };

    useEffect(() => {
      fetchJobs();
    }, []);
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
                User Developer
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Full Stack Developer
              </Typography>
            </CardContent>
          </Card>

          {/* right card */}
          <Card sx={{ width: "100%" }}>
            <CardContent>
              <Typography variant="h4">hello I am a Developer</Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>

      {/* bigger screens */}
      <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
        <Box sx={{ display: "flex", justifyContent: "space-around", mt: 3 }}>
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
                User Developer
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Full Stack Developer
              </Typography>
            </CardContent>
          </Card>

          {/* right card */}
          <Card sx={{ width: "70%" }}>
            <CardContent sx={{ height: "20px" }}>
              <Typography variant="h4">hello I am a Developer</Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
      {/* ########## CV ########## */}

      <Box sx={{ width: "80%", margin: "auto", marginTop: "2%" }}>
        <Card sx={{ marginBottom: "2%", border: "0.5px solid #EEA47FFF" }}>
          <CardContent
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography variant="h5">Work Experience</Typography>
            <div>
              <Button
                variant="outlined"
                sx={{
                  width: "100px",
                  marginTop: "4%",
                  color: (theme) => theme.palette.secondary.main,
                }}
                onClick={handleOpenExperience}
              >
                Edit...
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
                        </Select>
                      </FormControl>
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
                          width: "150px",
                          marginTop: "4%",
                          color: (theme) => theme.palette.secondary.main,
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
        </Card>

        {/* second card */}
        <Card sx={{ marginBottom: "2%", border: "1.5px solid #234E70" }}>
          <CardContent
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography variant="h5">Education</Typography>
            <div>
              <Button
                variant="outlined"
                sx={{
                  width: "100px",
                  marginTop: "4%",
                  color: (theme) => theme.palette.secondary.main,
                }}
                onClick={handleOpenEducation}
              >
                Edit...
                <EditOutlinedIcon />
              </Button>
              <Modal
                open={openEducation}
                onClose={handleCloseEducation}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style} component="form">
                  <TextField
                    sx={{ marginBottom: "15%" }}
                    required
                    id="universitySchool"
                    label="University / School"
                    variant="standard"
                  />
                  <TextField
                    sx={{ paddingBottom: "15%" }}
                    required
                    id="studies "
                    label="Studies "
                    variant="standard"
                  />
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                      required
                      sx={{ marginBottom: "15%" }}
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
                    <DesktopDatePicker
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

                  <Button
                    variant="outlined"
                    sx={{
                      width: "150px",
                      marginTop: "4%",
                      color: (theme) => theme.palette.secondary.main,
                    }}
                  >
                    Add
                  </Button>
                </Box>
              </Modal>
            </div>
          </CardContent>
        </Card>

        {/* third card */}
        <Card sx={{ marginBottom: "2%", border: "0.5px solid" }}>
          <CardContent
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography variant="h5">Skills</Typography>
            <div>
              <Button
                variant="outlined"
                sx={{
                  width: "100px",
                  marginTop: "4%",
                  color: (theme) => theme.palette.secondary.main,
                }}
                onClick={handleOpenSkills}
              >
                Edit...
                <EditOutlinedIcon />
              </Button>
              <Modal
                open={openSkills}
                onClose={handleCloseSkills}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style} component="form">
                  <TextField
                    sx={{ marginBottom: "15%" }}
                    required
                    id="skills"
                    label="Skills"
                    variant="standard"
                  />
                  <Button
                    variant="outlined"
                    sx={{
                      width: "150px",
                      marginTop: "4%",
                      color: (theme) => theme.palette.secondary.main,
                    }}
                  >
                    Add
                  </Button>
                </Box>
              </Modal>
            </div>
          </CardContent>
        </Card>

        {/* fourth card */}
        <Card sx={{ marginBottom: "2%", border: "0.5px solid" }}>
          <CardContent
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography variant="h5">Languages</Typography>
            <div>
              <Button
                variant="outlined"
                sx={{
                  width: "100px",
                  marginTop: "4%",
                  color: (theme) => theme.palette.secondary.main,
                }}
                onClick={handleOpenLanguages}
              >
                Edit...
                <EditOutlinedIcon />
              </Button>
              <Modal
                open={openLanguages}
                onClose={handleCloseLanguages}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style4} component="form">
                  <TextField
                    sx={{ marginBottom: "15%" }}
                    required
                    id="languages"
                    label="Languages"
                    variant="standard"
                  />

                  <Button
                    variant="outlined"
                    sx={{
                      width: "150px",
                      marginTop: "4%",
                      color: (theme) => theme.palette.secondary.main,
                    }}
                  >
                    Add
                  </Button>
                </Box>
              </Modal>
            </div>
          </CardContent>
        </Card>
      </Box>
      <Box>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            mb: 2,
            width: "80%",
            display: "block",
            ml: "auto",
            mr: "auto",
          }}
          onClick={handleJobs}
        >
          Search Jobs
        </Button>
      </Box>
    </>
  );
};
