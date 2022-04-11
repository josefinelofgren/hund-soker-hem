// import libaries
import React from "react";
import { useTranslation } from "react-i18next";

//import components
import { Container, Row, Col } from "react-bootstrap";

function Sponsors() {
  const { t } = useTranslation("translation", { keyPrefix: "sponsors" });

  return (
    <div className="sponsors">
      <Container fluid>
      <h3>{t("title")}</h3>
        <Row>
          <Col sm="4">
            <figure>
              <img
                src={require("../../assets/images/sponsor1.png")}
                alt="Sponsor Lassie"
              />
            </figure>
          </Col>
          <Col sm="4">
            <figure>
              <img
                src={require("../../assets/images/sponsor2.png")}
                alt="Sponsor Monster"
              />
            </figure>
          </Col>
          <Col sm="4">
            <figure>
              <img
                src={require("../../assets/images/sponsor5.png")}
                alt="Sponsor Buddy Pet Food"
              />
            </figure>
          </Col>
        </Row>
        <Row>
          <Col sm="4">
            <figure>
              <img
                src={require("../../assets/images/sponsor4.png")}
                alt="Sponsor Svenska Djur Apoteket"
              />
            </figure>
          </Col>
          <Col sm="4">
            <figure>
              <img
                src={require("../../assets/images/sponsor3.png")}
                alt="Sponsor Hunter"
              />
            </figure>
          </Col>
          <Col sm="4">
            <figure>
              <img
                src={require("../../assets/images/sponsor6.png")}
                alt="Sponsor Arken Zoo"
              />
            </figure>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Sponsors;
