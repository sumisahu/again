import image1 from "../.././assets/img/apw1.jpg";
import ImageSlider from "../OurFirm/MeetTheTeam/ImageSlider";
import Blogs from "./Blogs";
import ScheduleMeeting from "../OurFirm/MeetTheTeam/ScheduleMeeting";
 

const slidersImage = { image: image1, title: "APW Blog" };

const ApwBlog = () => {
  return (
    <>
      <ImageSlider image={slidersImage} />
      <Blogs />
      <ScheduleMeeting />
     </>
  );
};

export default ApwBlog;
