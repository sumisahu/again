import { Box, Container, Hidden, Typography } from "@mui/material";
import imageBack from "../../../assets/img/contact_APW.jpg";
import { useNavigate } from "react-router-dom";
const ScheduleMeeting = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "100%",
        background: `url(${imageBack})`,
        backgroundSize: "cover",
        marginTop: "4%",
        padding: "10px",
        height: { xs: "200px", sm: "300px", md: "400px" },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: "50px",
          }}
        >
          <Typography
            gutterBottom
            variant="body1"
            sx={{
              color: "#002E4F",
              fontSize: { xs: "15px", sm: "20px", md: "35px" },
              fontWeight: 1000,
              fontFamily: "lato",
              letterSpacing: "2px",
            }}
          >
            Unlock Your Financial Potential : Contact Us Today
          </Typography>
          <Hidden mdDown>
            <Typography
              variant="body1"
              sx={{
                fontSize: "20px",
                color: "#fff",
                fontFamily: "lato",
                letterSpacing: "2px",
                fontWeight: "bold",
              }}
            >
              We are available to help you at every stage. Please don't hesitate
              to contact us if you need assistance, have questionis, or would
              want to lind out how we may help you meet your financial
              objectives. Our first priorities are your success anel pleasure
            </Typography>
          </Hidden>
          <Box
            sx={{
              background: "#B99369",
              width: "fit-content",
              padding: "15px",
              textAlign: "center",
              border: "1px solid #fff",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ScheduleMeeting;
