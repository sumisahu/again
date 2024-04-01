import React from "react";
import ImageSlider from "../MeetTheTeam/ImageSlider";
import image1 from "../../../assets/img/ourPhilosophy.jpg";
import image2 from "../../../assets/img/ourPhilosophy.jpg";
import PhilosophyTypes from "./PhilosophyTypes";
import ScheduleMeeting from "../MeetTheTeam/ScheduleMeeting";
import PhilosophyOverview from "./PhilosophyOverview";

const slidersImage = { image: image1, title: "Our Philosophy" };

const OurPhilosophy = () => {
  return (
    <>
      <ImageSlider image={slidersImage} />
      <PhilosophyOverview />
      <PhilosophyTypes />
      <ScheduleMeeting />
    </>
  );
};

export default OurPhilosophy;
