import { Box } from "@mui/material";
import Heading from "./Heading";
import image from "../../assets/img/financial.png";
import image2 from "../../assets/img/builds1.jpg";
import BuildAndFinance from "./BuildAndFinance";


const FinancialPlaning = ({data}) => {

const dataForFinancialPlanning = {
  image: data.builds_confidence_image,
  heading: `HONORING OUR CLIENTS WITH INTEGRITY FIRST`,
  highlighthead: `INTEGRITY FIRST`,
  desc:data.builds_confidence_main_content ? data.builds_confidence_main_content.split(".") : [], 
  navigate: `/planning_process`,
};
  return (
    <Box sx={{ background: "#F7F7F7", marginTop: "20px" }}>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1500"
      >
        <Heading
          heading={data.builds_confidence_heading}
          main={data.builds_confidence_main_heading}
          image={image}
        />
        <BuildAndFinance data={dataForFinancialPlanning} />
      </div>
    </Box>
  );
};

export default FinancialPlaning;
