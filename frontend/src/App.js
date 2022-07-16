import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Homepage } from "./views/Homepage.js";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import CssBaseline from "@mui/material/CssBaseline";
import { Login } from "./views/Login.js";
import { Box } from "@mui/material";
import { RegisterEmployer } from "./views/RegisterEmployer.js";

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
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Box height="100vh">
            <Navbar />

            <Routes>
              <Route path="/" exact element={<Homepage />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/register-employer" element={<RegisterEmployer />} />
            </Routes>
            <Footer />
          </Box>
        </Router>
      </ThemeProvider>
    </React.StrictMode>
  );
};

// import React, { useEffect, useState } from "react";
// import Register from "./views/Register";
// import Login from "./views/Login";
// import Albums from "./views/Albums";
// import "./App.css";

// const App = () => {

//     const [ isLoggedIn, setIsLoggedIn ] = useState(false);
//     const [ currentUserId, setCurrentUserId ] = useState("");
//     const [ showLogin, setShowLogin ] = useState(true);
//     const [token, setToken] = useState(false);

//     useEffect(()=>{
//         const data = JSON.parse(localStorage.getItem("data"));
//         if (data && data.token && data.id && data.expiry){

//             const tokenExpiry = new Date(data.expiry);
//             const now = new Date()

//             if(tokenExpiry > now){
//                 login(data.token, data.id);
//             }else{
//                 logout()
//             }

//             login(data.token, data.id)
//         }else{
//             logout();
//         }

//     }, [])

//     const login =(token, id)=>{
//         setToken(token);
//         setCurrentUserId(id);
//         setIsLoggedIn(true)
//     }

//     const logout = () => {
//         localStorage.removeItem("data")
//         setToken(false);
//         setCurrentUserId("");
//         setIsLoggedIn(false);
//         setShowLogin(true);

//     }

//     const deregister = async ()=>{
//         //event.preventDefault();

//         const settings = {
//             method: "DELETE",
//             headers: {
//                 "Authorization": "Bearer " + token
//               },
//             }

//             const response = await fetch(process.env.REACT_APP_SERVER_URL +`/users/${currentUserId}`, settings);
//             const parsedRes = await response.json();

//             try{
//                 if(response.ok){
//                     alert(parsedRes.message);
//                     setIsLoggedIn(false);
//                     setShowLogin(true);
//                     setCurrentUserId("");

//                 }else{
//                     throw new Error(parsedRes.message)
//                 }

//             } catch (err){
//                 alert(err.message)
//             }

//         }

//     if (!isLoggedIn) {

//         if (showLogin) {
//             return <Login setShowLogin={setShowLogin} login={login} />

//         } else {
//             return <Register setShowLogin={setShowLogin} //setIsLoggedIn={setIsLoggedIn} setCurrentUserId={setCurrentUserId} setToken={setToken}
//             login={login}/>
//         }

//     } else {
//         return <Albums currentUserId={currentUserId} token={token} logout={logout} deregister={deregister}/>
//     }
// }

export default App;
