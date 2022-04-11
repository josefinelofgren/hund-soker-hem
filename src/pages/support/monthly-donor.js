// import libaries
import React, { useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";

//import components
import { Container, Row, Col } from "react-bootstrap";
import DonationForm from "../../components/forms/donation-form";

function MonthlyDonor() {
  // scroll to top when routing
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const { t } = useTranslation("translation", { keyPrefix: "monthly-donor" });

  return (
    <div className="monthly-donor">
      <div className="dog-header">
        <Row>
          <Col lg="6">
            <figure className="dog-img">
              <img
                src={require("../../assets/images/monthly-donor.png")}
                alt={"En hund"}
              />
            </figure>
          </Col>
          <Col lg="6">
            <div className="info">
              <Container fluid>
                <Row>
                  <h3>{t("title")}</h3>
                  <div className="border"></div>
                  <p>{t("description-part-one")}</p>
                  <p>{t("description-part-two")}</p>
                  <p>
                    Har du frågor är du välkommen att kontakta oss på{" "}
                    <span className="pink">info@hundsokerhem.se</span>
                  </p>
                </Row>
                <Row></Row>
              </Container>
            </div>
          </Col>
        </Row>
      </div>
      <div className="">
        <Container fluid>
          <Row>
            <Col lg="6">
              <div className="info">
                <h3>{t("subtitle")}</h3>
                <p>{t("sub-description")}</p>
                <h5>{t("heading-one")}</h5>
                <p>{t("text-one")}</p>
              </div>
            </Col>
            <Col lg="6">
              <div className="donation-form">
                <h6>{t("monthly-donor-step-one")}</h6>
                <h5>{t("monthly-donor-form-title")}</h5>
                <DonationForm />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default MonthlyDonor;
