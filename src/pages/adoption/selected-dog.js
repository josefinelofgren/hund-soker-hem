// import libaries
import React, { useLayoutEffect, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

//import components
import { Container, Row, Col } from "react-bootstrap";
import Button from "../../components/buttons/button";

// fetch
// const selected_dog_URI = "http://localhost:8080/available-dogs/selected-dog";
const selected_dog_URI =
  "https://hund-soker-hem.herokuapp.com/available-dogs/selected-dog";

function SelectedDog() {
  // scroll to top when routing
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  let params = useParams();
  let path = params.name;
  const [selectedDog, setSelectedDog] = useState({});
  const [imgPath, setImgPath] = useState("loading.png");
  const [imgPath1, setImgPath1] = useState("loading.png");
  const [imgPath2, setImgPath2] = useState("loading.png");
  const [imgPath3, setImgPath3] = useState("loading.png");

  let selectedDogPath = {
    path: path,
  };

  useEffect(() => {
    fetch(selected_dog_URI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selectedDogPath),
    })
      .then((res) => res.json())
      .then((result) => {
        setSelectedDog(result);
        setImgPath(result.img);
        setImgPath1(result.img1);
        setImgPath2(result.img2);
        setImgPath3(result.img3);
      });
  }, []);

  return (
    <div className="selected-dog">
      <div className="dog">
        <div className="dog-header">
          <Row>
            <Col lg="6">
              <figure className="dog-img">
                <img
                  src={require(`../../assets/images/${imgPath}`)}
                  alt={`Hunden ${selectedDog.name}`}
                />
              </figure>
            </Col>
            <Col lg="6">
              <div className="info">
                <Container fluid>
                  <Row>
                    <h3>{selectedDog.name}</h3>
                    <div className="border"></div>
                  </Row>
                  <Row>
                    <Col sm="6">
                      <div className="grid-container">
                        <div className="grid-item sm">
                          <figure>
                            <img
                              src={
                                require("../../assets/svg/icon-paw.svg").default
                              }
                              alt="Icon dog"
                            />
                          </figure>
                        </div>
                        <div className="grid-item md">
                          <h6>Ras:</h6>
                          <p>{selectedDog.race}</p>
                        </div>
                      </div>
                      <div className="grid-container">
                        <div className="grid-item sm">
                          <figure>
                            <img
                              src={
                                require("../../assets/svg/icon-paw.svg").default
                              }
                              alt="Icon dog"
                            />
                          </figure>
                        </div>
                        <div className="grid-item md">
                          <h6>Ålder:</h6>
                          <p>{selectedDog.age}</p>
                        </div>
                      </div>
                      <div className="grid-container">
                        <div className="grid-item sm">
                          <figure>
                            <img
                              src={
                                require("../../assets/svg/icon-paw.svg").default
                              }
                              alt="Icon dog"
                            />
                          </figure>
                        </div>
                        <div className="grid-item md">
                          <h6>Kön:</h6>
                          <p>{selectedDog.sex}</p>
                        </div>
                      </div>
                      <div className="grid-container">
                        <div className="grid-item sm">
                          <figure>
                            <img
                              src={
                                require("../../assets/svg/icon-paw.svg").default
                              }
                              alt="Icon dog"
                            />
                          </figure>
                        </div>
                        <div className="grid-item md">
                          <h6>Aktivitetsnivå:</h6>
                          <p>{selectedDog.activityLevel}</p>
                        </div>
                      </div>
                      <div className="grid-container">
                        <div className="grid-item sm">
                          <figure>
                            <img
                              src={
                                require("../../assets/svg/icon-paw.svg").default
                              }
                              alt="Icon dog"
                            />
                          </figure>
                        </div>
                        <div className="grid-item md">
                          <h6>Mankhöjd:</h6>
                          <p>{selectedDog.height}</p>
                        </div>
                      </div>
                    </Col>
                    <Col sm="6">
                      <div className="grid-container">
                        <div className="grid-item sm">
                          <figure>
                            <img
                              src={
                                require("../../assets/svg/icon-paw.svg").default
                              }
                              alt="Icon dog"
                            />
                          </figure>
                        </div>
                        <div className="grid-item md">
                          <h6>Vikt:</h6>
                          <p>{selectedDog.weight}</p>
                        </div>
                      </div>
                      <div className="grid-container">
                        <div className="grid-item sm">
                          <figure>
                            <img
                              src={
                                require("../../assets/svg/icon-paw.svg").default
                              }
                              alt="Icon dog"
                            />
                          </figure>
                        </div>
                        <div className="grid-item md">
                          <h6>Kan bo med barn:</h6>
                          <p>{selectedDog.kidsSpecification}</p>
                        </div>
                      </div>
                      <div className="grid-container">
                        <div className="grid-item sm">
                          <figure>
                            <img
                              src={
                                require("../../assets/svg/icon-paw.svg").default
                              }
                              alt="Icon dog"
                            />
                          </figure>
                        </div>
                        <div className="grid-item md">
                          <h6>Kan bo med katter:</h6>
                          <p>{selectedDog.catsSpecification}</p>
                        </div>
                      </div>
                      <div className="grid-container">
                        <div className="grid-item sm">
                          <figure>
                            <img
                              src={
                                require("../../assets/svg/icon-paw.svg").default
                              }
                              alt="Icon dog"
                            />
                          </figure>
                        </div>
                        <div className="grid-item md">
                          <h6>Kan bo med andra hundar:</h6>
                          <p>{selectedDog.dogsSpecification}</p>
                        </div>
                      </div>
                      <div className="grid-container">
                        <div className="grid-item sm">
                          <figure>
                            <img
                              src={
                                require("../../assets/svg/icon-paw.svg").default
                              }
                              alt="Icon dog"
                            />
                          </figure>
                        </div>
                        <div className="grid-item md">
                          <h6>Personlighet:</h6>
                          <p>{selectedDog.personality}</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
          </Row>
        </div>
        <Container fluid>
          <Row>
            <Col lg="6">
              <h5>Om {selectedDog.name}:</h5>
              <p>{selectedDog.description}</p>
              <h5>Vi söker:</h5>
              <p>{selectedDog.description}</p>
              <h5>Kontaktperson:</h5>
              <p>{selectedDog.contact}</p>
              <Button
                label={`Jag vill träffa ${selectedDog.name}`}
                color={"primary"}
                disabled={true}
                path={`/intresseanmalan/${path}`}
              />
            </Col>
            <Col lg="6">
              <div className="grid-container-images">
                <figure className="grid-item-image">
                  <img
                    src={require(`../../assets/images/${imgPath1}`)}
                    alt={`Hunden ${selectedDog.name}`}
                  />
                </figure>
                <figure className="grid-item-image">
                  <img
                    src={require(`../../assets/images/${imgPath2}`)}
                    alt={`Hunden ${selectedDog.name}`}
                  />
                </figure>
                <figure className="grid-item-image">
                  <img
                    src={require(`../../assets/images/${imgPath3}`)}
                    alt={`Hunden ${selectedDog.name}`}
                  />
                </figure>
              </div>
            </Col>
          </Row>
          <Row>
            <Link to="/tillgangliga-hundar">
              <div className="link">Tillbaka</div>
            </Link>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default SelectedDog;
