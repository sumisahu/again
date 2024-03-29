import React from "react";
import image from "../../assets/img/financial.png";
import Heading from "./Heading";
import BuildAndFinance from "./BuildAndFinance";
 import { Box } from "@mui/material";



const BuildsConfidence = ({ data }) => {
  const data_for_main = {
    image:data.financial_planning_image,
    heading: `ABOUT OUR FIRM`,
    highlighthead: `OUR FIRM `,
    desc:data.financial_planning_main_content ? data.financial_planning_main_content.split(".") : [],

    navigate: `/meet_the_team`,
  };
 
  return (
    <Box sx={{ background: "#F7F7F7", marginTop: "20px" }}>
      <div data-aos="fade-right" data-aos-duration="1500">
        <Heading
          heading={data.financial_planning_heading}
          main={data.financial_planning_main_heading}
          image={image}
        />
        <BuildAndFinance data={data_for_main} />
      </div>
    </Box>
  );
};

export default BuildsConfidence;
