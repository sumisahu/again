import { Box, Typography } from "@mui/material";
import promise from "../../../assets/img/promise.jpg";

const OneLinePromise = () => {
  return (
    <Box sx={{ width: "100%", marginTop: "5%" }}>
      <Box
        sx={{
          padding: "10px",
          backgroundImage: `url(${promise})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "300px",
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
            border: "1px solid gray",
            padding: { xs: "0", sm: "px", md: "10px" },
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: { xs: "15px", sm: "20px", md: "25px" },
              fontWeight: "bold",
              letterSpacing: "2px",
              fontFamily: "lato",
              textTransform: "capitalize",
              textAlign: "center",
            }}
          >
            Fiduciary Excellence, Your financial future is secure, backed by a
            fiduciary promise you can rely on.{" "}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default OneLinePromise;
