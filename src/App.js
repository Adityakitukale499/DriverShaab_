import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Businesses from "./Pages/Services/Businesses";
import Individual from "./Pages/Services/Individual";
import JoinasDriver from "./Pages/JoinasDriver";
import ScheduleDemo from "./Pages/ScheduleDemo"
import {
  Routes,
  Route,
  BrowserRouter,
  useLocation,
} from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Careers from "./Pages/Careers";
import './App.css'
import Footer from "./component/Footer";
import SplashScreen from "./component/SplashScreen";
import { createContext, useEffect, useRef, useState } from "react";
import SubmitedQuery from "./component/SubmitedQuery";
import { db } from "./firebase.config";
import UsersQuery from "./component/UserQuery";
import TermAndCondition from "./component/policyPages/TermAndCondition";
import RefundPolicy from "./component/policyPages/RefundPolicy";
import PrivacyPolicy from "./component/policyPages/PrivacyPolicy";

export const ScheduledemoContext = createContext()

const App = () => {
  const [splash, setSplash] = useState(true)
  const [scheduledemo, setScheduledemo] = useState(false)

  const location = useLocation()
  console.log(db)

  useEffect(()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' })
  },[])

  return (
    <div>
      <ScheduledemoContext.Provider value={{scheduledemo , setScheduledemo}}>
        {splash ? <SplashScreen setSplash={setSplash} /> :
          <div style={{ marginTop: '20px' }}>
            {location.pathname != '/querysubmit' && <Navbar />}
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/businesses" element={<Businesses />} />
              <Route path="/inidividual" element={<Individual />} />
              <Route path="/joinasdriver" element={<JoinasDriver />} />
              <Route path="/scheduledemo" element={<ScheduleDemo />} />
              <Route path="/querysubmit" element={<SubmitedQuery />} />
              <Route path="/querys" element={<UsersQuery />} />
              {/* polycy pages */}
              <Route path="/termandcondition" element={<TermAndCondition />} />
              <Route path="/refundpolicy" element={<RefundPolicy />} />
              <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            </Routes>
            {location.pathname != '/querysubmit' && <Footer />}
          </div>}
      </ScheduledemoContext.Provider>
    </div>
  );
};

export default App;
