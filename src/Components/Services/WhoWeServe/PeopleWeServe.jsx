import { Box, CardMedia, Container, Grid, Typography } from "@mui/material";
import image1 from "../../../assets/img/retirees.jpg";
import image2 from "../../../assets/img/families.jpg";
import image3 from "../../../assets/img/individuals.png";
import image4 from "../../../assets/img/business.jpg";

const data = [
  {
    image: image1,
    heading: `Retirees`,
    desc: [
      `Whether you’re closing in on retirement or already retired, we can help you develop a game plan so that you retire with confidence, create a tax efficient distribution strategy that allows you retire in the lifestyle that you have become accustomed.`,
    ],
  },
  {
    image: image2,
    heading: `High Net Worth Individuals`,
    desc: [
      `We take a full balance sheet approach to help high net worth individuals achieve their wealth planning goals. Providing personalized advice and guidance, we work alongside you to consolidate assets, choose the most appropriate vehicles for savings, identify tax-efficient savings strategies for retirement and help plan for your estate, charitable giving and wealth transition goals.`,
    ],
  },
  {
    image: image3,
    heading: `Families`,
    desc: [
      `Successful family governance is critical to help ensure your family’s values, traditions and wealth are in place for current family members and are transitioned smoothly to future generations. We work to build strong relationships with all family members and provide education to build an understanding of your financial priorities and coordinate your wealth plan with your other professional advisors.`,
    ],
  },
  {
    image: image4,
    heading: `Executives and Business Owners`,
    desc: [
      `We assist executives and business owners in planning for challenges such as the concentration of net worth, business valuations, liquidity events, tax-efficient investing as well as retirement and estate planning strategies.`,
    ],
  },
];
const PeopleWeServe = () => {
  return (
    <>
      <Box sx={{ background: "#EFEAE4", width: "100%", paddingBottom: "20px" }}>
        <Typography
          gutterBottom
          variant="body1"
          sx={{
            color: "#002E4F",
            fontSize: { xs: "15px", sm: "20px", md: "35px" },
            textAlign: "center",
            fontWeight: 1000,
            fontFamily: "lato",
            letterSpacing: "2px",
            marginBottom: "5%",
          }}
        >
          Clients We <span style={{ color: "#BB9C60" }}>Serve</span> at Alta
          Privare Wealth
        </Typography>
        <Container maxWidth="md">
          <Grid container spacing={4}>
            {data.map((item, index) => {
              return (
                <>
                  <Grid item xs={12} md={6}>
                    <CardMedia
                      component="img"
                      image={item.image}
                      loading="lazy"
                      alt={item.heading}
                      sx={{
                        borderRadius: "150px",
                        width: { xs: "200px", sm: "300px", md: "300px" },
                        height: { xs: "200px", sm: "300px", md: "300px" },
                        transition: "transform 0.3s ease",
                      }}
                      onMouseOver={(e) =>
                        (e.target.style.transform = "scale(1.1)")
                      }
                      onMouseOut={(e) =>
                        (e.target.style.transform = "scale(1)")
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: "30px",
                        fontWeight: 800,
                        fontFamily: "lato",
                        color: "#0D3D5F",
                        marginTop: "20px",
                      }}
                    >
                      {item.heading}
                    </Typography>
                    {item.desc.map((item, index) => {
                      return (
                        <Typography
                          key={index}
                          variant="body1"
                          gutterBottom
                          paragraph
                          sx={{
                            fontSize: "15px",
                            fontWeight: 800,
                            fontFamily: "lato",
                            color: "#0D3D5F",
                            marginTop: "30px",
                          }}
                        >
                          {item}
                        </Typography>
                      );
                    })}
                    <Typography variant="body1" color="#0D3D5F">
                      learn more , please visit our{" "}
                      <a href="/planning_process" style={{ color: "#BB9C60" }}>
                        Financial Planning Page
                      </a>
                    </Typography>
                  </Grid>
                </>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default PeopleWeServe;
