import { Grid, Typography, Container, Box, Hidden } from "@mui/material";

const ApwPromise = ({ data }) => {
  const commonTypographyProps = {
    marginBottom: "20px",
    fontWeight: "bold",
    fontFamily: "lato",
    color: "#001F36",
    fontSize: "15px",
  };
  const renderHighlightedText = () => {
    const sentence = data.heading;
    const words = sentence.split(" ");
    const highLightWords = data.highlighthead.split(" ");

    return words.map((word, index) => {
      const color = highLightWords.includes(word) ? "#BB9C60" : "#0D3D5F";
      return (
        <span key={index} style={{ color }}>
          {" "}
          {word}{" "}
        </span>
      );
    });
  };

  return (
    <Box sx={{ background: "#F8F8F8", marginTop: "8%" }}>
      <Container maxWidth="lg">
        <div data-aos="zoom-out-down" data-aos-duration="2000">
          <Grid container spacing={8}>
            <Grid
              item
              xs={12}
              md={6}
              sm={6}
              sx={{ order: { xs: 2, md: 1 }, mt: "4%" }}
            >
              <Hidden mdDown>
                <Typography
                  variant="h5"
                  color="#0D3D5F"
                  marginBottom="20px"
                  fontWeight="bold"
                  fontFamily="lato"
                >
                  {renderHighlightedText()}{" "}
                </Typography>
              </Hidden>
              {data.desc.map((item, i) => {
                return (
                  <Typography
                    key={i}
                    variant="body1"
                    {...commonTypographyProps}
                    overflow="hidden"
                  >
                    {item}
                  </Typography>
                );
              })}
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sm={6}
              sx={{ order: { xs: 1, md: 2 }, textAlign: "center" }}
            >
              <Hidden mdUp>
                <Typography
                  variant="h5"
                  color="#0D3D5F"
                  marginBottom="20px"
                  fontWeight="bold"
                  fontFamily="lato"
                >
                  {" "}
                  {renderHighlightedText()}{" "}
                </Typography>
              </Hidden>
              <img
                src={data.image}
                width="90%"
                loading="lazy"
                alt="APW_Committed"
              />
            </Grid>
          </Grid>
        </div>
      </Container>
    </Box>
  );
};

export default ApwPromise;
