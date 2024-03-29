import ImageSlider from "../OurFirm/MeetTheTeam/ImageSlider";
import image1 from "../../assets/img/contact.jpg";
import { Grid } from "@mui/material";
import ContactDetails from "./ContactDetails";
import MapAndForm from "./MapAndForm";

const slidersImage = { image: image1, title: "Contact Us" };

const Contact = () => {
  return (
    <>
      <ImageSlider image={slidersImage} />
      <Grid container spacing={4} sx={{ marginTop: "5%" }}>
        <Grid item xs={12} md={6}>
          <ContactDetails />
        </Grid>
        <Grid item xs={12} md={6}>
          <MapAndForm />
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
