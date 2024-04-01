import { Box, Typography } from "@mui/material";
import backimage from "../../../assets/img/allserviceback.jpg";
import ServicesTypes from "./ServicesTypes";

const AllServices = () => {
  return (
    <>
      <Box sx={{ width: "100%", marginTop: "5%" }}>
        <Box
          sx={{
            backgroundImage: `url(${backimage})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        >
          <Box
            sx={{
              background: "rgba(0,0,0,0.1)",
              gap: "30px,",
            }}
          >
            {" "}
            <Typography
              gutterBottom
              variant="h5"
              color="#fff"
              textAlign="center"
              fontFamily="fantasy"
            >
              Our service includes, but is not limited to
            </Typography>
            <ServicesTypes />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AllServices;
