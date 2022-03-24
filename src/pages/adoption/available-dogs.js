// import libaries 
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

//import components
import { Container, Row, Col } from 'react-bootstrap';
import Button from '../../components/buttons/button';

function AvailableDogs() {

  const { t } = useTranslation('translation', {keyPrefix: 'available-dogs'});

  const dogs = [
    {
      name: 'Bruno',
      path: 'bruno',
      age: '1 år',
      city: 'Stockholm',
      race: 'Staffordshire Bullterrier',
      sex: 'Hane',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.Phasellus eget convallis lectus. Sed mollis viverra. Suspendisse id lorem diam. Lorem ipsum dolor sit amet.'
    },
    {
        name: 'Bruno',
        path: 'bruno',
        age: '1 år',
        city: 'Stockholm',
        race: 'Staffordshire Bullterrier',
        sex: 'Hane',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.Phasellus eget convallis lectus. Sed mollis viverra. Suspendisse id lorem diam. Lorem ipsum dolor sit amet.'
      },
      {
        name: 'Bruno',
        path: 'bruno',
        age: '1 år',
        city: 'Stockholm',
        race: 'Staffordshire Bullterrier',
        sex: 'Hane',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.Phasellus eget convallis lectus. Sed mollis viverra. Suspendisse id lorem diam. Lorem ipsum dolor sit amet.'
      },
  ]

  return (
    <div className='available-dogs'>
        <div className='prewords'>
            <Container fluid>
                <h3>{t('title')}</h3>
                <p>{t('description')}</p>
                <h5>{t('subtitle-two')}</h5>
                <p>{t('text-two')}</p>
                <h5>{t('subtitle-one')}</h5>
                <p>{t('text-one')}</p>
                <Button label={t('find-match')} color={'tertiary'} />
            </Container>
        </div>
        <div className='dogs'>
            <Container fluid>
                <h3 className='title'>{t('available-dogs-title')}</h3>
                <Row>
                    {dogs.map((dog, index) => {
                        return (
                            <Col md='6'>
                                <Dog 
                                  name={dog.name}
                                  race={dog.race}
                                  age={dog.age}
                                  description={dog.description}
                                  sex={dog.sex}
                                  city={dog.city}
                                  img={dog.img}
                                  path={dog.path}/> 
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    </div>
  );
}

function Dog ({ name, race, path, age, description, sex, city, img }) {
    return (
        <div className='dog'>
            <div className='container'>
                <figure>
                    <img src={img} alt='Tillgänglig hund för adoption' />
                </figure>
                <h4>{city}</h4>
                <h3>{name}</h3>
                <h5>Ras: <span>{race}</span> </h5>
                <h5>Ålder: <span>{age}</span> </h5>
                <h5>Kön: <span>{sex}</span> </h5>
                <br />
                <h6>Om {name}: <span>{description}</span></h6>
                <Link to={`/tillgangliga-hundar/${path}`}><h6 className='read-more'>Läs mer..</h6></Link>

            </div>
        </div>

    )
}

export default AvailableDogs;
