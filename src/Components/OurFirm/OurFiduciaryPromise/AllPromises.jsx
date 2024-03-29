import { Box, Container, Grid, Typography } from "@mui/material";
import expansive from "../../../assets/img/expansive_offering.jpg";
import clarity from "../../../assets/img/clarity.jpg";
import complexity from "../../../assets/img/complexity.jpg";
import peace from "../../../assets/img/peace.jpg";
import steward from "../../../assets/img/steward.jpg";
import protection from "../../../assets/img/clientProtection.jpg";
import service from "../../../assets/img/service.jpg";
import needs from "../../../assets/img/needs.jpg";

const data = [
  {
    image: expansive,
    heading: `Expansive Offerings`,
    desc: `  Deliver comprehensive financial planning that aligns our
    recommendations to your goals`,
  },
  {
    image: clarity,
    heading: `Clarity`,
    desc: `Deliver comprehensive financial planning that aligns our recommendations to your goals`,
  },
  {
    image: complexity,
    heading: `Complexity Demystified`,
    desc: `Provide thorough understanding on portfolios and investments`,
  },
  {
    image: peace,
    heading: `Peace Of Mind`,
    desc: `We measure client performance returns using independent third parties`,
  },
  {
    image: steward,
    heading: `Stewardship`,
    desc: `We are honored by your trust in us, we take our role seriously - your peace of mind is our purpose`,
  },
  {
    image: protection,
    heading: `Client - Protection`,
    desc: `We do not physically hold or possess any client assets, securities, or money`,
  },
  {
    image: service,
    heading: `Service for You`,
    desc: `We listen, learn, and collaborate with you to craft a comprehensive wealth strategy that fits for you`,
  },
  {
    image: needs,
    heading: `Your Needs First`,
    desc: `We are independent from any bank, broker dealer, insurance company, or custodian`,
  },
];

const AllPromises = () => {
  return (
    <>
      <Box sx={{ background: "#EFEAE4", paddingBottom: "20px" }}>
        <Container maxWidth="lg">
          <div
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <Grid container spacing={4}>
              {data.map((item, i) => {
                return (
                  <Grid
                    key={i}
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      transition: "background 0.6s, transform 0.6s",
                      "&:hover": {
                        background: "#fff",
                        transform: "scale(1.1)",
                        borderRadius: "10px",
                        boxShadow:
                          "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                      },
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: "70%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <img
                        src={item.image}
                        sx={{
                          paddingTop: "56.25%",
                          borderBottom: "7px solid #FF9E68",
                        }}
                        alt={item.heading}
                        loading="lazy"
                      />
                      <Typography
                        gutterBottom
                        sx={{
                          color: "#1A3C4F",
                          textAlign: "left",
                          fontWeight: "bold",
                          fontFamily: "lato",
                          marginTop: "5px",
                        }}
                        variant="h5"
                      >
                        {item.heading}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#1A3C4F",
                          textAlign: "left",
                          fontFamily: "lato",
                        }}
                      >
                        {item.desc}
                      </Typography>
                    </div>
                  </Grid>
                );
              })}
            </Grid>
          </div>
        </Container>
      </Box>
    </>
  );
};

export default AllPromises;
