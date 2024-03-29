import { Box, Typography } from "@mui/material";
import stages_back from "../../../assets/img/stagesBack.jpg";
import AllStages from "./AllStages";

const StagesOfPlanning = () => {
  return (
    <>
      <Box sx={{ width: "100%", marginTop: "5%" }}>
        <Box
          sx={{
            backgroundImage: `url(${stages_back})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        >
          <Box
            sx={{
              background: "rgba(0,0,0,0.3)",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: { xs: "20px", sm: "20px", md: "30px" },
                fontWeight: "bold",
                letterSpacing: "2px",
                fontFamily: "poppins",
                textTransform: "capitalize",
                textAlign: "center",
              }}
            >
              Stages of the Financial{" "}
              <span style={{ color: "#00324F" }}>Planning Process</span>
            </Typography>
            <AllStages />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default StagesOfPlanning;
