import image from "../../../assets/img/about_our_firm2.jpg";
import ImageSlider from "./ImageSlider";
import Persons from "./Persons";
import ScheduleMeeting from "./ScheduleMeeting";

const slidersImage = { image: image, title: "Meet Our Team" };

const MeetTheTeam = () => {
  return (
    <>
      <ImageSlider image={slidersImage} />
      <Persons />
      <ScheduleMeeting />
    </>
  );
};

export default MeetTheTeam;
