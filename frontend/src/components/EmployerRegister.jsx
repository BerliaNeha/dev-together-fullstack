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
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FormControl, FormLabel, Radio, RadioGroup } from "@mui/material";

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

export const EmployerRegister = ({ isLoggedIn }) => {
  let navigate = useNavigate();

  const [shouldSubscribe, setShouldSubscribe] = React.useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newUserEmployer = {
      username: data.get("username"),
      email: data.get("email"),
      password: data.get("password"),
      phoneNumber: data.get("phoneNumber"),
      companyName: data.get("companyName"),
      companyWebsite: data.get("companyWebsite"),
      hiringNumberRadioButton: hiringNumber,
      hiringRemoteDeveloperCheckbox: remoteWork,
      subscribeCheckbox: shouldSubscribe,
      policyAndTermsCheckbox: true,
    };

    const settings = {
      method: "POST",
      body: JSON.stringify(newUserEmployer),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(
      process.env.REACT_APP_SERVER_URL + "/register-employer",
      settings
    );

    const parsedRes = await response.json();

    try {
      if (response.ok) {
        navigate(`/employer`);
      } else {
        throw new Error(parsedRes.message);
      }
    } catch (err) {
      alert(err.message);
    }
  };

  const [hiringNumber, setHiringNumber] = React.useState("1-5");

  const handleHiringNumber = (event) => {
    setHiringNumber(event.target.value);
  };

  const [remoteWork, setRemoteWork] = React.useState("yes");

  const handleRemoteWork = (event) => {
    setRemoteWork(event.target.value);
  };

  return isLoggedIn ? (
    <Navigate to="/login" />
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
          Join as a Company
        </Typography>
        <Box component="form" validate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={6}>
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
            <Grid item xs={6} sm={6}>
              <TextField
                required
                fullWidth
                id="companyName"
                label="Company Name"
                name="companyName"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                fullWidth
                id="companyWebsite"
                label="Company Website"
                name="companyWebsite"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="phoneNumber"
                label="Phone number"
                name="phoneNumber"
                autoComplete="phoneNumber"
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
            <Grid item xs={6}>
              <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">
                  Hiring number
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={hiringNumber}
                  onChange={handleHiringNumber}
                >
                  <FormControlLabel
                    value="1-5"
                    control={<Radio />}
                    label="1-5"
                  />
                  <FormControlLabel
                    value="5-10"
                    control={<Radio />}
                    label="5-10"
                  />
                  <FormControlLabel
                    value="10+"
                    control={<Radio />}
                    label="10+"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

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
                  <FormControlLabel value="no" control={<Radio />} label="No" />
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
