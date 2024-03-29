import { Box, Typography } from "@mui/material";
import frame from "../../../assets/img/frameWorkBack.jpg";
import framework from "../../../assets/img/ourFramework.png";

const data = {
  backImage: frame,
  image: framework,
  heading: `OUR FRAMEWORK`,
  desc: `We champion our clients into taking ownership with their financial plans. This starts with a discovery meeting to learn your goals, concerns, ambitions, fears, priorities, and investment principles. From there we will start the information gathering process to gain insight into your assets, taxes and investing style.`,
};
const OurFrameWork = () => {
  return (
    <>
      <Box sx={{ width: "100%", marginTop: "5%" }}>
        <Box
          sx={{
            backgroundImage: `url(${data.backImage})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "300px",
            width: "100%",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        >
          <Box
            sx={{
              background: "rgba(0,0,0,0.3)",
              padding: { xs: "0", sm: "px", md: "10px" },
              display: "flex",
              minHeight: "300px",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: { xs: "30px", sm: "40px", md: "45px" },
                fontWeight: "bold",
                letterSpacing: "2px",
                fontFamily: "lato",
                textTransform: "capitalize",
                textAlign: "center",
              }}
            >
              {data.heading}
            </Typography>
            <img
              src={data.image}
              width="50%"
              alt={data.heading}
              loading="lazy"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default OurFrameWork;
