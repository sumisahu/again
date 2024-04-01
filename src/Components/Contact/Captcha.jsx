import { Refresh } from "@mui/icons-material";
import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";

const Captcha = (props) => {
  const randomString = Math.random().toString(36).slice(8);
  const [captcha, setCaptcha] = useState(randomString);
  const [text, setText] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [valid, setValid] = useState(false);

  const refreshString = () => {
    setCaptcha(Math.random().toString(36).slice(8));
  };

  const matchCaptch = (event) => {
    event.preventDefault();
    if (text === captcha) {
      setValid(false);
      Swal.fire({
        title: "Captcha Verified !",
        text: "Now You can Submit You details !",
        icon: "success",
      });
      props.onClick(event);
      setDisabled(true);
    } else {
      setValid(true);
    }
  };

  return (
    <>
      <Box sx={{ width: "50%" }}>
        <Box sx={{ marginTop: "20px" }}>
          <s>{captcha}</s>
        </Box>
        <Button
          startIcon={<Refresh />}
          onClick={() => refreshString()}
        ></Button>

        <form onSubmit={matchCaptch}>
          <TextField
            placeholder="Enter Captcha"
            size="small"
            error={valid}
            helperText={valid && "Invlaid Captcha"}
            onChange={(e) => setText(e.target.value)}
            sx={{ margin: "10px" }}
            required
          />

          <Button
            variant="contained"
            color="success"
            type="submit"
            disabled={disabled}
          >
            Submit
          </Button>
        </form>
      </Box>
    </>
  );
};

export default Captcha;
