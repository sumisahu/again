import React from "react";
import { Box, Container, Typography } from "@mui/material";
import ContactForm from "./ContactForm";

const MapAndForm = () => {
  return (
    <>
      <Box sx={{ position: "relative", paddingTop: "56.25%" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d51034.06901297979!2d-117.07406600000002!3d32.74809!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d954b03c77b93b%3A0xd84be56eb057847d!2s1901%201st%20Ave.%20%23213%2C%20San%20Diego%2C%20CA%2092101!5e1!3m2!1sen!2sus!4v1711042681403!5m2!1sen!2sus"
          width="90%"
          height="80%"
          style={{ border: 0, position: "absolute", top: 0, left: 0, right: 5 }}
          loading="lazy"
          allowFullScreen
          title="Google Maps"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
      <Container maxWidth="lg">
        <Typography variant="body1" gutterBottom sx={{ fontWeight: "bold" }}>
          If you have any questions or are interested in becoming an Alta
          Private Wealth client, please do not hesitate to get in touch
        </Typography>
        <ContactForm />
      </Container>
    </>
  );
};

export default MapAndForm;
