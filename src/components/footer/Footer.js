// import libaries 
import React, { useLayoutEffect } from 'react';

//import components
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function Footer() {

  const { t } = useTranslation('translation', {keyPrefix: 'footer'});

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });


  return (
    <div className='footer'>
        <Container fluid>
            <Row>
                <Col sm='3'>
                  <h4>{t('company-title')}</h4>
                  <p>{t('company-description')}</p>
                </Col>
                <Col sm='3'>
                  <h4>{t('contact-title')}</h4>
                  <p>
                    {t('contact-company')}
                    <br />
                    {t('contact-name')}
                    <br />
                    {t('contact-address')}
                    <br />
                    {t('contact-zipcode')}
                  </p>
                </Col>
                <Col sm='3'>
                  <h4>{t('donate-title')}</h4>
                  <h6>{t('donate-subtitle')}</h6>
                  <p>
                    {t('donate-bankgiro')}
                    <br/> 
                    {t('donate-swish')}
                  </p>
                </Col>
                <Col sm='3'>
                  <h4>{t('social-media-title')}</h4>
                </Col>
            </Row>
        </Container> 
    </div>
  );
}

export default Footer;
