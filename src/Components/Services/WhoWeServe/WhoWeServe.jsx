import React from "react";
import ImageSlider from "../../OurFirm/MeetTheTeam/ImageSlider";
import image1 from "../../../assets/img/whoweServe.jpg";
import PeopleWeServe from "./PeopleWeServe";
import ScheduleMeeting from "../../OurFirm/MeetTheTeam/ScheduleMeeting";

const slidersImage = { image: image1, title: "Who We Serve" };
const WhoWeServe = () => {
  return (
    <>
      <ImageSlider image={slidersImage} />
      <PeopleWeServe />
      <ScheduleMeeting />
    </>
  );
};

export default WhoWeServe;
