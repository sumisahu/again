import React, { lazy, Suspense, useEffect, useState} from "react";
  import axios from "axios";
 const Video = lazy(() => import("./Video"));
const FinancialPlaning = lazy(() => import("./FinancialPlaning"));
const BuildsConfidence = lazy(() => import("./BuildsConfidence"));
const ThreeCards = lazy(() => import("./ThreeCards"));
const ScheduleAMeeting = lazy(() => import("./ScheduleAMeeting"));


 
const Home = () => {
 const [data,setData]=useState('')
 
const fetchData = async () => {
  try {
    const result = await axios.get('http://localhost/wordpress/wp-json/wp/v2/home?acf_format=standard&_fields');
    setData(result.data[0].acf);
 
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
 
useEffect(() => {
  fetchData();
}, []);
 

  return (
     <Suspense fallback={<div>Loading...</div>}>
      <Video data={data} />
      <BuildsConfidence data={data}  />
      <FinancialPlaning data={data} />
      <ThreeCards />
      <ScheduleAMeeting />
    </Suspense>
   );
};

export default Home;
