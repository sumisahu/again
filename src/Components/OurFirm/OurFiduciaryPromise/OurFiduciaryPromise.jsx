import ImageSlider from "../MeetTheTeam/ImageSlider";
import image1 from "../../../assets/img/ourFiduciary.jpg";
import ApwPromise from "./ApwPromise";
import OneLinePromise from "./OneLinePromise";
import AllPromises from "./AllPromises";
import apwPromise from "../../../assets/img/apw_promise.jpg";
import ScheduleMeeting from "../MeetTheTeam/ScheduleMeeting";

const slidersImage = { image: image1, title: "Our Promise" };

const data_For_APW = {
  heading: "Alta Private Wealth is Committed to You",
  highlighthead: `Committed`,
  desc: [
    `We embrace the legal fiduciary obligation to place Clients’ interests first. Our advice and guidance is always rooted in our clients’ best interests, also known as fiduciary duty. We are proud and vigilant stewards of what has been entrusted to us.`,
    `Managing clients’ investments and financial health requires the utmost care, and it is a duty that we take very seriously. Financial conversations and details are deeply personal, and we treat all information shared with us with complete confidentiality.`,
  ],
  image: apwPromise,
};

const OurFiduciaryPromise = () => {
  return (
    <>
      <ImageSlider image={slidersImage} />
      <ApwPromise data={data_For_APW} />
      <OneLinePromise />
      <AllPromises />
      <ScheduleMeeting />
    </>
  );
};

export default OurFiduciaryPromise;
