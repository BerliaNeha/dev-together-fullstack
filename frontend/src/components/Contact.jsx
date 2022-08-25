import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm, ValidationError } from "@formspree/react";
import { Button, Typography } from "@mui/material";

import ContactUs from "../assets/contactUs.jpg";
import { Navbar } from "./Navbar";
import Footer from "./Footer";


export default function BasicTextFields() {
  const [state, handleSubmit] = useForm("xoqybgnb");
  if (state.succeeded) {
    return (
      <>
      <Navbar/>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundImage: `url(${ContactUs})`,
          opacity: "0.7",
        }}
      >
        <Typography variant="h5">Thank you for your message! We'll reply soon!</Typography>
      </Box>
      <Footer/>
      </>)
  }
  return (
    <>
    <Navbar/>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url(${ContactUs})`,
        opacity: "0.7",
      }}
    >
      <Box
        component="form"
        sx={{
          boxShadow: "1px 1px 25px 4px #000000",
          borderRadius: 5,
          // "& > :not(style)": { m: 1, width: "150%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          opacity: 1,
          fontWeight: "bold",
          minWidth: "40%",
          margin: "auto",
          minHeight: "50vh",
          //backgroundColor:"rgba(239,242,240,0.86)"
          // backgroundColor: "rgba(84, 120, 128, 0.31)",
          backgroundColor: "rgba(35, 78, 112, 0.31)",

        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          label="Name"
          variant="standard"
          id="name"
          type="text"
          name="name"
          placeholder="name"
          sx={{ width: "80%" }}
          InputLabelProps={{
            style: {
              fontWeight: "bold",
              color: "black",
              fontSize: 25,
              marginLeft: 12,
            },
          }}
          inputProps={{
            style: {
              fontWeight: "bold",
              color: "black",
              fontSize: 20,
              marginLeft: 12,
            },
          }}
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />

        <TextField
          label="Email"
          variant="standard"
          id="email"
          type="email"
          name="email"
          placeholder="email"
          sx={{ width: "80%" }}
          InputLabelProps={{
            style: {
              fontWeight: "bold",
              color: "black",
              fontSize: 25,
              marginLeft: 12,
            },
          }}
          inputProps={{
            style: {
              fontWeight: "bold",
              color: "black",
              fontSize: 20,
              marginLeft: 12,
            },
          }}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <TextField
          id="standard-multiline-static"
          label="Message"
          multiline
          rows={10}
          col={10}
          variant="outlined"
          fullWidth
          sx={{ width: "80%", marginTop: 2 }}
          InputLabelProps={{
            style: { fontWeight: "bold", color: "black", fontSize: 25 },
          }}
          inputProps={{
            style: { fontWeight: "bold", color: "black", fontSize: 20 },
          }}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <Button
          type="submit"
          disabled={state.submitting}
          variant="contained"
          size="medium"
          sx={{ marginTop: 3 }}
        >
          apply
        </Button>
      </Box>
    </Box>
    <Footer/>
    </>
  );
}
