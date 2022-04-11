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
      path: "/tillgangliga-hundar",
    },
    {
      label: "Att adoptera",
      path: "/att-adoptera",
    },
    {
      label: "Vår verksamhet",
      path: "/var-verksamhet",
    },
    {
      label: "Bli månadsgivare",
      path: "/bli-manadsgivare",
    },
  ];

  const sublinks = [
    {
      label: "Kontakt",
      path: "/kontakt",
    },
    {
      label: "Integritetspolicy",
      path: "/integritetspolicy",
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
