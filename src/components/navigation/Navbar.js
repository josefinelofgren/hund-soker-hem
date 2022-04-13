// import libaries
import React, { useState, useEffect } from "react";

//import components
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import arrowDown from "../../assets/svg/arrow-down.svg";
import { getWindowDimensions } from "../../components/window-dimensions/window-dimensions";

function Nav({ sidebar, setSidebar }) {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Navbar>
      <Container fluid>
        <Navbar.Brand>
          <Link to={"/hund-soker-hem"}>
            <figure>
              <img
                src={require("../../assets/svg/logo-pink.svg").default}
                alt="Icon dog"
              />
            </figure>
          </Link>
        </Navbar.Brand>
        <div className="links">
          {windowDimensions.width >= 1100 && (
            <div className="extra-links">
              <Link to={"/hund-soker-hem/tillgangliga-hundar"}>
                <li>
                  Hundarna
                  <figure>
                    <img src={arrowDown} alt="Arrow Down" />
                  </figure>
                </li>
              </Link>
              <Link to={"/hund-soker-hem/att-adoptera"}>
                <li>
                  Att adoptera
                  <figure>
                    <img src={arrowDown} alt="Arrow Down" />
                  </figure>
                </li>
              </Link>
              <Link to={"/hund-soker-hem/var-verksamhet"}>
                <li>
                  Vår verksamhet
                  <figure>
                    <img src={arrowDown} alt="Arrow Down" />
                  </figure>
                </li>
              </Link>
            </div>
          )}
          <Link
            to="#"
            className="navbar-btn"
            onClick={() => setSidebar(!sidebar)}
          >
            <div className="navbar-burger" />
          </Link>
        </div>
      </Container>
    </Navbar>
  );
}

export default Nav;
