// import libaries
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

//import components
import { Container, Row, Col } from "react-bootstrap";
import DonationForm from "../../components/forms/donation-form";
import Button from "../../components/buttons/button";
import Header from "../../components/header/header";
import AdoptionProcess from "../../components/adoption-process/adoption-process";
import { getWindowDimensions } from "../../components/window-dimensions/window-dimensions";

function LandingPage() {
  const { t } = useTranslation("translation", { keyPrefix: "landing-page" });

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
    <>
      <Header />
      <div className="intro">
        <Container fluid>
          <Row>
            <Col md="8">
              <h3>{t("intro-title")}</h3>
              <p>{t("intro-text")}</p>
            </Col>
            <Col md="4">
              <figure>
                <img
                  src={require("../../assets/svg/home-icon.svg").default}
                  alt="Icon dog"
                />
              </figure>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="adoption-process">
        <Container fluid>
          <AdoptionProcess />
        </Container>
      </div>
      <div className="homeless-dogs">
        <Container fluid>
          <div className="first-row">
            <Row>
              <Col md="6">
                <h3>{t("homeless-dogs-title")}</h3>
                <p>{t("homeless-dogs-text")}</p>
              </Col>
              <Col md="6">
                <img
                  src={require("../../assets/images/dogs.png")}
                  alt="Homless Dogs"
                />
              </Col>
            </Row>
          </div>
          {windowDimensions.width >= 768 ? (
            <Row>
              <Col md="6">
                <img
                  src={require("../../assets/images/paws.png")}
                  alt="Homless Dogs"
                />
              </Col>
              <Col md="6">
                <h3>{t("support-us-title")}</h3>
                <p>{t("support-us-text")}</p>
                <Button
                  label={t("support-us-btn")}
                  size="md"
                  color="secondary"
                  path="/hund-soker-hem/bli-manadsgivare"
                />
              </Col>
            </Row>
          ) : (
            <Row>
              <Col md="6">
                <h3>{t("support-us-title")}</h3>
                <p>{t("support-us-text")}</p>
                <Button
                  label={t("support-us-btn")}
                  size="md"
                  color="secondary"
                  path="/hund-soker-hem/bli-manadsgivare"
                />
              </Col>
              <Col md="6">
                <img
                  src={require("../../assets/images/paws.png")}
                  alt="Homless Dogs"
                />
              </Col>
            </Row>
          )}
        </Container>
      </div>
      <div className="monthly-donor landing-page">
        <Container fluid>
          <h3>{t("monthly-donor-title")}</h3>
          <p className="text">{t("monthly-donor-text")}</p>
          <h6>{t("monthly-donor-subtitle")}</h6>
          <DonationForm />
          <input
            type="submit"
            value="Vidare till dina uppgifter"
            className="button no-icon primary"
          />
        </Container>
      </div>
    </>
  );
}

export default LandingPage;
