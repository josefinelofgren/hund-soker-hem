// import libaries 
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

//import components
import Button from '../buttons/Button';
import { Col, Row } from 'react-bootstrap';
import drop from '../../assets/svg/drop.svg';


function AdoptionProcess() {

  const { t } = useTranslation('translation', {keyPrefix: 'adoption-process'});

  const [state, setState] = useState('one');

  return (
    <Row>
        <Col lg='6' className='img-col'>
            <figure>
                <img src={require('../../assets/images/match-img.png')} alt='Dog' /> 
            </figure>
        </Col>
        <Col lg='6'>
            <div className='content'>
            <h3>{t('adoption-process-title')}</h3>
                <div className='adoption-process-content'>
                <Row>
                    <figure className='drop'>
                        <img className={state  === 'one' ? 'is-active' : ''}src={drop} alt='Drop Pattern' /> 
                    </figure>
                    <div onClick={() => setState('one')} className='adoption-process-step one'>
                            <h3 className={state === 'one' ? 'is-active' : ''}>{t('adoption-process-step-one-number')}</h3>
                        <div className='title'>
                            <h4 className={state === 'one' ? 'is-active' : ''}>{t('adoption-process-step-one-title')}</h4>
                            <div className={state === 'one' ? 'border is-active' : 'border'}></div>
                        </div>
                            <p className={state === 'one' ? 'is-active' : ''}>{t('adoption-process-step-one-text')}</p>
                    </div>
                </Row>
                <Row>
                    <figure className='drop'>
                        <img className={state  === 'two' ? 'is-active' : ''}src={drop} alt='Drop Pattern' /> 
                    </figure>
                    <div onClick={() => setState('two')} className='adoption-process-step two'>
                            <h3 className={state === 'two' ? 'is-active' : ''}>{t('adoption-process-step-two-number')}</h3>
                        <div className='title'>
                            <h4 className={state === 'two' ? 'is-active' : ''}>{t('adoption-process-step-two-title')}</h4>
                            <div className={state === 'two' ? 'border is-active' : 'border'}></div>
                        </div>
                            <p className={state === 'two' ? 'is-active' : ''}>{t('adoption-process-step-two-text')}</p>
                    </div>
                </Row>
                <Row>
                    <figure className='drop'>
                        <img className={state  === 'three' ? 'is-active' : ''}src={drop} alt='Drop Pattern' /> 
                    </figure>
                    <div onClick={() => setState('three')} className='adoption-process-step three'>
                            <h3 className={state === 'three' ? 'is-active' : ''}>{t('adoption-process-step-three-number')}</h3>
                        <div className='title'>
                            <h4 className={state === 'three' ? 'is-active' : ''}>{t('adoption-process-step-three-title')}</h4>
                            <div className={state === 'three' ? 'border is-active' : 'border'}></div>
                        </div>
                            <p className={state === 'three' ? 'is-active' : ''}>{t('adoption-process-step-three-text')}</p>
                    </div>
                </Row>
            </div>
            </div>
            <Button label={t('adoption-process-btn')} size='md' color='tertiary' /> 
        </Col>
    </Row>
  );
}

export default AdoptionProcess;
