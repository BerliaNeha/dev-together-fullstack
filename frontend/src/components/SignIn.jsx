import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import { MyContext } from "./Context/context";





export const SignIn = () => {
  const { setIsLoggedIn, isLoggedIn, setCurrentUserId, setIsDev, isDev } =
    React.useContext(MyContext);

  let navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const updateData = (event) => {
    switch (event.target.name) {
      case "email":
        setEmail(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
      default:
        break;
    }
  };
  const attemptLogin = async (event) => {
    event.preventDefault();
    const loginData = {
      email: email,
      password: password,
    };

    const settings = {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(
      process.env.REACT_APP_SERVER_URL + "/login",
      settings
    );
    const parsedRes = await response.json();
    // console.log(parsedRes.companyName.length)
    try {
      
      // If the request was successful and has a company name in response go to employer page or else to developer page

      if (response.ok) {
       
        setCurrentUserId(parsedRes.id);
        window.localStorage.setItem("currentUserId", parsedRes.id);
        alert("Login successful")

        if (parsedRes.companyName) {
          setIsLoggedIn(true);
          setIsDev(false);
          window.localStorage.setItem("isDev", false);
          navigate("/employers");
         
        }

        if (!parsedRes.companyName) {
          setIsLoggedIn(true);
          setIsDev(true);
          window.localStorage.setItem("isDev", true);
          navigate("/developers");
        }  

      } else {
        throw new Error(parsedRes.message);
      }
    

    } catch (err) {
      console.log(err);
      alert(err.message);
      setEmail("");
      setPassword("");
    }

    
  };

  return (
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
          Sign in
        </Typography>
        <Box component="form" onSubmit={attemptLogin} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={updateData}
            value={email}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={updateData}
            value={password}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
           
             
      
          >
            Sign In
          </Button>
          <div>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </div>
          <div>
            <Link
              onClick={() => navigate(`/register-developer`)}
              cursor="default"
              variant="body2"
            >
              {"Don't have an account? Sign Up as Developer"}
            </Link>
          </div>
          <div>
            <Link
              onClick={() => navigate(`/register-employer`)}
              cursor="default"
              variant="body2"
            >
              {"Don't have an account? Sign Up as Company"}
            </Link>
          </div>
        </Box>
      </Box>
     
    </Container>
  );
};
