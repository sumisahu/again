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
import BlogDialog from "./BlogDialog";

const data = [
  {
    image: image1,
    salutatoin_or_Date: `Hello Valued Clients! 👋`,

    title: `A Panoramic View of Today’s Economy: 🏠 Housing, 📈 Stocks, and 🚀 New Ventures`,
    subtitle: `  Deliver comprehensive financial planning that aligns our
    recommendations to your goals`,
  },
  {
    image: image2,
    title: `A Panoramic View of Today’s Economy: 🏠 Housing, 📈 Stocks, and 🚀 New Ventures`,
    subtitle: `Deliver comprehensive financial planning that aligns our recommendations to your goals`,
  },
  {
    image: image3,
    title: `A Panoramic View of Today’s Economy: 🏠 Housing, 📈 Stocks, and 🚀 New Ventures`,
    subtitle: `Provide thorough understanding on portfolios and investments`,
  },
  {
    image: image4,
    title: `A Panoramic View of Today’s Economy: 🏠 Housing, 📈 Stocks, and 🚀 New Ventures`,
    subtitle: `We measure client performance returns using independent third parties`,
  },
  {
    image: image5,
    title: `A Panoramic View of Today’s Economy: 🏠 Housing, 📈 Stocks, and 🚀 New Ventures`,
    subtitle: `We are honored by your trust in us, we take our role seriously - your peace of mind is our purpose`,
  },
  {
    image: image6,
    title: `A Panoramic View of Today’s Economy: 🏠 Housing, 📈 Stocks, and 🚀 New Ventures`,
    subtitle: `We do not physically hold or possess any client assets, securities, or money`,
  },
  {
    image: image7,
    title: `A Panoramic View of Today’s Economy: 🏠 Housing, 📈 Stocks, and 🚀 New Ventures`,
    subtitle: `We listen, learn, and collaborate with you to craft a comprehensive wealth strategy that fits for you`,
  },
  {
    image: image8,
    title: `A Panoramic View of Today’s Economy: 🏠 Housing, 📈 Stocks, and 🚀 New Ventures`,
    subtitle: `We are independent from any bank, broker dealer, insurance company, or custodian`,
  },
  {
    image: image9,
    title: `A Panoramic View of Today’s Economy: 🏠 Housing, 📈 Stocks, and 🚀 New Ventures`,
    subtitle: `We are honored by your trust in us, we take our role seriously - your peace of mind is our purpose`,
  },
  {
    image: image10,
    title: `A Panoramic View of Today’s Economy: 🏠 Housing, 📈 Stocks, and 🚀 New Ventures`,
    subtitle: `We do not physically hold or possess any client assets, securities, or money`,
  },
  {
    image: image11,
    title: `A Panoramic View of Today’s Economy: 🏠 Housing, 📈 Stocks, and 🚀 New Ventures`,
    subtitle: `We listen, learn, and collaborate with you to craft a comprehensive wealth strategy that fits for you`,
  },
  {
    image: image12,
    title: `A Panoramic View of Today’s Economy: 🏠 Housing, 📈 Stocks, and 🚀 New Ventures`,
    subtitle: `We are independent from any bank, broker dealer, insurance company, or custodian`,
  },
];

const Blogs = () => {
  const [page, setPage] = useState(1);
  const [dialog, setDialog] = useState(false);

  const handleSetPage = (current_page) => {
    setPage(current_page);
    window.scrollTo({ top: "700px", left: 0, behavior: "smooth" });
  };
  const handleOpen = (image, heading, date, More_desc) => {
    setDialog(true);
  };

  const CloseDialog = () => {
    setDialog(false);
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
                        onClick={handleOpen}
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
      {dialog && <BlogDialog dialog={dialog} onclose={CloseDialog} />}
    </>
  );
};

export default Blogs;
