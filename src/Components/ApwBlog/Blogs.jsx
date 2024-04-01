import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Pagination,
  Container,
  Grid,
  Typography,
} from "@mui/material";
 import { useState } from "react";
 import { useNavigate } from "react-router-dom";
import image1 from "../../assets/img/apwBlog1.jpg";
import image2 from "../../assets/img/apwBlog2.jpg";
import image3 from "../../assets/img/apwBlog3.jpg";
import image4 from "../../assets/img/apwBlog4.jpg";
import image5 from "../../assets/img/apwBlog5.jpg";
import image6 from "../../assets/img/apwBlog6.jpg";
import image7 from "../../assets/img/apwBlog7.jpg";
import image8 from "../../assets/img/apwBlog8.jpg";
import image9 from "../../assets/img/apwBlog9.jpg";
import image10 from "../../assets/img/apwBlog10.jpg";
import image11 from "../../assets/img/apwBlog11.jpg";
import image12 from "../../assets/img/apwBlog12.jpg";

 

const data = [
  { 
    id:247563,
    image: image1,
    salutatoin_or_Date: `Hello Valued Clients! 👋`,

    title: `A Panoramic View of Today’s Economy: 🏠 Housing, 📈 Stocks, and 🚀 New Ventures`,
    subtitle: `  Deliver comprehensive financial planning that aligns our
    recommendations to your goals`,
  },
  { id:247547,
    image: image2,
    title: `2024 Economic Insights: Navigating Growth, WorkplaceShifts, and New Year Ambitions`,
    subtitle: `2024 Economic Insights: Navigating Growth, WorkplaceShifts, and New Year Ambitions January 19, 2024 🌟Welcome to Our Investment Newsletter – A Fresh Start for 2024!`,
  },
  {id:247372,
    image: image3,
    title: `🎃☕Economic Cheer: Embracing the Holiday Spirit Amid Global Economic Shifts`,
    subtitle: `Season Greetings, I hope this Newsletter finds you brimming with joy and good health. The holidays, a time of merriment and reflection, are just around`,
  },
  {id:247368,
    image: image4,
    title: `🍂 October Newsletter: Celebrating Financial Planning Month 🍂`,
    subtitle: `Happy Fall, As the leaves turn golden and the air becomes crisp (maybe not for San Diegans😜), we’re reminded of the passage of time and`,
  },
  { id:247352,
    image: image5,
    title: `Changes in Catch-Up Contributions for Those 50 and Older`,
    subtitle: `September, 2023 A special note to my clients who are approaching retirement, including my own father (who might come across this message, 🤫): We’ll use my`,
  },
  { id:247330,
    image: image6,
    title: `Fitch Dims US’s Credit Outlook`,
    subtitle: `August 2023   I’m back after an awesome trip through Europe, and super excited to share some amazing photos with you in our upcoming financial`,
  },
  { id:247294,
    image: image7,
    title: `Legacy Letter`,
    subtitle: `July 2023    Happy July! Summer weather has finally arrived and it’s toasty. Let’s see how long we can withstand this year’s summer before begging`,
  },
  { id:247334,
    image: image8,
    title: `Embracing the Rapid Pace of Innovation`,
    subtitle: `June 2023   Summer plans yet? AAA expects that more than 42 million Americans will travel 50 miles or more this summer (1), and global travel`,
  },
  {id:247245,
    image: image9,
    title: `Unveiling the Financial Lifeline`,
    subtitle: `May 19th, 2023 I hope spring is treating you all well. The weather has teetered from winter to summer conditions, while seemly skipping over spring.`,
  },
  { id:247133,
    image: image10,
    title: `Sugar High`,
    subtitle: `Anybody who gets to know me learns sooner or later that I have a voracious sweet tooth and  See’s Candy is one of my greatest weaknesses.`,
  },
  { id:247130,
    image: image11,
    title: `ChatGPT Answer to Solving the Debt Ceiling`,
    subtitle: `The perplexing U.S. debt ceiling political debate has resurfaced yet again. For those unfamiliar, the debt ceiling is a legal limit on the amount of`,
  },
  {id:247124,
    image: image12,
    title: `New Year, New Goals & New News…..`,
    subtitle: `  Happy New Year! I hope everybody had an enjoyable holiday and rang in the new year with cheer and gratitude.   We have now`,
  },
];

const Blogs = () => {
  const navigate=useNavigate()
   const [page, setPage] = useState(1);
 
  const handleSetPage = (current_page) => {
    setPage(current_page);
    window.scrollTo({ top: "700px", left: 0, behavior: "smooth" });
  };
 
 

  return (
    <>
      <Box
        sx={{ background: "#EFEAE4", paddingBottom: "20px", marginTop: "5%" }}
      >
        <Container maxWidth="xl">
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              fontSize: { xs: "12px", sm: "23px", md: "30px" },
              fontWeight: "bold",
              color: "#0D3D5F",
              padding: "10px",
            }}
            gutterBottom
          >
            <span style={{ color: "#BB9C60" }}>Insights</span> from a Wealth
            Management Expert
          </Typography>

          <Grid container spacing={4}>
            {data.slice(page * 8 - 8, page * 8).map((item, i) => {
              return (
                <Grid
                  key={i}
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      width: "80%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <img
                      src={item.image}
                      sx={{ paddingTop: "56.25%" }}
                      alt={item.title}
                      loading="lazy"
                    />
                    <CardContent>
                      <Typography
                        variant="body1"
                        gutterBottom
                        sx={{
                          color: "#0D3D5F",
                          textAlign: "left",
                          fontWeight: "bold",
                          marginBottom: "20px",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        gutterBottom
                        sx={{
                          color: "#0D3D5F",
                          textAlign: "left",
                          fontSize: "12px",
                        }}
                      >
                        {item.subtitle}
                      </Typography>
                    </CardContent>
                    <CardActions
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <Button
                        variant="outlined"
                        sx={{
                          borderRadius: "20px",
                          color: "#0D3D5F",
                          fontWeight: "bold",
                          border: "2px solid #BB9C60 ",
                          fontSize: "12px",
                          textTransform: "capitalize",
                        }}
                        onClick={()=>navigate(`/blogbrief/${item.id}`)}
                      >
                        Read More&#8811;
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>

          <Stack
            spacing={2}
            sx={{
              marginTop: "5%",
              display: "flex",
              justifyContent: "cener",
              alignItems: "center",
            }}
          >
            <Pagination
              count={2}
              page={page}
              hideNextButton={true}
              hidePrevButton={true}
              onChange={(event, newpage) => handleSetPage(newpage)}
              siblingCount={0}
              variant="outlined"
            />
          </Stack>
        </Container>
      </Box>
     </>
  );
};

export default Blogs;
