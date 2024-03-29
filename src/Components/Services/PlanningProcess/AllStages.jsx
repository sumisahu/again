import { Card, Container, Divider, Grid, Typography } from "@mui/material";
import expansive from "../../../assets/img/introMeet.jpg";
import clarity from "../../../assets/img/assistance.jpg";
import complexity from "../../../assets/img/explore.jpg";
import peace from "../../../assets/img/detailed.jpg";

const data = [
  {
    image: expansive,
    heading: `Introductory Meeting`,
    desc: `  This is the first part of establishing a fruitful partnership, so be prepared! In this phase we will identify your goals, priorities, preferences, as well as potential obstacles. Along with this, we will together establish what your expectations are for us and whether an ongoing partnership is the right fit.`,
  },
  {
    image: complexity,
    heading: `Exploration Phase`,
    desc: `Based on our introductory meeting, we now want to take a deeper dive into your situation. During this session we can begin to sketch a preliminary plan as we engage in a more comprehensive discussion about your personal and financial goals. The more open this phase is, the more detailed our plan can be.`,
  },
  {
    image: peace,
    heading: `Detailed Planning`,
    desc: `Now it is time to set you up with a plan. Based on the prior discussions, we can deliver an easy to follow roadmap that will lead you towards your financial goals. We will specifically address the areas that are of greatest importance to you: retirement savings, early investment options, risk management, insurance, first time home ownership, estate planning, and detail the steps needed to conquer each obstacle.`,
  },
  {
    image: clarity,
    heading: `Ongoing Assistance and Advice`,
    desc: `Your priorities and goals will inevitably shift over time which is why we are here to proactively prepare your plan. We embrace change. As your life circumstances require a different approach to financial planning, wealth management, and savings options, we will be a constant presence to ensure that your plan transitions along with you.`,
  },
];

const AllStages = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{ marginTop: "5%", paddingBottom: "20px" }}>
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
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Card
                    style={{
                      width: "400px",
                      display: "flex",
                      flexDirection: "column",
                      paddingBottom: "5%",
                      background: "rgba(0,0,0,0.5)",
                    }}
                  >
                    <img
                      src={item.image}
                      width="400px"
                      loading="lazy"
                      alt={item.heading}
                    />
                    <Typography
                      gutterBottom
                      sx={{
                        color: "#fff",
                        textAlign: "left",
                        fontWeight: "bold",
                        fontFamily: "lato",
                        marginTop: "5px",
                        marginLeft: "10px",
                      }}
                      variant="h5"
                    >
                      {item.heading}
                    </Typography>
                    <Divider
                      sx={{
                        textAlign: "left",
                        background: "#BB9C60",
                        width: "60%",
                        marginLeft: "10px",
                        height: "5px",
                      }}
                    />
                    <Typography
                      sx={{
                        color: "#fff",
                        textAlign: "left",
                        fontFamily: "lato",
                        marginLeft: "10px",
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default AllStages;
