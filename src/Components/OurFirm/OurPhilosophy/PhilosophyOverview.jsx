import { Container, Grid, Box, Typography } from "@mui/material";
import video from "../../../assets/video/ourPhilosophy.mp4";
const PhilosophyOverview = () => {
  return (
    <Box
      sx={{
        background: "#EFEAE4",
        padding: "10px",
        marginTop: "5%",
        marginBottom: "5%",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <video
              src={video}
              autoPlay
              loop
              muted
              width="100%"
              style={{ clipPath: "inset(1px)" }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                color: "#001F36",
                letterSpacing: "1px",
                fontSize: "18px",
                fontFamily: "lato",
              }}
            >
              Alta Private Wealth Management organization operates under the
              premise of enabling clients to attain financial success via
              honesty, openness, and knowledge. Our methodology combines
              innovative technology, individualized tactics, and steadfast
              dedication to provide customized solutions that support your
              objectives and core values.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PhilosophyOverview;
