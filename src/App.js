// import libaries
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aos from "aos";

//import components
import Nav from "./components/navigation/navbar";
import Sidebar from "./components/navigation/sidebar";
import Footer from "./components/footer/footer";

// import pages
import LandingPage from "./pages/home/landing-page";
import FindMatch from "./pages/adoption/find-match";
import AvailableDogs from "./pages/adoption/available-dogs";
import MatchedDogs from "./pages/adoption/matched-dogs";
import SelectedDog from "./pages/adoption/selected-dog";
import AboutAdoption from "./pages/adoption/about-adoption";
import OurBusiness from "./pages/business/our-business";

function App() {
  // show or hide sidebar
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    Aos.init({
      duration: 600,
      easing: "ease-out",
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Nav sidebar={sidebar} setSidebar={setSidebar} />
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        <div className="content-wrap">
          <Routes>
            <Route exact path="/pawpatrol" element={<LandingPage />}></Route>
            <Route path="/pawpatrol/hitta-min-match" element={<FindMatch />}></Route>
            <Route
              path="/pawpatrol/hitta-min-match/matchningar"
              element={<MatchedDogs />}
            ></Route>
            <Route
              path="/pawpatrol/tillgangliga-hundar"
              element={<AvailableDogs />}
            ></Route>
            <Route
              path="/pawpatrol/tillgangliga-hundar/:name"
              element={<SelectedDog />}
            ></Route>
            <Route path="/pawpatrol/att-adoptera" element={<AboutAdoption />}></Route>
            <Route path="/pawpatrol/var-verksamhet" element={<OurBusiness />}></Route>
            <Route path="/pawpatrol/stod-oss" element={<LandingPage />}></Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
