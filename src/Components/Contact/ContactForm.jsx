import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import Swal from "sweetalert2";
import Captcha from "./Captcha";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const { control,register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      contact: "+1" // Set initial value for the contact field
    }
  });

  const onSubmit = (data) => {
    console.log("data", data);
    if (data) {
      Swal.fire({
        title: "Thanks for Contacting Us!",
        text: "We will get back to you! Soon☺️☺️",
        icon: "success"
      });
    } else {
      Swal.fire({
        title: "Server Issue ! ",
        text: "You clicked the button!",
        icon: "error"
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
                message: "Invalid email address"
              }
            })}
            error={!!errors.email}
            helperText={errors.email && errors.email.message}
          />

          <Controller
            control={control}
            name="contact"
            defaultValue=""
            rules={{
              required: "Contact number is required",
              pattern: {
                value: /^\d{10}$/,
                message: "Invalid phone number"
              }
            }}
            render={({ field }) => (
              <PhoneInput
               country='us'
              
               countryCodeEditable={false}
                inputProps={{
                  name: field.name,
                  onBlur: field.onBlur,
                  value: field.value,
                  onChange: (value) => field.onChange(value)
                }}
                placeholder="Please enter your contact number"
             
              />
            )}
          />
          {errors.contact && (
            <span style={{ color: "red" }}>{errors.contact.message}</span>
          )}

          <TextField
            type="text"
            multiline
            rows={4}
            label="Message"
            placeholder="Describe Your Purpose"
            fullWidth
            size="small"
            sx={{ marginBottom: 2, marginTop: 2 }}
            spellCheck="true"
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ borderRadius: "10px", background: "#A99767" }}
            disabled={submitted}
          >
            {submitted ? "Submitted" : "Submit"}
          </Button>
        </form>
        <Captcha onClick={(e) => setSubmitted(e.target.autofocus)} />
      </Box>
    </>
  );
};

export default ContactForm;
