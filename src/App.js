import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Businesses from "./Pages/Services/Businesses";
import Individual from "./Pages/Services/Individual";
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Careers from "./Pages/Careers";

const App = () => {

  return (
    <div>
      <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/contactus" element={<ContactUs/>} />
          <Route path="/careers" element={<Careers/>} />
          <Route path="/businesses" element={<Businesses/>} />
          <Route path="/inidividual" element={<Individual/>} />
        </Routes>
        </BrowserRouter>
      
      </div>
    </div>
  );
};

export default App;
