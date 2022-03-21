// import libaries 
import React from 'react';
import { useTranslation } from 'react-i18next';

//import components
import { Container, Row, Col } from 'react-bootstrap';
import Sponsors from '../../components/sponsors/Sponsors';
import Button from '../../components/buttons/Button';
import Header from '../../components/header/Header';

function LandingPage() {

  const { t } = useTranslation('translation', {keyPrefix: 'landing-page'});

  return (
    <>
    <Header /> 
    <div className='intro'>
        <Container fluid>
          <Row>
            <Col md='8'>
              <h3>{t('intro-title')}</h3>
              <p>{t('intro-text')}</p>
            </Col>
            <Col md='4'>
              Logo
            </Col>
          </Row>
        </Container>
    </div>
    <div className='adoption-process'>
        <Container fluid>
            <Row>
              <Col md='6'>
                <img src={require('../../assets/images/match-img.png')} alt='Dog' /> 
              </Col>
              <Col md='6'>
                <h3>{t('adoption-process-title')}</h3>
                <div className='adoption-process-step one'>
                  <h4>{t('adoption-process-step-one-title')}</h4>
                  <div className='adoption-process-step-text one'>
                    <p>{t('adoption-process-step-one-text')}</p>
                  </div>
                </div>
                <div className='adoption-process-step two'>
                  <h4>{t('adoption-process-step-two-title')}</h4>
                  <div className='adoption-process-step-text two'>
                    <p>{t('adoption-process-step-two-text')}</p>
                  </div>
                </div>
                <div className='adoption-process-step three'>
                  <h4>{t('adoption-process-step-three-title')}</h4>
                  <div className='adoption-process-step-text three'>
                    <p>{t('adoption-process-step-three-text')}</p>
                  </div>
                </div>
                <Button label={t('adoption-process-btn')} size='md' color='tertiary' /> 
              </Col>
            </Row>
        </Container>
    </div>
    <div className='homeless-dogs'>
        <Container fluid>
          <Row>
            <Col md='6'>
              <h3>{t('homeless-dogs-title')}</h3>
              <p>{t('homeless-dogs-text')}</p>
            </Col>
            <Col md='6'>
              <img src={require('../../assets/images/dogs.png')} alt='Homless Dogs' /> 
            </Col>
          </Row>
          <Row>
            <Col md='6'>
              <img src={require('../../assets/images/paws.png')} alt='Homless Dogs' /> 
            </Col>
            <Col md='6'>
              <h3>{t('support-us-title')}</h3>
              <p>{t('support-us-text')}</p>
              <Button label={t('support-us-btn')} size='md' color='secondary' /> 
            </Col>
          </Row>
        </Container>
    </div>
    <div className='monthly-donor'>
        <Container fluid>
            <h3>{t('monthly-donor-title')}</h3>
            
        </Container>
    </div>
    <div className='sponsors'>
        <Container fluid>
            <h3>{t('sponsors-title')}</h3>
            <Sponsors /> 
        </Container>
    </div>
    </>
  );
}

export default LandingPage;
