// import libaries
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import components
import Nav from "./components/navigation/navbar";
import Sidebar from "./components/navigation/sidebar";
import Footer from "./components/footer/footer";
import Sponsors from "./components/sponsors/sponsors";

// import pages
import LandingPage from "./pages/home/landing-page";
import FindMatch from "./pages/adoption/find-match";
import AvailableDogs from "./pages/adoption/available-dogs";
import RegistrationOfInterest from "./pages/adoption/registration-of-interest";
import MatchedDogs from "./pages/adoption/matched-dogs";
import SelectedDog from "./pages/adoption/selected-dog";
import AboutAdoption from "./pages/adoption/about-adoption";
import OurBusiness from "./pages/business/our-business";
import MonthlyDonor from "./pages/support/monthly-donor";

function App() {
  // show or hide sidebar
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="App">
      <Router>
        <Nav sidebar={sidebar} setSidebar={setSidebar} />
        <Sidebar sidebar={sidebar} setSidebar={setSidebar}/>
        <div className="content-wrap">
          <Routes>
            <Route exact path="/" element={<LandingPage />}></Route>
            <Route path="/hitta-min-match" element={<FindMatch />}></Route>
            <Route
              path="/hitta-min-match/matchningar"
              element={<MatchedDogs />}
            ></Route>
            <Route
              path="/intresseanmalan/:name"
              element={<RegistrationOfInterest />}
            ></Route>
            <Route
              path="/tillgangliga-hundar"
              element={<AvailableDogs />}
            ></Route>
            <Route
              path="/tillgangliga-hundar/:name"
              element={<SelectedDog />}
            ></Route>
            <Route path="/att-adoptera" element={<AboutAdoption />}></Route>
            <Route path="/var-verksamhet" element={<OurBusiness />}></Route>
            <Route path="/bli-manadsgivare" element={<MonthlyDonor />}></Route>
          </Routes>
        </div>
        <Sponsors /> 
        <Footer />
      </Router>
    </div>
  );
}

export default App;
