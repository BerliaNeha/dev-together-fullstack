import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Homepage } from "./views/Homepage.js";

import Footer from "./components/Footer.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import CssBaseline from "@mui/material/CssBaseline";
import { Login } from "./views/Login.js";
import { Box } from "@mui/material";
import { RegisterEmployer } from "./views/RegisterEmployer.js";
import { RegisterDeveloper } from "./views/RegisterDeveloper.js";
import Contact from "./components/Contact.jsx";
import { AboutUs } from "./views/AboutUs.js";
import { Developers } from "./views/Developers.js";
import { Employers } from "./views/Employers.js";
import Container from "./components/Context/Container.jsx";
import { DevCommunity } from "./views/DevCommunity.js";

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
  // const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  // const [currentUserId, setCurrentUserId] = React.useState("");
  // const [isDev, setIsDev] = React.useState(true);

  return (
    <React.StrictMode>
      <Container>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <Box height="100vh">
              <Routes>
                <Route path="/" exact element={<Homepage />} />
                <Route path="/developers" element={<Developers />} />
                <Route path="/employers" element={<Employers />} />
                <Route path="/dev-community" element={<DevCommunity />} />

                <Route
                  path="/register-employer"
                  element={<RegisterEmployer />}
                />
                <Route
                  path="/register-developer"
                  element={<RegisterDeveloper />}
                />
                <Route path="/login" element={<Login />} />

                <Route path="/about-us" element={<AboutUs />} />

                <Route
                  path="/register-employer"
                  element={<RegisterEmployer />}
                />

                <Route path="/contact" element={<Contact />} />
              </Routes>
       
            </Box>
          </Router>
        </ThemeProvider>
      </Container>
    </React.StrictMode>
  );
};

export default App;
