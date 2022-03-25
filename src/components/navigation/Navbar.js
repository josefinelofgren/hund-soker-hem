// import libaries 
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

//import components
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from '../buttons/button';
import arrowDown from '../../assets/svg/arrow-down.svg';
import { getWindowDimensions } from '../../components/window-dimensions/window-dimensions';


function Nav({ sidebar, setSidebar }) {

  const { t } = useTranslation('translation', {keyPrefix: 'navbar'});

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
  
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Navbar>
      <Container fluid>
        <Navbar.Brand>
            Paw Patrol
        </Navbar.Brand>
        <div className='links'>
        {windowDimensions.width >= 1100 && (
          <div className='extra-links'>
            <Link to={'/tillgangliga-hundar'}>
            <li>
              Hundarna 
              <figure>
                <img src={arrowDown} alt='Arrow Down'/> 
              </figure>
            </li>
            </Link>
            <Link to={'/att-adoptera'}>
            <li>
              Att adoptera 
              <figure>
                <img src={arrowDown} alt='Arrow Down'/> 
              </figure>
            </li>
            </Link>
            <Link to={'/var-verksamhet'}>
            <li>
              Vår verksamhet
              <figure>
                <img src={arrowDown} alt='Arrow Down'/> 
              </figure>
            </li>
            </Link>
            <Button label={t('btn')} color='tertiary' size='sm'/> 
          </div>
           )}
          <Link
            to='#'
            className={sidebar ? `sidebar-btn is-active` : `sidebar-btn`}
            onClick={() => setSidebar(!sidebar)}>
            <div className={sidebar ? `sidebar-burger is-active`: `sidebar-burger`} />
        </Link>
        </div>        
      </Container>
    </Navbar>
  );
}

export default Nav;
