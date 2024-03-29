import { Box, Container, Typography } from "@mui/material";
import knowledge from "../../../assets/img/knowledgeShare.jpg";
import proven from "../../../assets/img/provenFrame.jpg";
import analysis from "../../../assets/img/Analysis.jpg";
import team from "../../../assets/img/team.jpg";
const data = [
  {
    backImage: knowledge,
    heading: `knowledge share`,
    desc: `We champion our clients into taking ownership with their financial plans. This starts with a discovery meeting to learn your goals, concerns, ambitions, fears, priorities, and investment principles. From there we will start the information gathering process to gain insight into your assets, taxes and investing style.`,
  },
  {
    backImage: proven,
    heading: `proven framework`,
    desc: `We then mutually prepare a holistic comprehensive plan to aid in your decision making and become a guide for working towards your goals. The financial plan will allow us to assess possible outcomes and create the framework for a robust financial foundation.`,
  },
  {
    backImage: analysis,
    heading: `analysis & design`,
    desc: `After a thorough analysis we assemble a list of recommendations ranging from tax considerations, trust, estate planning, investment allocation, cash flow, etc.  We know life events happen and life’s storms can interfere with progress. We are here to help you navigate through choppy waters, pivot if we must and keep you aligned with your priorities.`,
  },
  {
    backImage: team,
    heading: `Together We Are A Team`,
    desc: `We are a relationship-based firm and consider our clients family. We use a team approach and consult with industry experts on complex issues on your behalf. Our business consultants are well vetted and masters in their respected professions. Your happiness and financial achievements are what inspire us to work hard for you.`,
  },
];

const PhilosophyTypes = () => {
  return (
    <>
      {data.map((item, i) => {
        return (
          <Box key={i} sx={{ width: "100%" }}>
            <Box
              sx={{
                backgroundImage: `url(${item.backImage})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: { xs: "150px", sm: "200px", md: "300px" },
                width: "100%",
                backgroundSize: "cover",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundAttachment: "fixed",
              }}
            >
              <Box
                sx={{
                  background: "rgba(0,0,0,0.3)",
                  padding: { xs: "0", sm: "px", md: "10px" },
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontSize: { xs: "20px", sm: "25px", md: "30px" },
                    fontWeight: "bold",
                    letterSpacing: "2px",
                    fontFamily: "lato",
                    textTransform: "capitalize",
                    textAlign: "center",
                  }}
                >
                  {item.heading}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ background: "#F1F1F1" }}>
              <Container
                maxWidth="lg"
                sx={{ minHeight: "200px", display: "flex" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "10px",
                  }}
                >
                  {" "}
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    textAlign="center"
                    fontFamily="lato"
                    color="#00324F"
                  >
                    {item.desc}
                  </Typography>
                </Box>
              </Container>
            </Box>
          </Box>
        );
      })}
    </>
  );
};

export default PhilosophyTypes;
