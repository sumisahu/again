import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CircularWithValueLabel from "./Components/Progress/CircularWithValueLabel";
import { useLocation } from "react-router-dom";
   
const Home = lazy(() => import("./Components/Home/Home"));
const MeetTheTeam = lazy(() => import("./Components/OurFirm/MeetTheTeam/MeetTheTeam"));
 const NavBar = lazy(() => import("./Components/Home/NavBar"));
const SecondNavBar = lazy(() => import("./Components/Home/SecondNavBar"));
const Footer = lazy(() => import("./Components/Home/Footer"));
const ScheduleAtAllPages=lazy(()=>import('./Components/ScheduleButton/ScheduleAtAllPages'))
const Contact =lazy(()=>import('./Components/Contact/Contact'))
const OurPhilosophy =lazy(()=>import('./Components/OurFirm/OurPhilosophy/OurPhilosophy'))
const OurFiduciaryPromise=lazy(()=>import('./Components/OurFirm/OurFiduciaryPromise/OurFiduciaryPromise'))
const ApwBlog =lazy(()=>import('./Components/ApwBlog/ApwBlog'))
const FomrCRS =lazy(()=>import('./Components/AllForms/FormCRS'))
const Planning=lazy(()=>import('./Components/Services/PlanningProcess/PlanningProcess'))
const WhatWeOffer=lazy(()=>import('./Components/Services/WhatWeOffer/WhatWeOffer'))
const WhoWeServe =lazy(()=>import('./Components/Services/WhoWeServe/WhoWeServe'))
const BlogBrief=lazy(()=>import('./Components/ApwBlog/BlogBrief'))
function App() {

  function ScrollToTopOnLocationChange() {
    const location = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]);
  
    // Scroll to top when component mounts
    useEffect(() => {
      window.scrollTo(0, 0);
  
      // Scroll to top when the user refreshes the page
      const handleBeforeUnload = () => {
        window.scrollTo(0, 0,);
      };
  
      window.addEventListener('beforeunload', handleBeforeUnload);
  
      return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    }, []);
  
    return null;
  }
  
    
  
  return (
       <Router>
        <Suspense fallback={<div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'100vh'}}><CircularWithValueLabel /></div>}>
          <ScrollToTopOnLocationChange />
          <NavBar />
          <SecondNavBar />
          <Routes>
            <Route element={<Home />} exact path="/" />
            <Route element={<MeetTheTeam />}  path="/meet_the_team" />
            <Route element={<Contact />}  path="/contact" />
            <Route element={<OurPhilosophy />}  path="/our_philosophy" />
            <Route element={<OurFiduciaryPromise/>}  path="/our_fiduciary_promise" />
            <Route element={<ApwBlog/>}  path="/apw_blog" />
            <Route element={<FomrCRS/>}  path="/form_crs" />
            <Route element={<Planning/>}  path="/planning_process" />
            <Route element={<WhatWeOffer/>}  path="/what_we_offer" />
            <Route element={<WhoWeServe/>}  path="/who_we_serve" />
            <Route element={<BlogBrief/>}  path="/blogbrief/:id" />
          </Routes>
          <Footer />
          <ScheduleAtAllPages />
         </Suspense>
      </Router>
   );
}

export default App;
