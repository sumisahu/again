import {
  Grid,
  Typography,
  Container,
  IconButton,
  Box,
  Hidden,
} from "@mui/material";
import { PhoneEnabled,Email } from "@mui/icons-material";
import Alan from "../../../assets/img/Alan.png";
import Brain from "../../../assets/img/Brian.png";
import chamber from "../../../assets/img/the_chamber.png";
import partner from "../../../assets/img/partner.jpg";
import ApwPromise from "../OurFiduciaryPromise/ApwPromise";

const data_for_partner = {
  heading: `Introducing Our Valued Partner`,
  highlighthead: `Partner`,
  desc: [
    `Understanding the multifaceted nature of financial planning, we recognize that certain queries require specialized knowledge. That’s why we’ve built a robust network of partners, including accountants, attorneys, insurance agents, medicare experts, and mortgage brokers. This collaborative ecosystem ensures that no matter the complexity of your financial needs, we have the expertise to address them.`,
    `Our partnership with seasoned professionals in these critical areas allows us to bring in additional layers of expertise when needed. Whether it’s navigating the intricacies of medicare options, exploring mortgage opportunities for your dream home, or coordinating with legal and tax professionals, our team is equipped to provide comprehensive solutions. `,
    `By carefully coordinating and collaborating with our trusted network, we ensure that your financial planning is handled with the utmost care and professionalism. Our goal is to empower you with the knowledge and resources you need to make informed decisions, secure in the knowledge that a team of experts is always at your disposal.`,
  ],
  image: partner,
};

const Persons = () => {
  const commonTypographyProps = {
    color: "#001F36",
    gutterBottom: true,
    marginBottom: "20px",
    fontFamily: "lato",
    fontWeight: "bold",
    fontSize: "15px",
  };

  return (
    <>
      <Box sx={{ background: "#F8F8F8", marginTop: "8%" }}>
        <Container maxWidth="lg">
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <Grid container spacing={8}>
              <Grid item xs={12} md={6} sm={6} sx={{ order: { xs: 2, md: 1 } }}>
                <Hidden mdDown>
                  <Typography
                    variant="h5"
                    color="#0D3D5F"
                    marginBottom="20px"
                    fontWeight="bold"
                    fontFamily="lato"
                  >
                    Meet{" "}
                    <span style={{ color: "#BB9C60" }}>Alan Grismore,</span>{" "}
                    Exploring the Depths of My Story
                  </Typography>
                </Hidden>
                <Typography variant="h6" color="#0D3D5F" marginBottom="5px">
                  Alan Grismore, WMCP&#174;
                </Typography>
                <Typography color="#0D3D5F" fontSize="16px">
                  CA License #0k69490
                </Typography>
                <IconButton>
                  <PhoneEnabled sx={{ color: "#BB9C60", fontWeight: "bold" }} />
                  <Typography color="#0D3D5F">(888) 321-0808</Typography>
                </IconButton>
                <br />
                <IconButton sx={{ marginBottom: "15px" }}>
                  <Email sx={{ color: "#BB9C60", fontWeight: "bold" }} />
                  <Typography color="#0D3D5F">
                    {" "}
                    Info@AltaPrivateWealth.com
                  </Typography>
                </IconButton>
                <Typography variant="body1" {...commonTypographyProps}>
                  Alan is the founder and chief architect of Alta Private
                  Wealth, Inc. (APW).{" "}
                  <span style={{ color: "#BB9C60" }}>He founded APW</span> after
                  approximately 15 years working for two of the largest banks in
                  the US, where he discovered a strong need for a more dedicated
                  and holistic client experience. He realized that the larger
                  financial intuitions were excellent at marketing and scaling
                  client acquisitions but lacked the meaningful resources and
                  capabilities to provide exceptional dedicated client service
                  over time.
                </Typography>
                <Typography variant="body1" {...commonTypographyProps}>
                  Prior to forming APW,{" "}
                  <span style={{ color: "#BB9C60" }}>
                    Alan was Vice President of Investments at JP Morgan, serving
                    his clients as a Private Client Advisor.
                  </span>{" "}
                  He also held an Assistant Vice President role in retail
                  banking at Wells Fargo Bank, where he began his career in
                  2008.
                </Typography>
                <Typography variant="body1" {...commonTypographyProps}>
                  Alan moved to San Diego in 2005, from Silver Spring, MD to
                  pursue a degree in Economics at San Diego State University.
                  Alan maintains a professional designation with The American
                  College of Financial Services,{" "}
                  <span style={{ color: "#BB9C60" }}>
                    Wealth Management Certified Professional-WMCP®
                  </span>
                  .
                </Typography>
                <Typography variant="body1" {...commonTypographyProps}>
                  {" "}
                  Alan enjoys spending time traveling with his family. As a
                  young child he lived overseas in Europe and traveled
                  extensively with his dad. He is now carrying on the tradition
                  with his own family. Alan and his wife, share a passion of
                  learning about art, architecture, history and cuisine of other
                  countries. Alan’s hobbies include cycling, basketball, golf,
                  rock climbing and staying active in the outdoors. Alan is a
                  devout Christian and is a member of Grace Church in the North
                  Park area of San Diego, which{" "}
                  <span style={{ color: "#BB9C60" }}>
                    he serves on the church’s financial board committee
                  </span>
                  .
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} sm={6} sx={{ order: { xs: 1, md: 2 } }}>
                <Hidden mdUp>
                  <Typography
                    variant="h5"
                    color="#0D3D5F"
                    marginBottom="20px"
                    fontWeight="bold"
                    fontFamily="lato"
                  >
                    Meet{" "}
                    <span style={{ color: "#BB9C60" }}>Alan Grismore,</span>{" "}
                    Exploring the Depths of My Story
                  </Typography>
                </Hidden>
                <img
                  src={Alan}
                  width="90%"
                  alt="Alan_Grismore"
                  loading="lazy"
                />
                <Box
                  sx={{
                    display: "flex",
                    gap: "10px",
                    flexDirection: { xs: "column", sm: "row" },
                  }}
                >
                  <img src={chamber} width="30%" />
                  <Typography
                    variant="h6"
                    marginTop="30px"
                    fontWeight="bold"
                    color="#0D3D5F"
                  >
                    Proud Member Of The National City Chamber Of Commerce
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </div>
        </Container>
      </Box>
      <Box sx={{ background: "#F8F8F8", marginTop: "8%" }}>
        <Container maxWidth="lg">
          <div
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <Grid container spacing={8}>
              <Grid item xs={12} md={6} sm={6}>
                <Hidden mdUp>
                  <Typography
                    variant="h5"
                    color="#0D3D5F"
                    marginBottom="20px"
                    fontWeight="bold"
                    fontFamily="lato"
                  >
                    Meet{" "}
                    <span style={{ color: "#BB9C60" }}>Brian Muldoon,</span>{" "}
                    Adding Strength to Our Team
                  </Typography>
                </Hidden>
                <img
                  src={Brain}
                  width="90%"
                  atl="Brain Muldoon"
                  loading="lazy"
                />
              </Grid>
              <Grid item xs={12} md={6} sm={6} sx={{ order: { xs: 2, md: 1 } }}>
                <Hidden mdDown>
                  <Typography
                    variant="h5"
                    color="#0D3D5F"
                    marginBottom="20px"
                    fontWeight="bold"
                    fontFamily="lato"
                  >
                    Meet{" "}
                    <span style={{ color: "#BB9C60" }}> Brian Muldoon,</span>{" "}
                    Adding Strength to Our Team
                  </Typography>
                </Hidden>
                <Typography variant="h6" color="#0D3D5F" marginBottom="5px">
                  Brian Muldoon
                </Typography>
                <Typography
                  color="#0D3D5F"
                  gutterBottom
                  fontSize="16px"
                  marginBottom="15px"
                >
                  Client Associate
                </Typography>
                <Typography variant="body1" {...commonTypographyProps}>
                  Brian Muldoon is a{" "}
                  <span style={{ color: "#BB9C60" }}>
                    Client Associate with Alta Private Wealth Inc., (APW)
                  </span>
                  . He serves as a key contact, and coordinator for all private
                  wealth management client services. Brian works with clients to
                  address all service requests as well as office administrative
                  needs and responsibilities. His other responsibilities are
                  Executive Assistant for Alta Private Wealth Advisors. Brian’s
                  duties include managing calendars, coordinating and scheduling
                  client meetings, answering incoming calls, and providing
                  client and office administrative support to the team.
                </Typography>
                <Typography variant="body1" {...commonTypographyProps}>
                  <span style={{ color: "#BB9C60" }}>
                    Prior to joining APW, Brian worked as a Project Manager
                  </span>
                  . With his unique blend of skills, Brian is adept at
                  delivering exceptional client service while effectively
                  managing complex projects.  He leverages his knowledge to
                  provide comprehensive support to clients.
                </Typography>
                <Typography variant="body1" {...commonTypographyProps}>
                  Outside of his professional endeavors, Brian enjoys spending
                  time with his three beautiful daughters and wife. Brian and
                  his family enjoy road trips across the country and vacationing
                  in the Outer Banks. Brian’s hobbies include going to the gym,
                  watching mixed martial arts and catching the Dallas Cowboys
                  game.
                </Typography>
              </Grid>
            </Grid>
          </div>
        </Container>
      </Box>
      <Box sx={{ background: "#F8F8F8", marginTop: "8%" }}>
        <ApwPromise data={data_for_partner} />
      </Box>
    </>
  );
};

export default Persons;
