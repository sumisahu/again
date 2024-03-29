/**
 * BlogDialog Component
 *
 * This component displays a dialog containing detailed information about a blog post.
 * It includes the blog post's image, heading, publication date, and additional description.
 * The dialog can be opened and closed by the user.
 **/

import * as React from "react";
import Slide from "@mui/material/Slide";
import { makeStyles } from "@mui/styles";
import image1 from "../../assets/img/partner.jpg";
import Footer from "../Home/Footer";
import { Container, Button, Dialog, Box, Typography } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import NavBar from "../Home/NavBar";
import { Link } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles({
  dialog: {
    background: "#FFFEF9",
    "& .MuiPaper-root": {
      background: "#FFFEF9",
    },
  },
});

const BlogDialog = ({ dialog, onclose }) => {
  const classes = useStyles();

  const memoizedDialog = React.useMemo(
    () => (
      <Dialog
        fullScreen
        open={dialog}
        TransitionComponent={Transition}
        classes={{ paper: classes.dialog }}
        onClose={onclose}
      >
        <Button
          startIcon={<ArrowBack />}
          variant="contained"
          sx={{ background: "#BB9C60" }}
          onClick={onclose}
        >
          Go Back
        </Button>
        <NavBar />
        <Box>
          <Container maxWidth="lg" sx={{ marginTop: "15px" }}>
            <Typography
              gutterBottom
              variant="h4"
              sx={{ fontWeight: "bold", color: "#002E4F" }}
            >
              A Panoramic View of Today’s Economy: 🏠 Housing, 📈 Stocks, and 🚀
              New Ventures
            </Typography>
            <Typography gutterBottom>Hello Valued Clients! 👋</Typography>
            <Typography gutterBottom>
              Excited for our latest edition? We’ve got a rich blend of real
              estate and market trends that are sure to intrigue! Let’s dive in:
            </Typography>
            <Typography gutterBottom>🏠 Housing Market Dynamics:</Typography>
            <Typography gutterBottom>
              It’s a complex picture out there! With mortgage rates and house
              prices both climbing, the US housing market has been unusually
              sluggish. However, this general trend hides the diversity within.
              According to Zillow, while home prices nationally rose by 3.2%,
              specific markets like the Northeast and Florida are heating up,
              whereas Austin has seen a significant price drop. It’s a market of
              contrasts!
            </Typography>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                height: "100%",
                justifyContent: "left",
                marginBottom: "10px",
              }}
            >
              <img
                srcSet={image1}
                loading="lazy"
                width="60%"
                height="10%"
                alt="Hello_Valued_Clients"
              />
            </Box>
            <Typography gutterBottom>
              📊 The ‘Magnificent 7’ in the Stock Market:
            </Typography>
            <Typography gutterBottom>
              The S&P 500 is basking in glory, thanks in no small part to seven
              tech behemoths – Apple, Microsoft, Alphabet, Amazon, Nvidia, Meta,
              and Tesla. These companies are not just part of the index; they
              are the index, making up a staggering 28% of its value. Their
              growth trajectory has been nothing short of phenomenal.
            </Typography>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                height: "100%",
                justifyContent: "left",
                marginBottom: "10px",
              }}
            >
              <img
                srcSet={image1}
                loading="lazy"
                width="60%"
                height="10%"
                alt="Hello_Valued_Clients"
              />
            </Box>
            <Typography gutterBottom>🚀 Entrepreneurial Surge:</Typography>
            <Typography gutterBottom>
              2023 was a landmark year for new businesses. Yelp’s data reveals a
              20% increase in new ventures compared to 2022, with the home
              services sector leading the charge. This entrepreneurial wave
              reflects a robust American spirit, adapting and thriving even in
              challenging times.
            </Typography>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                height: "100%",
                justifyContent: "left",
                marginBottom: "10px",
              }}
            >
              <img
                srcSet={image1}
                loading="lazy"
                width="60%"
                height="10%"
                alt="Hello_Valued_Clients"
              />
            </Box>
            <Typography gutterBottom>
              🎉 Apple Mac’s 40th Anniversary:
            </Typography>
            <Typography gutterBottom>
              It’s been 40 years since the Apple Macintosh debuted, changing the
              computing world forever. This iconic product, which now
              contributes a significant $29 billion in sales, has evolved but
              continues to be a crucial part of Apple’s ecosystem.
            </Typography>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                height: "100%",
                justifyContent: "left",
                marginBottom: "10px",
              }}
            >
              <img
                srcSet={image1}
                loading="lazy"
                width="60%"
                height="10%"
                alt="Hello_Valued_Clients"
              />
            </Box>
            <Typography gutterBottom>👩‍💻 Teen Employment Trends:</Typography>
            <Typography gutterBottom>
              US teenagers are increasingly joining the workforce, with 37% of
              16-19 year-olds employed or seeking employment last year – the
              highest since 2009. This marks a significant cultural shift, with
              teens contributing more to the economy and gaining valuable life
              experience.
            </Typography>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                height: "100%",
                justifyContent: "left",
                marginBottom: "10px",
              }}
            >
              <img
                srcSet={image1}
                loading="lazy"
                width="60%"
                height="10%"
                alt="Hello_Valued_Clients"
              />
            </Box>
            <Typography gutterBottom>⏳ Upcoming Economic Events:</Typography>
            <Typography gutterBottom>
              All eyes are on the Federal Reserve’s decision today and the labor
              job market report this Friday. These will be pivotal in shaping
              our economic understanding and investment strategies. In summary,
              while the housing market shows a complex and varied picture, the
              stock market, led by the ‘Magnificent 7’, continues to soar. The
              rise in entrepreneurship and teen employment reflects a dynamic
              and evolving economy. Stay tuned for our next newsletter, where
              we’ll bring you more insights and updates. Feel free to reach out
              for a deeper discussion on these topics or any other queries you
              might have.
            </Typography>
            <b>Warm regards,</b>
            <br />
            <b>Alan Grismore</b>
            <br />
            <Typography gutterBottom>
              APW and Axxcess Wealth Management, LLC (AWM) are not affiliated.
            </Typography>
            <Typography
              gutterBottom
              component={Link}
              to="https://www.cnbc.com/2023/11/01/fed-meeting-november-2023-.html"
              sx={{
                textDecoration: "none",
                fontSize: { xs: "10px", sm: "15px", md: "20px" },
              }}
            >
              https://www.cnbc.com/2023/11/01/fed-meeting-november-2023-.html
            </Typography>{" "}
            <Typography
              gutterBottom
              component={Link}
              to="https://www.cnbc.com/2023/11/01/fed-meeting-november-2023-.html"
              sx={{
                textDecoration: "none",
                fontSize: { xs: "10px", sm: "15px", md: "20px" },
              }}
            >
              https://www.cnbc.com/2023/11/01/fed-meeting-november-2023-.html
            </Typography>{" "}
            <Typography
              gutterBottom
              component={Link}
              to="https://www.cnbc.com/2023/11/01/fed-meeting-november-2023-.html"
              sx={{
                textDecoration: "none",
                fontSize: { xs: "10px", sm: "15px", md: "20px" },
              }}
            >
              https://www.cnbc.com/2023/11/01/fed-meeting-november-2023-.html
            </Typography>{" "}
            <Typography
              gutterBottom
              component={Link}
              to="https://www.cnbc.com/2023/11/01/fed-meeting-november-2023-.html"
              sx={{
                textDecoration: "none",
                fontSize: { xs: "10px", sm: "15px", md: "20px" },
              }}
            >
              https://www.cnbc.com/2023/11/01/fed-meeting-november-2023-.html
            </Typography>
            <Typography gutterBottom>
              Source: BLS, FactSet, J.P. Morgan Asset Management. Contributions
              mirror the BLS methodology on Table 7 of the CPI report. Values
              may not sum to headline CPI figures due to rounding and underlying
              calculations. *Core services ex-shelter CPI is a custom index
              using CPI components created by J.P. Morgan Asset Management.
              (Left) “Shelter” includes owners’ equivalent rent and rent of
              primary residence; “Other” primarily reflects household
              furnishings, apparel, education and communication services,
              medical care services and other personal services. (Right)
              “Transportation services” primarily includes leased cars and
              trucks, motor vehicle insurance and motor vehicle maintenance and
              repair. Airline fares are broken out from transportation services.
            </Typography>
            <Typography gutterBottom>
              Guide to the Markets – U.S. Data are as of October 31, 2023.
            </Typography>
            <Typography
              gutterBottom
              component={Link}
              to="https://www.cnbc.com/2023/11/01/fed-meeting-november-2023-.html"
              sx={{
                textDecoration: "none",
                fontSize: { xs: "10px", sm: "15px", md: "20px" },
              }}
            >
              https://www.cnbc.com/2023/11/01/fed-meeting-november-2023-.html
            </Typography>
          </Container>
          <Footer />
        </Box>
      </Dialog>
    ),
    [dialog, onclose, classes.dialog]
  );

  return <React.Fragment>{memoizedDialog}</React.Fragment>;
};

export default BlogDialog;
