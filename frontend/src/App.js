import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Homepage } from "./views/Homepage.js";
import { Navbar } from "./components/Navbar.jsx";

import Footer from "./components/Footer.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import CssBaseline from "@mui/material/CssBaseline";
import { Login } from "./views/Login.js";
import { Box } from "@mui/material";
import { RegisterEmployer } from "./views/RegisterEmployer.js";

import { RegisterDeveloper } from "./views/RegisterDeveloper.js";
import ContactForm from "./components/Contact.jsx";
import Contact from "./components/Contact.jsx";
import { AboutUs } from "./views/AboutUs.js";
import { Developers } from "./views/Developers.js";
import { Employers } from "./views/Employers.js";

const theme = createTheme({
  palette: {
    primary: {
      main: "#234E70",
    },

    // 294B61
    secondary: {
      main: "#EEA47FFF",
    },
  },
});

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentUserId, setCurrentUserId] = React.useState("");

  //###############################  DEVELOPERS DATA #####################
  const developers = async () => {
    const settings = {
      method: "GET",
      body: JSON.stringify(),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(
      process.env.REACT_APP_SERVER_URL + `/developers/${currentUserId}`,
      settings
    );
    const parsedRes = await response.json();

    try {
      if (response.ok) {
        console.log(parsedRes);
      } else {
        throw new Error(parsedRes.message);
      }
    } catch (err) {
      alert(err.message);
    }

    
  };

  developers();

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Box height="100vh">
            <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

            <Routes>
              <Route path="/" exact element={<Homepage />} />
              <Route
                path="/developers"
                element={<Developers isLoggedIn={isLoggedIn} />}
              />
              <Route
                path="/employers"
                element={<Employers isLoggedIn={isLoggedIn} />}
              />

              <Route
                path="/register-employer"
                element={<RegisterEmployer isLoggedIn={isLoggedIn} />}
              />
              <Route
                path="/register-developer"
                element={<RegisterDeveloper isLoggedIn={isLoggedIn} />}
              />
              <Route
                path="/login"
                element={
                  <Login
                    setIsLoggedIn={setIsLoggedIn}
                    isLoggedIn={isLoggedIn}
                    setCurrentUserId={setCurrentUserId}
                  />
                }
              />

              <Route path="/about-us" element={<AboutUs />} />

              <Route path="/register-employer" element={<RegisterEmployer />} />
            </Routes>
            <Footer />
          </Box>
        </Router>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
