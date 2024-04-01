import { Container, Typography, Grid, Button, Box } from "@mui/material";
import imageBack from "../../assets/img/schedule_meeting.jpg";

const ScheduleAMeeting = () => {
  return (
    <Box
      sx={{
        width: "100%",
        background: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.5)),url(${imageBack})`,
        backgroundPosition: "",
        backgroundSize: "cover",
        marginTop: "20px",
        padding: "20px",
      }}
    >
      <Typography
        paragraph
        textAlign="center"
        color="white"
        fontFamily="lato,sens-serif"
        letterSpacing="2px"
        fontSize="18px"
        sx={{ textTransform: "uppercase" }}
      >
        WE BELIEVE STRONG RELATIONSHIPS ARE BUILT ON UNCOMPROMISING TRUST AND
        LOYALTY
      </Typography>
      <Container maxWidth="xl">
        <Grid container spacing={4} sx={{ marginTop: "20px" }}>
          <Grid item xs={12} md={4} sm={6}>
            <div
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: "35px",
                }}
              >
                <Typography
                  fontSize="30px"
                  color="white"
                  textAlign="center"
                  fontFamily="lato,sans-serif"
                >
                  Schedule A{" "}
                  <span style={{ color: "#BB9C60", fontWeight: "bold" }}>
                    Meeting
                  </span>
                </Typography>
                <Button
                  sx={{
                    color: "white",
                    background: "#BB9C60",
                    padding: "10px",
                    borderRadius: "25px",
                    fontFamily: "lato ,sans-serif",
                  }}
                >
                  Begin A Discussion
                </Button>
              </Box>
            </div>
          </Grid>
          <Grid item xs={12} md={8} sm={6}>
            <Box
              sx={{
                width: "auto",
                flexDirection: "column",
                padding: "10px",
              }}
            >
              <Typography
                paragraph
                fontSize="18px"
                textAlign="left"
                color="white"
                fontFamily="lato,sans-serif"
              >
                If you believe you could benefit from working with a financial
                professional, let’s review your portfolio, financial trajectory,
                and goals to see if we're a good fit together.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ScheduleAMeeting;
