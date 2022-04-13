// import libaries
import React from "react";
import onClickOutside from "react-onclickoutside";

//import components
import { Link } from "react-router-dom";
import facebook from "../../assets/svg/facebook-icon.svg";
import instagram from "../../assets/svg/instagram-icon.svg";

function Sidebar({ sidebar, setSidebar }) {
  Sidebar.handleClickOutside = () => {
    setSidebar(false);
  };

  const links = [
    {
      label: "Hundarna",
      path: "/hund-soker-hem/tillgangliga-hundar",
    },
    {
      label: "Att adoptera",
      path: "/hund-soker-hem/att-adoptera",
    },
    {
      label: "Vår verksamhet",
      path: "/hund-soker-hem/var-verksamhet",
    },
    {
      label: "Bli månadsgivare",
      path: "/hund-soker-hem/bli-manadsgivare",
    },
  ];

  const sublinks = [
    {
      label: "Kontakt",
      path: "/hund-soker-hem/kontakt",
    },
    {
      label: "Integritetspolicy",
      path: "/hund-soker-hem/integritetspolicy",
    },
  ];

  return (
    <nav className={sidebar ? "sidebar-wrap open" : "sidebar-wrap"}>
      <Link
        to="#"
        className={sidebar ? "sidebar-btn is-active" : "sidebar-btn"}
        onClick={() => setSidebar(!sidebar)}
      >
        <div className="sidebar-burger" />
      </Link>
      <div className={sidebar ? "sidebar open" : "sidebar"}>
        <ul className="links">
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                onClick={() => setSidebar(!sidebar)}
                to={link.path}
                className={link.label}
              >
                <li>{link.label}</li>
                <div className="border"></div>
              </Link>
            );
          })}
        </ul>
        <div className="social-icons">
          <figure>
            <img src={instagram} alt="Instagram Icon" />
          </figure>
          <figure>
            <img src={facebook} alt="Facebook Icon" />
          </figure>
        </div>
        <ul className="sublinks">
          {sublinks.map((link, index) => {
            return (
              <Link to="#">
                <li>{link.label}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => Sidebar.handleClickOutside,
};

export default onClickOutside(Sidebar, clickOutsideConfig);
