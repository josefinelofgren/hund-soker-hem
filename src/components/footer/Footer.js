// import libaries
import React, { useLayoutEffect } from "react";

//import components
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import facebook from "../../assets/svg/facebook-icon.svg";
import instagram from "../../assets/svg/instagram-icon.svg";

function Footer() {
  const { t } = useTranslation("translation", { keyPrefix: "footer" });

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="footer">
      <Container fluid>
        <Row>
          <Col md="3">
            <h5>{t("company-title")}</h5>
            <p>{t("company-description")}</p>
          </Col>
          <Col md="3">
            <h5>{t("contact-title")}</h5>
            <p>
              {t("contact-company")}
              <br />
              {t("contact-name")}
              <br />
              {t("contact-address")}
              <br />
              {t("contact-zipcode")}
            </p>
          </Col>
          <Col md="3">
            <h5>{t("donate-title")}</h5>
            <h6>{t("donate-subtitle")}</h6>
            <p>
              {t("donate-bankgiro")}
              <br />
              {t("donate-swish")}
            </p>
          </Col>
          <Col md="3">
            <h5>{t("social-media-title")}</h5>
            <div className="social-icons">
              <figure>
                <img src={instagram} alt="Instagram Icon" />
              </figure>
              <figure>
                <img src={facebook} alt="Facebook Icon" />
              </figure>
            </div>
          </Col>
        </Row>
        <Row>
          <div className="copyright">
            <p>
              {t("copyright-name")}
              <br />
              {t("copyright-company")}
            </p>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
