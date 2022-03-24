// import libaries 
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

//import components
import { Container, Row, Col } from 'react-bootstrap';
import Sponsors from '../../components/sponsors/sponsors';
import Button from '../../components/buttons/button';
import InputButton from '../../components/buttons/input-button';
import InputNumber from '../../components/forms/number-input';
import Form from '../../components/forms/form';
import Header from '../../components/header/header';
import AdoptionProcess from '../../components/adoption-process/adoption-process';

function getWindowDimensions(){
  const { innerWidth: width, innerHeight: height } = window;
  return {
      width,
      height
  };
}

function LandingPage() {

  const { t } = useTranslation('translation', {keyPrefix: 'landing-page'});

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
  
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
            <AdoptionProcess />
        </Container>
    </div>
    <div className='homeless-dogs'>
        <Container fluid>
          <div className='first-row'>
          <Row>
            <Col md='6'>
              <h3>{t('homeless-dogs-title')}</h3>
              <p>{t('homeless-dogs-text')}</p>
            </Col>
            <Col md='6'>
              <img src={require('../../assets/images/dogs.png')} alt='Homless Dogs' /> 
            </Col>
          </Row>
          </div>
          {windowDimensions.width >= 768 ? (
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
          ):(
          <Row>
            <Col md='6'>
              <h3>{t('support-us-title')}</h3>
              <p>{t('support-us-text')}</p>
              <Button label={t('support-us-btn')} size='md' color='secondary' /> 
            </Col>
            <Col md='6'>
              <img src={require('../../assets/images/paws.png')} alt='Homless Dogs' /> 
            </Col>
          </Row>
          )}
        </Container>
    </div>
    <div className='monthly-donor'>
        <Container fluid>
            <h3>{t('monthly-donor-title')}</h3>
            <p className='text'>{t('monthly-donor-text')}</p>
            <h6>{t('monthly-donor-subtitle')}</h6>
            <InputButton currentState={'option-1'} label={t('monthly-donor-option-one')} /> 
            <InputButton currentState={'option-2'} label={t('monthly-donor-option-two')} /> 
            <InputButton currentState={'option-3'} label={t('monthly-donor-option-three')} /> 
            <br />
            <p className='inline'>{t('monthly-donor-option-text')}</p>
            <Form>
              <InputNumber />
              <p className='inline'>{t('monthly-donor-currency')}</p>
              <br /><br />
              <Button label={t('monthly-donor-btn')} color={'primary'} /> 
            </Form> 
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
