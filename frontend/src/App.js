import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Homepage } from "./views/Homepage.js";
import {Navbar} from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import CssBaseline from "@mui/material/CssBaseline";
import { Login } from "./views/Login.js";
import { Box } from "@mui/material";
import { RegisterEmployer } from "./views/RegisterEmployer.js";

import { RegisterDeveloper } from "./views/RegisterDeveloper.js";
import ContactForm from "./components/Contact.jsx";
import Contact from "./components/Contact.jsx";


const theme = createTheme({
  palette: {
    primary: {
      main: "#547980",
    },
    secondary: {
      main: "#D9CEBF",
    },
  },
});

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentUserId, setCurrentUserId] = React.useState("");
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Box height="100vh">
            <Navbar />

            <Routes>
              <Route path="/" exact element={<Homepage />} />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="/register-employer"
                element={<RegisterEmployer isLoggedIn={isLoggedIn} />}
              />
              <Route
                path="/register-developer"
                element={<RegisterDeveloper isLoggedIn={isLoggedIn} />}
              />
              <Route path="/Login" element={<Login />} />
              {/* <Route path="/AboutUs" element={<AboutUs />} /> */}
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
