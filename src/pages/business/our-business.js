// import libaries
import React, { useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";

//import components
import { Container, Row, Col } from "react-bootstrap";
import Button from "../../components/buttons/button";

function OurBusiness() {
  // scroll to top when routing
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const { t } = useTranslation("translation", { keyPrefix: "our-business" });

  return (
    <div className="our-business">
      <div className="business">
        <div className="dog-header">
          <Row>
            <Col lg="6">
              <figure className="dog-img">
                <img
                  src={require("../../assets/images/our-business.png")}
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
                    <p>
                      {t("description-part-one")} <span>{t("bold")}</span>{" "}
                      {t("description-part-two")}
                    </p>
                    <p>{t("description-part-three")}</p>
                  </Row>
                </Container>
              </div>
            </Col>
          </Row>
        </div>
        <Container fluid>
          <Row>
            <h4>{t("subtitle")}</h4>
            <p>
              {t("text-part-one")}{" "}
              <span className="pink">{t("bold-part-one")}</span>{" "}
              {t("text-part-two")}{" "}
              <span className="pink">{t("bold-part-two")}</span>{" "}
              {t("text-part-three")} <span className="pink">{t("email")}</span>
            </p>
            <p>{t("text-part-four")}</p>
            <Button
              label={t("monthly-donor-btn")}
              color={"primary"}
              path={"/hund-soker-hem/bli-manadsgivare"}
            />
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default OurBusiness;
