import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Developer Networking
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export const DeveloperRegister = ({ isLoggedIn }) => {
  let navigate = useNavigate();
  const [jobTitle, setJobTitle] = React.useState("");
  const [shouldSubscribe, setShouldSubscribe] = React.useState(false);



  const handleJobTitle = (event) => {
    setJobTitle(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newUserDeveloper = {
      username: data.get("username"),
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
      jobTitle: jobTitle,
      subscribeCheckbox: shouldSubscribe,
      policyAndTermsCheckbox: true
    };
    console.log(jobTitle)
    console.log(shouldSubscribe)

    const settings = {
      method: 'POST',
      body: JSON.stringify(newUserDeveloper),
      headers: {
        "Content-Type" : "application/json"
      }
    }

    const response = await fetch(
      process.env.REACT_APP_SERVER_URL + "/register-developer",
      settings
    );
    const parsedRes = await response.json();

    try {
      if (response.ok) {
        navigate(`/sign-in`);
      } else {
        throw new Error(parsedRes.message);
      }
    } catch (err) {
      alert(err.message);
    }

  };

  return isLoggedIn ? (
    <Navigate to="/" />
  ) : (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Join as a Developer
        </Typography>
        <Box component="form" validate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="username"
                required
                fullWidth
                id="username"
                label="Username"
                autoFocus
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="first name"
                label="First Name"
                name="First name"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="last name"
                label="Last Name"
                name="Last name"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                variant="standard"
              />
            </Grid>

            <Grid item xs={12}>
              <FormControl sx={{ m: 1, width: "95%" }} required>
                <InputLabel id="jobTitle">Job title</InputLabel>
                <Select
                  labelId="jobTitle"
                  id="jobTitle"
                  value={jobTitle}
                  label="Job Title"
                  onChange={handleJobTitle}
                  
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

            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox color="primary" value={shouldSubscribe} onChange={()=>setShouldSubscribe(!shouldSubscribe)}/>}
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
                label="By signing up you agree to the Terms of Service and the Privacy Policy"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link
                onClick={() => navigate(`/login`)}
                cursor="pointer"
                variant="body2"
              >
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
};
