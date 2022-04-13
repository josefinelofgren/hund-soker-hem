// import libaries
import React, { useState, useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";

//import components
import { Container, Row } from "react-bootstrap";
import Button from "../../components/buttons/button";
import { store } from "../../redux/store";
import { setMatchingFilter } from "../../redux/actions";

function FindMatch() {
  const { t } = useTranslation("translation", { keyPrefix: "find-match" });

  // scroll to top when routing
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [kids, setKids] = useState(JSON.parse(localStorage.getItem("kids")));
  const [stateQuestion1, setStateQuestion1] = useState(
    JSON.parse(localStorage.getItem("question1"))
  );
  const [stateQuestion2, setStateQuestion2] = useState(
    localStorage.getItem("question2")
  );
  const [stateQuestion3, setStateQuestion3] = useState(
    localStorage.getItem("question3")
  );
  const [stateQuestion4, setStateQuestion4] = useState(
    JSON.parse(localStorage.getItem("question4"))
  );
  const [stateQuestion5, setStateQuestion5] = useState(
    localStorage.getItem("question5")
  );

  const handleSubmit = () => {
    let matchingFilter = {
      kids: stateQuestion2,
      dogs: stateQuestion3,
      cats: stateQuestion4,
      activityLevel: stateQuestion5,
    };

    localStorage.setItem("matchingFilter", JSON.stringify(matchingFilter));
    localStorage.getItem("matchingFilter");

    store.dispatch(setMatchingFilter(matchingFilter));
  };

  const handleKids = (value) => {
    localStorage.setItem("kids", value);
    localStorage.setItem("question1", value);
    setKids(value);
    setStateQuestion1(value);
  };

  return (
    <>
      <div className="find-match">
        <div className="dog-header">
          <Container fluid>
            <Row>
              <h5>{t("subtitle")}</h5>
              <h2>{t("title")}</h2>
              <p className="description">{t("description")}</p>
            </Row>
          </Container>
        </div>
        <Container fluid>
          <div className="row">
            <h6>{t("question-title-1")}</h6>
            <div className="grid-container">
              <div className="option" onClick={() => handleKids(false)}>
                <button
                  id="question-1-option-1"
                  onClick={() => {
                    setStateQuestion2("nej");
                    localStorage.setItem("question2", "nej");
                  }}
                  className={
                    stateQuestion1 === false
                      ? `input-btn is-active`
                      : `input-btn`
                  }
                  type="submit"
                >
                  {t("question-1-option-1")}
                </button>
              </div>
              <div className="option" onClick={() => handleKids(true)}>
                <button
                  id="question-1-option-2"
                  className={
                    stateQuestion1 === true
                      ? `input-btn is-active`
                      : `input-btn`
                  }
                  type="submit"
                >
                  {t("question-1-option-2")}
                </button>
              </div>
            </div>
          </div>
          <div className={kids ? "row kids is-active" : "row kids"}>
            <h6>{t("question-title-2")}</h6>
            <div className="grid-container">
              <div className="option">
                <button
                  id="question-2-option-1"
                  onClick={() => {
                    setStateQuestion2("ja");
                    localStorage.setItem("question2", "ja");
                  }}
                  className={
                    stateQuestion2 === "ja"
                      ? `input-btn is-active`
                      : `input-btn`
                  }
                  type="submit"
                >
                  {t("question-2-option-1")}
                </button>
              </div>
              <div className="option">
                <button
                  id="question-2-option-2"
                  onClick={() => {
                    setStateQuestion2("från 7");
                    localStorage.setItem("question2", "från 7");
                  }}
                  className={
                    stateQuestion2 === "från 7"
                      ? `input-btn is-active`
                      : `input-btn`
                  }
                  type="submit"
                >
                  {t("question-2-option-2")}
                </button>
              </div>
              <div className="option">
                <button
                  id="question-2-option-3"
                  onClick={() => {
                    setStateQuestion2("från 12");
                    localStorage.setItem("question2", "från 12");
                  }}
                  className={
                    stateQuestion2 === "från 12"
                      ? `input-btn is-active`
                      : `input-btn`
                  }
                  type="submit"
                >
                  {t("question-2-option-3")}
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <h6>{t("question-title-3")}</h6>
            <div className="grid-container">
              <div className="option">
                <button
                  id="question-3-option-1"
                  onClick={() => {
                    setStateQuestion3("nej");
                    localStorage.setItem("question3", "nej");
                  }}
                  className={
                    stateQuestion3 === "nej"
                      ? `input-btn is-active`
                      : `input-btn`
                  }
                  type="submit"
                >
                  {t("question-3-option-1")}
                </button>
              </div>
              <div className="option">
                <button
                  id="question-3-option-2"
                  onClick={() => {
                    setStateQuestion3("tikar");
                    localStorage.setItem("question3", "tikar");
                  }}
                  className={
                    stateQuestion3 === "tikar"
                      ? `input-btn is-active`
                      : `input-btn`
                  }
                  type="submit"
                >
                  {t("question-3-option-2")}
                </button>
              </div>
              <div className="option">
                <button
                  id="question-3-option-3"
                  onClick={() => {
                    setStateQuestion3("hanar");
                    localStorage.setItem("question3", "hanar");
                  }}
                  className={
                    stateQuestion3 === "hanar"
                      ? `input-btn is-active`
                      : `input-btn`
                  }
                  type="submit"
                >
                  {t("question-3-option-3")}
                </button>
              </div>
              <div className="option">
                <button
                  id="question-3-option-4"
                  onClick={() => {
                    setStateQuestion3("ja");
                    localStorage.setItem("question3", "ja");
                  }}
                  className={
                    stateQuestion3 === "ja"
                      ? `input-btn is-active`
                      : `input-btn`
                  }
                  type="submit"
                >
                  {t("question-3-option-4")}
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <h6>{t("question-title-4")}</h6>
            <div className="grid-container">
              <div className="option">
                <button
                  id="question-4-option-1"
                  onClick={() => {
                    setStateQuestion4(false);
                    localStorage.setItem("question4", false);
                  }}
                  className={
                    stateQuestion4 === false
                      ? `input-btn is-active`
                      : `input-btn`
                  }
                  type="submit"
                >
                  {t("question-4-option-1")}
                </button>
              </div>
              <div className="option">
                <button
                  id="question-4-option-2"
                  onClick={() => {
                    setStateQuestion4(true);
                    localStorage.setItem("question4", true);
                  }}
                  className={
                    stateQuestion4 === true
                      ? `input-btn is-active`
                      : `input-btn`
                  }
                  type="submit"
                >
                  {t("question-4-option-2")}
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <h6>{t("question-title-5")}</h6>
            <div className="grid-container">
              <div className="option">
                <button
                  id="question-5-option-1"
                  onClick={() => {
                    setStateQuestion5("Låg");
                    localStorage.setItem("question5", "Låg");
                  }}
                  className={
                    stateQuestion5 === "Låg"
                      ? `input-btn is-active`
                      : `input-btn`
                  }
                  type="submit"
                >
                  {t("question-5-option-1")}
                </button>
              </div>
              <div className="option">
                <button
                  id="question-5-option-2"
                  onClick={() => {
                    setStateQuestion5("Medium");
                    localStorage.setItem("question5", "Medium");
                  }}
                  className={
                    stateQuestion5 === "Medium"
                      ? `input-btn is-active`
                      : `input-btn`
                  }
                  type="submit"
                >
                  {t("question-5-option-2")}
                </button>
              </div>
              <div className="option">
                <button
                  id="question-5-option-3"
                  onClick={() => {
                    setStateQuestion5("Hög");
                    localStorage.setItem("question5", "Hög");
                  }}
                  className={
                    stateQuestion5 === "Hög"
                      ? `input-btn is-active`
                      : `input-btn`
                  }
                  type="submit"
                >
                  {t("question-5-option-3")}
                </button>
              </div>
            </div>
          </div>
          <br />
          <div className="submit" onClick={() => handleSubmit()}>
            <Button
              label={"Spara och hitta min match"}
              color={"primary"}
              path={"/hund-soker-hem/hitta-min-match/matchningar"}
            />
          </div>
        </Container>
      </div>
    </>
  );
}

export default FindMatch;
