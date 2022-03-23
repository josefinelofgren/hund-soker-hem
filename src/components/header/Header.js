// import libaries 
import React from 'react';
import { useTranslation } from 'react-i18next';

//import components
import Button from '../buttons/Button';
import { Container, Row } from 'react-bootstrap';


function Header() {

  const { t } = useTranslation('translation', {keyPrefix: 'header'});

  return (
    <div className='header'>
        <Container fluid>
            <Row>
                <div className='content'>
                    <h1>{t('title')}</h1>
                    <p>{t('text')}</p>
                    <Button label={t('btn')} color={'primary'} /> 
                </div>
                <figure className='image'>
                    <img src={require('../../assets/images/header-img.png')} alt='Dog'/> 
                </figure>
            </Row>
        </Container>
    </div>
  );
}

export default Header;
