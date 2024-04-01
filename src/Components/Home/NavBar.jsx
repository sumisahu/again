import React from "react";
import broker from "../../assets/img/broker.png";
import {
  AppBar,
  Box,
  CssBaseline,
  Toolbar,
  Typography,
  IconButton,
  Hidden,
} from "@mui/material";
import { Email, PhoneEnabled, PeopleAlt } from "@mui/icons-material";
import { Link } from "react-router-dom";

const contactInfo = [
  {
    icon: <Email sx={{ color: "#BB9C60" }} />,
    text: "Info@AltaPrivateWealth.com",
    mail: "mailto:Info@AltaPrivateWealth.com",
  },
  { icon: <PhoneEnabled sx={{ color: "#BB9C60" }} />, text: "(619) 535-0072" },
];

const NavBar =() =>{


  return(

  
  <Hidden mdDown>
    
    <CssBaseline />
    <AppBar
      color="inherit"
      position="relative"
      component="nav"
      sx={{ borderTop: "2px solid #bf9f00" }}
    >
      <Toolbar variant="dense">
        {contactInfo.map((item, index) => (
          <IconButton
            key={index}
            color="inherit"
            aria-label={`menu ${index}`}
            href={item.mail}
          >
            {item.icon}
            <Typography
              variant="body1"
              color="#1A466F"
              fontSize="16px"
              fontFamily="lato"
            >
              {item.text}
            </Typography>
          </IconButton>
        ))}
        <Box sx={{ flexGrow: 1 }} />
        <Box
          sx={{
            maxWidth: "50%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Link to="https://adviserinfo.sec.gov/individual/summary/6568597">
            <img
              src={broker}
              width="90vw"
              height="30px"
              alt="Broker_Check"
              loading="lazy"
            />
          </Link>
          <IconButton
            aria-label="account of current user"
            aria-haspopup="true"
            href="https://app.advizr.com/ConsumerCampaignRegistration/?i=aaa2ffcd-d2f3-42ba-932f-86823165702e&h=eyJhbGciOiJSUzI1NiJ9.eyJpZCI6ImFhYTJmZmNkLWQyZjMtNDJiYS05MzJmLTg2ODIzMTY1NzAyZSIsInR5cGUiOjN9.xE9TQCJmxBxN5foJQSvy8bgG_P12Hf0a5BIwScytFqI"
          >
            <PeopleAlt sx={{ color: "#BB9C60" }} />
            <Typography
              variant="body1"
              fontWeight="bold"
              color="#1A466F"
              fontSize="15px"
              fontFamily="lato, sans-serif"
            >
              Client Login
            </Typography>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  </Hidden>
)};

export default NavBar;
