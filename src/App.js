// import libaries 
import React, { useEffect, useState } from 'react';
import { 
  BrowserRouter as Router, 
  Routes,
  Route
 } from 'react-router-dom';
import Aos from 'aos';

//import components
import Nav from './components/navigation/Navbar';
import Sidebar from './components/navigation/Sidebar';
import Footer from './components/footer/Footer';
import LandingPage from './pages/home/LandingPage';


function App() {

  // show or hide sidebar   
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    Aos.init({ 
      duration: 600,
      easing: 'ease-out',
      anchorPlacement: 'top-bottom'
    });
}, []);

  return (
    <div className='App'>
    <Router>
      <Nav 
        sidebar={sidebar}
        setSidebar={setSidebar}
      />
      <Sidebar 
        sidebar={sidebar}
        setSidebar={setSidebar}
      /> 
      <div className='content-wrap'>
            <Routes>
                <Route 
                    exact path='/'
                    element={<LandingPage />}>
                </Route>
            </Routes>
      </div>
      <Footer /> 
     </Router>
</div>
  );
}

export default App;
