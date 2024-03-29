import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BuildAndFinance = React.memo(({ data }) => {
  const navigate = useNavigate();

  const renderHighlightedText = () => {
    const words = data.heading.split(" ");
    const highLightWords = new Set(data.highlighthead.split(" "));

    return words.map((word, index) => (
      <span
        key={index}
        style={{ color: highLightWords.has(word) ? "#BB9C60" : "#0D3D5F" }}
      >
        {" "}
        {word}{" "}
      </span>
    ));
  };

  return (
    <Grid container spacing={4} sx={{   textAlign: "center" }}>
      <Grid item xs={12} sm={6} sx={{ order: { xs: 2, md: 1 } }}>
        <img
          src={data.image}
          width="70%"
          alt={data.heading}
          loading="lazy"
          style={{ transition: "transform 0.3s ease" }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: "25px", md: "40px" },
            textAlign: "center",
            fontFamily: "lato",
            color: "#BB9C60",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}
        >
          {renderHighlightedText()}
        </Typography>
        <Box
          sx={{
            width: { xs: "100%", sm: "80%" },
            textAlign: "left",
            margin: "0 auto",
          }}
        >
          {data.desc.map((item, index) => (
            <Typography
              key={index}
              gutterBottom
              paragraph
              fontFamily="lato"
              fontSize="17px"
              color="#001F36"
              padding="5px"
            >
              {item}
            </Typography>
          ))}
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                background: "#A99767",
                fontFamily: "lato,sans-serif",
                fontWeight: "bold",
                fontSize: "12px",
                cursor: "pointer",
                width: "fit-content",
                padding: "10px",
                borderRadius: "20px",
                color: "white",
                m: "5px",
              }}
              onClick={() => navigate(data.navigate)}
            >
              Read More
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
});

export default BuildAndFinance;
