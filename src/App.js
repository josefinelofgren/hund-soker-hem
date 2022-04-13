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
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        <div className="content-wrap">
          <Routes>
            <Route exact path="/hund-soker-hem" element={<LandingPage />}></Route>
            <Route path="/hund-soker-hem/hitta-min-match" element={<FindMatch />}></Route>
            <Route
              path="/hund-soker-hem/hitta-min-match/matchningar"
              element={<MatchedDogs />}
            ></Route>
            <Route
              path="/hund-soker-hem/intresseanmalan/:name"
              element={<RegistrationOfInterest />}
            ></Route>
            <Route
              path="/hund-soker-hem/tillgangliga-hundar"
              element={<AvailableDogs />}
            ></Route>
            <Route
              path="/hund-soker-hem/tillgangliga-hundar/:name"
              element={<SelectedDog />}
            ></Route>
            <Route path="/hund-soker-hem/att-adoptera" element={<AboutAdoption />}></Route>
            <Route path="/hund-soker-hem/var-verksamhet" element={<OurBusiness />}></Route>
            <Route path="/hund-soker-hem/bli-manadsgivare" element={<MonthlyDonor />}></Route>
          </Routes>
        </div>
        <Sponsors />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
