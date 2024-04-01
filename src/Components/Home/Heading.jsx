import { Box, Hidden, Typography } from "@mui/material";

const Heading = ({ image, heading, main }) => (
  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
    <Hidden mdDown>
      <img src={image} width="15%" alt="BuildsConfidence" loading="lazy" />
    </Hidden>
    <Typography
      variant="body1"
      sx={{
        fontSize: { xs: "25px", md: "40px" },
        textAlign: "center",
        fontFamily: "lato,sans-serif",
        color: "#BB9C60",
        textTransform: "uppercase",
      }}
    >
      {heading}{" "}
      <span style={{ color: "#0D3D5F", fontWeight: "bold" }}>{main}</span>
    </Typography>
  </Box>
);

export default Heading;
