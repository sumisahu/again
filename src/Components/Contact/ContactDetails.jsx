import { Email, Phone } from "@mui/icons-material";
import { Box, Container, IconButton, Typography } from "@mui/material";

const ContactDetails = () => {
  return (
    <>
      <Box sx={{ background: "#efeae4", borderRadius: "10% 0px 10% 10%" }}>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            alignItems: "left",
            justifyContent: "center",
            height: { xs: "400px", sm: "550px", md: "700px" },
            flexDirection: "column",
          }}
        >
          <Typography
            gutterBottom
            variant="body1"
            sx={{
              fontSize: { xs: "15px", sm: "20px", md: "25px" },
              fontFamily: "lato",
              color: "#0D3D5F",
            }}
          >
            Contact us for free initial consultation to learn if we are a good
            match for you
          </Typography>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            Location
          </Typography>
          <Typography gutterBottom sx={{ width: "35%" }}>
            1901 First Avenue, Suite 213 San Diego, CA 92101
          </Typography>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            Contact
          </Typography>
          <Box sx={{ display: "flex", marginBottom: "10px" }}>
            <Phone />
            &nbsp;<Typography>(619) 535-0072</Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Email />
            &nbsp;<Typography> Info@AltaPrivateWealth.com</Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ContactDetails;
