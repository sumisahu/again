import ImageSlider from "../../OurFirm/MeetTheTeam/ImageSlider";
import image1 from "../../../assets/img/planning.jpg";
import OurFrameWork from "./OurFrameWork";
import StagesOfPlanning from "./StagesOfPlanning";
import ApwPromise from "../../OurFirm/OurFiduciaryPromise/ApwPromise";
import whatIsPlanning from "../../../assets/img/whatisPlanning.jpg";
import ScheduleMeeting from "../../OurFirm/MeetTheTeam/ScheduleMeeting";

const slidersImage = { image: image1, title: "Planning Process" };
const data_For_APW = {
  heading: "Financial Planning Process. What Is It ?",
  highlighthead: `Planning`,
  desc: [
    `One methodical way to manage one's resources is through the financial planning process.`,
    `It entails assessing a person's or family's present financial status, determining financial objectives, formulating a strategy to reach those objectives, carrying out the plan, and routinely reviewing and modifying the plan as necessary.`,
    `People can use this technique to make a plan for reaching their financial goals.`,
  ],
  image: whatIsPlanning,
};

const PlanningProcess = () => {
  return (
    <>
      <ImageSlider image={slidersImage} />
      <ApwPromise data={data_For_APW} />
      <OurFrameWork />
      <StagesOfPlanning />
      <ScheduleMeeting />
    </>
  );
};

export default PlanningProcess;
