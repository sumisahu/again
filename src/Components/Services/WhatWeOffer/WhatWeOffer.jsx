import ImageSlider from "../../OurFirm/MeetTheTeam/ImageSlider";
import image1 from "../../../assets/img/whatweOffer.jpg";
import ApwPromise from "../../OurFirm/OurFiduciaryPromise/ApwPromise";
import core from "../../../assets/img/core.jpg";
import AllServices from "./AllServices";
import ScheduleMeeting from "../../OurFirm/MeetTheTeam/ScheduleMeeting";

const slidersImage = { image: image1, title: "What We Offer" };
const data_For_APW = {
  heading: "Service Is At Our Core",
  highlighthead: `Service`,
  desc: [
    `We find that every client’s needs are different and unique and require expert advice that goes beyond the scope of the cookie cutter programs set forth by larger institutions. As an independent advisor and thinker, we are not tied down to one firm’s investment offering and philosophy.`,
    `Our goal is to become your trusted advisor and to help you approach financial decisions with anticipation, rather than apprehension, by deploying a plan that is tailored to your personal situation and objectives, regardless of where the market is headed.`,
  ],
  image: core,
};

const WhatWeOffer = () => {
  return (
    <>
      <ImageSlider image={slidersImage} />
      <ApwPromise data={data_For_APW} />
      <AllServices />
      <ScheduleMeeting />
    </>
  );
};

export default WhatWeOffer;
