// import libaries
import React, { useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";

//import components
import { Container, Row, Col } from "react-bootstrap";

function AboutAdoption() {
  // scroll to top when routing
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const { t } = useTranslation("translation", { keyPrefix: "about-adoption" });

  return (
    <div className="about-adoption">
      <div className="about">
        <div className="dog-header">
          <Row>
            <Col lg="6">
              <figure className="dog-img">
                <img
                  src={require("../../assets/images/about-adoption.png")}
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
                    <p>{t("description")}</p>
                    <p>
                      Har du <span>tiden</span>, <span>ekonomin</span> och{" "}
                      <span>intresset</span> att ge en hund en andra chans till
                      det liv den förtjänar?
                    </p>
                  </Row>
                  <Row></Row>
                </Container>
              </div>
            </Col>
          </Row>
        </div>
        <Container fluid>
          <Row>
            <div className="article">
              <h4>{t("subtitle-one")}</h4>
              <p>{t("text-one")}</p>
            </div>
            <div className="article">
              <h4>{t("subtitle-two")}</h4>
              <p>{t("text-two-part-one")}</p>
              <p className="question mb">
                <span>{t("dot")}</span> {t("question-one")}
              </p>
              <p className="question mb">
                <span>{t("dot")}</span> {t("question-two")}
              </p>
              <p className="question mb">
                <span>{t("dot")}</span> {t("question-three")}
              </p>
              <p className="question mb">
                <span>{t("dot")}</span> {t("question-four")}
              </p>
              <p className="question">
                <span>{t("dot")}</span> {t("question-five")}
              </p>
              <p>{t("text-two-part-two")}</p>
            </div>
            <div className="article">
              <h4>{t("subtitle-three")}</h4>
              <p>{t("text-three")}</p>
            </div>
            <div className="article">
              <h4>{t("subtitle-four")}</h4>
              <p>
                {t("text-four")} Då är du varmt välkommen att göra en{" "}
                <span className="pink">generell intresseanmälan här </span>{" "}
                eller <span className="pink">hitta din match här</span> via vårt
                matchningssystem som tar fram de hundar som matchar dig och din
                livsstil baserat på ett frågeformulär.
              </p>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default AboutAdoption;
