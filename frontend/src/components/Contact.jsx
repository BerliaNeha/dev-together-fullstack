// import React from "react";
// import { useForm, ValidationError } from "@formspree/react";
// // import emailjs from '@emailjs/browser';
// import { useState } from "react";

// export default function ContactForm(props) {
// const [state, handleSubmit] = useForm("xoqybgnb");

// //const [message, setMessage] = useState(false);

// // const updateMessage = (e) => {
// // e.preventDefault();
// // props.handleContactVisibility();
// // submit();

// // };

// if (state.succeeded) {
// return <span>Thanks, I'll reply ASAP :) </span>;
// }
// return (
// <>
// <p>Alternatively, you can also drop-in a mail here!</p>

// <h2>Contact</h2>

// <form onSubmit={handleSubmit}>
// <input id="name" type="text" name="name" placeholder="Name" />
// <ValidationError prefix="Name" field="name" errors={state.errors} />
// <input id="email" type="email" name="email" placeholder="Email" />
// <ValidationError prefix="Email" field="email" errors={state.errors} />
// <textarea id="message" name="message" placeholder="MESSAGE"></textarea>
// <ValidationError prefix="Email" field="email" errors={state.errors} />

// <button type="submit" disabled={state.submitting}>
// Send
// </button>
// </form>
// </>

// );
// }

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@mui/material";
import { Container } from "@mui/system";
import ContactUs from "../assets/contactUs.jpg";
export default function BasicTextFields() {
  const [state, handleSubmit] = useForm("xoqybgnb");
  if (state.succeeded) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "65%",
          backgroundImage: `url(${ContactUs})`,
          opacity: "0.6",
        }}
      >
        <span>Thanks, I'll reply ASAP :) </span>
      </Box>
    );
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "65%",
        backgroundImage: `url(${ContactUs})`,
        opacity: "0.7",
      }}
    >
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "150%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          opacity: 1,
          fontWeight:"bold"
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
          InputLabelProps={{style: {fontWeight: "bold", color:"black",fontSize:25,marginLeft:12}}}
          inputProps={{style: {fontWeight: "bold", color:"black", fontSize:20,marginLeft:12}}}
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />

        <TextField
          label="Email"
          variant="standard"
          id="email"
          type="email"
          name="email"
          placeholder="email"
          InputLabelProps={{style: {fontWeight: "bold", color:"black",fontSize:25, marginLeft:12}}}
          inputProps={{style: {fontWeight: "bold", color:"black", fontSize:20,marginLeft:12}}}
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
          InputLabelProps={{style: {fontWeight: "bold", color:"black",fontSize:25}}}
          inputProps={{style: {fontWeight: "bold", color:"black", fontSize:20}}}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <Button type="submit" disabled={state.submitting} variant="contained" size="medium">
          apply
        </Button>
      </Box>
    </Box>
  );
}

// import React, { Component } from "react";
// import axios from "axios";
//  import TextField from "@mui/material/TextField";

// export default class Contact extends Component {
//   state = {
//     name: "",
//     message: "",
//     email: "",
//     subject: "",
//     sent: false,
//     buttonText: "Send Message",
//     emailError: false,
//   };
//   resetForm = () => {
//     this.setState({
//       name: "",
//       message: "",
//       email: "",
//       subject: "",
//       buttonText: "Message Sent",
//     });

//     setTimeout(() => {
//       this.setState({ sent: false });
//     }, 3000);
//   };

//   handleChangeEmail(e) {
//     if (
//       !e.target.value.match(
//         /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//       )
//     ) {
//       this.setState({
//         email: e.target.value,
//       });
//       this.setState({ emailError: true });

//       if (this.state.email === "") {
//         // check if the input is empty
//         this.setState({ emailError: false });
//       }
//     } else {
//       this.setState({ email: e.target.value, emailError: false });
//     }
//   }

//   formSubmit = async (e) => {
//     e.preventDefault();
//     this.setState({
//       buttonText: "...sending",
//     });

//     let data = {
//       name: this.state.name,
//       email: this.state.email,
//       message: this.state.message,
//       subject: this.state.subject,
//     };

//     try {
//       await axios.post("BACKEND_URL", data);
//       this.setState({ sent: true }, this.resetForm());
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   render() {
//     return (
//         <form className="contact-form" onSubmit={(e) => this.formSubmit(e)}>
//         <TextField
//           id="standard-multiline-flexible"
//           label="Message"
//           placeholder="Enter Message"
//           variant="outlined"
//           multiline
//           rowsMax={4}
//           value={this.state.message}
//           onChange={(e) => this.setState({ message: e.target.value })}
//           required
//           type="text"
//         />
//         <br />
//         <br />
//         <br />

//         <TextField
//           id="outlined-basic"
//           placeholder="Enter your name"
//           label="Name"
//           variant="outlined"
//           value={this.state.name}
//           onChange={(e) => this.setState({ name: e.target.value })}
//           required
//           type="text"
//         />
//         <br />
//         <br />
//         <br />

//         <TextField
//           id="outlined-basic"
//           label="Email"
//           placeholder="Enter email address"
//           variant="outlined"
//           value={this.state.email}
//           onChange={(e) => this.handleChangeEmail(e)}
//           error={this.state.emailError}
//           required
//           type="email"
//         />
//         <br />
//         <br />
//         <br />
//         <TextField
//           id="outlined-basic"
//           placeholder="Enter Subject"
//           label="Subject"
//           variant="outlined"
//           value={this.state.subject}
//           onChange={(e) => this.setState({ subject: e.target.value })}
//           required
//         />
//         <br />
//         <br />
//         <br />
//         <div className="button--container">
//           <button type="submit" className="button button-primary">
//             {this.state.buttonText}
//           </button>
//         </div>
//       </form>
//     );
//   }
// }
