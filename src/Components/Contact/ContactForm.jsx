//contact form

import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Captcha from "./Captcha";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("data", data);
    if (data) {
       Swal.fire({
        title: "Thanks for Contacting Us!",
        text: "We will get back to you ! Soon☺️☺️",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Server Issue ! ",
        text: "You clicked the button!",
        icon: "error",
      });
    }

    reset();
  };

  return (
    <>
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            type="text"
            placeholder="Please enter your name"
            fullWidth
            size="small"
            sx={{ marginBottom: 2 }}
            label="Name"
            spellCheck="true"
            {...register("name", { required: "Name is required" })}
            error={!!errors.name}
            helperText={errors.name && errors.name.message}
          />
          <TextField
            type="text"
            placeholder="Please enter your email"
            fullWidth
            size="small"
            sx={{ marginBottom: 2 }}
            label="Email"
            spellCheck="true"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            error={!!errors.email}
            helperText={errors.email && errors.email.message}
          />
          <PhoneInput
             
          country={"us"}
           inputProps={{required:true}}
          
           
            
          />
          <TextField
            type="text"
            multiline
            rows={4}
            label="Message"
            placeholder="Describe Your Purpose"
            fullWidth
            size="small"
            sx={{ marginBottom: 2 }}
            spellCheck="true"
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ borderRadius: "10px", background: "#A99767" }}
            disabled={submitted}
          >
            {submitted ? "Submited" : "Submit"}
          </Button>
        </form>
        <Captcha onClick={(e) => setSubmitted(e.target.autofocus)} />
      </Box>
    </>
  );
};

export default ContactForm;
