// import libaries
import React, { useEffect, useState, useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import * as Scroll from "react-scroll";

//import components
import { Container, Row, Col } from "react-bootstrap";
import { store } from "../../redux/store";

// fetch
const matched_dogs_URI = "http://localhost:8080/available-dogs/matched-dogs";
// const matched_dogs_URI = 'https://diskrid-server.herokuapp.com/available-dogs/matched-dogs';

function MatchedDogs() {
  // scroll to top when routing
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const { t } = useTranslation("translation", { keyPrefix: "matched-dogs" });
  const [dogs, setDogs] = useState([]);
  const filter = store.getState().filter;
  const LinkScroll = Scroll.Link;

  useEffect(() => {
    fetch(matched_dogs_URI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filter),
    })
      .then((res) => res.json())
      .then((result) => {
        setDogs(result);
      });

    console.log(filter);
  }, []);

  return (
    <div className="matched-dogs">
      <div className="prewords">
        <Container fluid>
          <h3>{t("title")}</h3>
          <p>{t("description")}</p>
          <h5>{t("subtitle-two")}</h5>
          <p>{t("text-two")}</p>
        </Container>
      </div>
      <div id="dogs" className="dogs">
        <Container fluid>
          <h3 className="title">{t("matched-dogs-title")}</h3>
          <Row>
            {dogs.map((dog, index) => {
              return (
                <Col md="6" key={index}>
                  <Dog
                    name={dog.name}
                    race={dog.race}
                    age={dog.age}
                    description={dog.description}
                    sex={dog.sex}
                    city={dog.city}
                    img={dog.img}
                    path={dog.path}
                  />
                </Col>
              );
            })}
          </Row>
          <Row>
            <LinkScroll to="dogs">
              <div className="link">Tillbaka till toppen</div>
            </LinkScroll>
          </Row>
        </Container>
      </div>
    </div>
  );
}

function Dog({ name, race, path, age, description, sex, city, img }) {
  return (
    <div className="dog">
      <div className="container">
        <figure>
          <img
            src={require(`../../assets/images/${img}`)}
            alt="Tillgänglig hund för adoption"
          />
        </figure>
        <h4>{city}</h4>
        <h3>{name}</h3>
        <h5>
          Ras: <span>{race}</span>{" "}
        </h5>
        <h5>
          Ålder: <span>{age}</span>{" "}
        </h5>
        <h5>
          Kön: <span>{sex}</span>{" "}
        </h5>
        <br />
        <h6>
          Om {name}: <span>{description}</span>
        </h6>
        <Link to={`/tillgangliga-hundar/${path}`}>
          <h6 className="read-more link">Läs mer..</h6>
        </Link>
      </div>
    </div>
  );
}

export default MatchedDogs;
