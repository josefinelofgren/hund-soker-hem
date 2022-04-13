// import libaries
import React from "react";
import { useTranslation } from "react-i18next";

//import components
import Button from "../buttons/button";
import { Container, Row } from "react-bootstrap";

function Header() {
  const { t } = useTranslation("translation", { keyPrefix: "header" });

  return (
    <div className="header">
      <Container fluid>
        <Row>
          <div className="content">
            <h1 className="title">{t("title")}</h1>
            <p>{t("text")}</p>
            <Button
              path={"/hund-soker-hem/hitta-min-match"}
              label={t("btn")}
              color={"primary"}
            />
          </div>
          <figure className="image">
            <img
              src={require("../../assets/images/header-img.png")}
              alt="Dog"
            />
          </figure>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
