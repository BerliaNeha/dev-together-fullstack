import React, { useContext, useEffect } from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { Homepage } from "./views/Homepage.js";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Login } from "./views/Login.js";
import { Box, Button, Modal, Typography } from "@mui/material";
import { RegisterEmployer } from "./views/RegisterEmployer.js";
import { RegisterDeveloper } from "./views/RegisterDeveloper.js";
import Contact from "./components/Contact.jsx";
import { AboutUs } from "./views/AboutUs.js";
import { Developers } from "./views/Developers.js";
import { Employers } from "./views/Employers.js";
import { DevCommunity } from "./views/DevCommunity.js";
import ContainerMyContext from "./components/Context/ContainerMyContext.jsx";
import { MyContext } from "./components/Context/context.js";



const theme = createTheme({
  palette: {
    primary: {
      main: "#7b9acc",
    },

    // 294B61
    secondary: {
      main: "#FCF6F5",
    },
  },
});

const App = () => {

  
  // const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  // const [currentUserId, setCurrentUserId] = React.useState("");
  // const [isDev, setIsDev] = React.useState(true);

  // const [checkingStorage, setCheckingStorage] = React.useState(true);
  // const LoginHandler = () => {
  //   const {
  //     setIsLoggedIn,
  //     setCurrentUserId,
  //     setIsDev,
  //     isLoggedIn,
  //     currentUserId,
  //     isDev,
  //   } = useContext(MyContext);
  //   const navigate = useNavigate();
  //   React.useEffect(() => {
  //     (() => {
  //       const id = window.localStorage.getItem("currentUserId");
  //       const isDev = window.localStorage.getItem("isDev");
  //       if (id !== null) {
  //         setIsLoggedIn(true);
  //         setCurrentUserId(id);
  //         setIsDev(isDev);
  //         setCheckingStorage(false);
  //         isDev === "true" ? navigate("/developers") : navigate("/employers");
  //       }
  //     })();
  //   }, []);

  //   return null;
  // };

  return (

    <React.StrictMode>
      <ContainerMyContext>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <Router>
            {/* <LoginHandler /> */}
            
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

                <Route path="/contact" element={<Contact />} />
              </Routes>           
          </Router>

        </ThemeProvider>
      </ContainerMyContext>
    </React.StrictMode>
  );
};

export default App;
