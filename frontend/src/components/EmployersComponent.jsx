import React, { useEffect, useState } from "react";

import { Navbar } from "./Navbar";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";

import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { MyContext } from "../components/Context/context.js";


export const EmployersComponent = () => {
    const {  currentUserId} = React.useContext(MyContext);

  const [username, setUsername] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  useEffect(() => {
    const fetchUserData = async () => {
        
        const settings = {
            method: "GET",
            body: JSON.stringify(),
            headers: {
                "Content-Type": "application/json"
            }
        }
        
        const response = await fetch(process.env.REACT_APP_SERVER_URL + `/employers/${currentUserId}`, settings);

        const parsedRes = await response.json();

        try {
            // If the request was successful...
            if (response.ok) {
                console.log("Server response", parsedRes);
                setUsername(parsedRes.username);
                
                // If the request was unsuccessful...
            } else {
                throw new Error(parsedRes.message);
            }
        } catch (err) {
            alert(err.message);
        }
    }

    fetchUserData();
}, [currentUserId])

  return (
    <>
      <Navbar />
      <Box sx={{ width: "100%" }}>
        <Stack spacing={2}>
          <Item>
            <h2 id="greeting">Welcome {username}!</h2>
          </Item>
          <Item>
            <div>
              <Button onClick={handleToggle}>SUBMIT JOB</Button>
              <Backdrop
                sx={{
                  color: "#fff",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={open}
                onClick={handleClose}
              >
                <CircularProgress color="inherit" />
              </Backdrop>
            </div>
          </Item>
          <Item>Item 3</Item>
        </Stack>
      </Box>
      );
      <div>Hello employer</div>
      <div>Add job</div>
    </>
  );
};
