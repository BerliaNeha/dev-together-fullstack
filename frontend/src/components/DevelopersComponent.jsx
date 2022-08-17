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
  });

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
console.log("hello")
  useEffect(() => {
    fetchUserCV();
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
    // fetch the new job added by teh employer
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

  console.log(CV, "cvcvcvcv");
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
        {/* first CARD EXPERIENCE */}
        <Box sx={{ marginBottom: "2%", borderBottom:1, borderLeft:1 }}>
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
                  {/* right card */}
                  <Card sx={{ width: "90%",border: "0.5px solid #EEA47FFF", p:2 }}>
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
                          <Typography variant="h5">{position}</Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="h6" sx={{ fontWeight: "light" }}>
                            {company}
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
                      <Grid
                        container
                        md={6}
                        direction="row"
                        justifyContent="flex-end"
                        alignItems="flex-start"
                      >
                        <Grid item>
                          <Typography variant="h6">
                            {startDate.substring(5, 7)}{" "}
                            {startDate.substring(0, 4)}{" "}
                          </Typography>
                        </Grid>
                        &nbsp; &nbsp;
                        <Grid item>
                          <Typography variant="h6">
                            {endDate.substring(5, 7)} {endDate.substring(0, 4)}{" "}
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
        {/* second CARD EDUCATION */}
        <Box
          sx={{ marginBottom: "1%", mt: "1%", borderBottom: 1, borderLeft:1 }}
        >
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
                <Box sx={style}>
                  <Grid
                    container
                    direction="column"
                    justifyContent="space-evenly"
                  >
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
                          value={valueStartDateEdu}
                          onChange={(newValue) => {
                            setValueStartDateEdu(newValue);
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
                          value={valueEndDateEdu}
                          onChange={(newValue) => {
                            setValueEndDateEdu(newValue);
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
                  <Card sx={{ width: "90%", border: "0.5px solid #EEA47FFF", p:2 }}>
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
                            {startDate.substring(5, 7)}{" "}
                            {startDate.substring(0, 4)}{" "}
                          </Typography>
                        </Grid>
                        &nbsp; &nbsp;
                        <Grid item>
                          <Typography variant="h6">
                            {endDate.substring(5, 7)} {endDate.substring(0, 4)}
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
        <Box sx={{ marginBottom: "1%", mt: "1%", borderBottom:1, borderLeft:1 }}>
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
                <Box sx={style}>
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
                      color: (theme) => theme.palette.secondary.main,
                    }}
                    onClick={submitSkills}
                  >
                    Add
                  </Button>
                </Box>
              </Modal>
            </div>
          </CardContent>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent:"flex-start" }}>
          {CV.skills.map((item) => {
            return (
              <>
                <Card sx={{ width: "10%", mr:2, mt:2, mb:2, border: "0.5px solid #EEA47FFF"}}>
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
        <Box sx={{ marginBottom: "1%", borderBottom: 1, borderLeft:1 }}>
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
                <Box sx={style}>
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
                      color: (theme) => theme.palette.secondary.main,
                    }}
                    onClick={submitLanguages}
                  >
                    Add
                  </Button>
                </Box>
              </Modal>
            </div>
          </CardContent>
        </Box>

        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent:"flex-start" }}>
          {CV.languages.map((item) => {
            return (
              <>
                <Card sx={{ width: "10%", mr:2, mt:2, mb:2, border: "0.5px solid #EEA47FFF"}}>
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
    </>
  );
};
