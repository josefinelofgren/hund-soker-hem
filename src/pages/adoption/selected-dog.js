// import libaries 
import React, { useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

//import components
import { Container, Row, Col } from 'react-bootstrap';
import Button from '../../components/buttons/button';

function SelectedDog() {

  // scroll to top when routing
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  const { t } = useTranslation('translation', {keyPrefix: 'available-dogs'});

  const dog = {
      name: 'Bruno',
      path: 'bruno',
      age: '1 år',
      city: 'Stockholm',
      race: 'Staffordshire Bullterrier',
      sex: 'Hane',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.Phasellus eget convallis lectus. Sed mollis viverra. Suspendisse id lorem diam. Lorem ipsum dolor sit amet.',
      activityLevel: 'Hög',
      height: '50cm',
      weight: '20kg',
      kidsSpecification: 'Ja, barn över 12 år',
      cats: 'Nej',
      dogsSpecification: 'Tikar',
      personality: 'Kärleksfull och glad',
      img: require('../../assets/images/bruno.png'),
      contact: 'josefine@pawpatrol.se',
    };

  return (
    <div className='selected-dog'>
        <div className='dog'>
                <Row>
                    <Col lg='6'>
                        <figure className='dog-img'>
                            <img src={dog.img} alt={`Hunden ${dog.name}`} /> 
                        </figure>
                    </Col>
                    <Col lg='6'>
                        <div className='info'>
                            <Container fluid>
                        <Row>
                            <h3>{dog.name}</h3>
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
                                      <p>{dog.race}</p>
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
                                      <p>{dog.age}</p>
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
                                      <p>{dog.sex}</p>
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
                                      <p>{dog.activityLevel}</p>
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
                                      <p>{dog.height}</p>
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
                                      <p>{dog.weight}</p>
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
                                      <p>{dog.kidsSpecification}</p>
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
                                      <p>{dog.cats}</p>
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
                                      <p>{dog.dogsSpecification}</p>
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
                                      <p>{dog.personality}</p>
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
                            <h5>Om {dog.name}:</h5>
                            <p>{dog.description}</p>
                            <h5>Vi söker:</h5>
                            <p>{dog.description}</p>
                            <h5>Kontaktperson:</h5>
                            <p>{dog.contact}</p>
                            <Button label={`Jag vill träffa ${dog.name}`} color={'primary'} disabled={true}/> 
                        </Col>
                        <Col md='6'>
                            <div className='grid-container-images'>
                                <figure className='grid-item-image'>
                                    <img src={dog.img} alt={`Hunden ${dog.name}`} /> 
                                </figure>
                                <figure className='grid-item-image'>
                                    <img src={dog.img} alt={`Hunden ${dog.name}`} /> 
                                </figure>
                                <figure className='grid-item-image'>
                                    <img src={dog.img} alt={`Hunden ${dog.name}`} /> 
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
