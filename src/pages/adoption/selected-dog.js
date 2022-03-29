// import libaries 
import React, { useLayoutEffect, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';

//import components
import { Container, Row, Col } from 'react-bootstrap';
import Button from '../../components/buttons/button';

// fetch 
const selected_dog_URI = 'http://localhost:8080/available-dogs/selected-dog';
// const selected_dog_URI = 'https://diskrid-server.herokuapp.com/available-dogs/selected-dog';


function SelectedDog() {

  // scroll to top when routing
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  const { t } = useTranslation('translation', {keyPrefix: 'available-dogs'});

  let params = useParams();
  let path = params.name;
  const[selectedDog, setSelectedDog] = useState({});

  let selectedDogPath = {
      path: path,
  }

  useEffect(() => {
    fetch(selected_dog_URI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedDogPath),
      })
      .then(res => res.json())
      .then(result => {
        setSelectedDog(result)
        console.log(result)
      })
  },[])

  return (
    <div className='selected-dog'>
        <div className='dog'>
                <Row>
                    <Col lg='6'>
                        <figure className='dog-img'>
                            <img src={selectedDog.img} alt={`Hunden ${selectedDog.name}`} /> 
                        </figure>
                    </Col>
                    <Col lg='6'>
                        <div className='info'>
                            <Container fluid>
                        <Row>
                            <h3>{selectedDog.name}</h3>
                            <div className='border'></div>
                        </Row>
                        <Row>
                            <Col md='6'>
                              <div className='grid-container'>
                                  <div className='grid-item sm'>
                                      <figure>
                                          icon
                                      </figure>
                                  </div>
                                  <div className='grid-item md'>
                                      <h5>Ras:</h5>
                                      <p>{selectedDog.race}</p>
                                  </div>    
                              </div>  
                              <div className='grid-container'>
                                  <div className='grid-item sm'>
                                      <figure>
                                          icon
                                      </figure>
                                  </div>
                                  <div className='grid-item md'>
                                      <h5>Ålder:</h5>
                                      <p>{selectedDog.age}</p>
                                  </div>    
                              </div> 
                              <div className='grid-container'>
                                  <div className='grid-item sm'>
                                      <figure>
                                          icon
                                      </figure>
                                  </div>
                                  <div className='grid-item md'>
                                      <h5>Kön:</h5>
                                      <p>{selectedDog.sex}</p>
                                  </div>    
                              </div> 
                              <div className='grid-container'>
                                  <div className='grid-item sm'>
                                      <figure>
                                          icon
                                      </figure>
                                  </div>
                                  <div className='grid-item md'>
                                      <h5>Aktivitetsnivå:</h5>
                                      <p>{selectedDog.activityLevel}</p>
                                  </div>    
                              </div> 
                              <div className='grid-container'>
                                  <div className='grid-item sm'>
                                      <figure>
                                          icon
                                      </figure>
                                  </div>
                                  <div className='grid-item md'>
                                      <h5>Mankhöjd:</h5>
                                      <p>{selectedDog.height}</p>
                                  </div>    
                              </div> 
                            </Col>
                            <Col md='6'>
                            <div className='grid-container'>
                                  <div className='grid-item sm'>
                                      <figure>
                                          icon
                                      </figure>
                                  </div>
                                  <div className='grid-item md'>
                                      <h5>Vikt:</h5>
                                      <p>{selectedDog.weight}</p>
                                  </div>    
                              </div>  
                              <div className='grid-container'>
                                  <div className='grid-item sm'>
                                      <figure>
                                          icon
                                      </figure>
                                  </div>
                                  <div className='grid-item md'>
                                      <h5>Kan bo med barn:</h5>
                                      <p>{selectedDog.kidsSpecification}</p>
                                  </div>    
                              </div> 
                              <div className='grid-container'>
                                  <div className='grid-item sm'>
                                      <figure>
                                          icon
                                      </figure>
                                  </div>
                                  <div className='grid-item md'>
                                      <h5>Kan bo med katter:</h5>
                                      <p>{selectedDog.catsSpecification}</p>
                                  </div>    
                              </div> 
                              <div className='grid-container'>
                                  <div className='grid-item sm'>
                                      <figure>
                                          icon
                                      </figure>
                                  </div>
                                  <div className='grid-item md'>
                                      <h5>Kan bo med andra hundar:</h5>
                                      <p>{selectedDog.dogsSpecification}</p>
                                  </div>    
                              </div> 
                              <div className='grid-container'>
                                  <div className='grid-item sm'>
                                      <figure>
                                          icon
                                      </figure>
                                  </div>
                                  <div className='grid-item md'>
                                      <h5>Personlighet:</h5>
                                      <p>{selectedDog.personality}</p>
                                  </div>    
                              </div>
                            </Col>
                        </Row>
                        </Container>
                        </div>
                    </Col>
                </Row>
                <Container fluid>
                    <Row>
                        <Col md='6'>
                            <h5>Om {selectedDog.name}:</h5>
                            <p>{selectedDog.description}</p>
                            <h5>Vi söker:</h5>
                            <p>{selectedDog.description}</p>
                            <h5>Kontaktperson:</h5>
                            <p>{selectedDog.contact}</p>
                            <Button label={`Jag vill träffa ${selectedDog.name}`} color={'primary'} disabled={true}/> 
                        </Col>
                        <Col md='6'>
                            <div className='grid-container-images'>
                                <figure className='grid-item-image'>
                                    <img src={selectedDog.img} alt={`Hunden ${selectedDog.name}`} /> 
                                </figure>
                                <figure className='grid-item-image'>
                                    <img src={selectedDog.img} alt={`Hunden ${selectedDog.name}`} /> 
                                </figure>
                                <figure className='grid-item-image'>
                                    <img src={selectedDog.img} alt={`Hunden ${selectedDog.name}`} /> 
                                </figure>
                            </div>

                        </Col>
                    </Row>
                </Container>
        </div>
    </div>
  );
}


export default SelectedDog;
