// import libaries 
import React from 'react';
import { useTranslation } from 'react-i18next';

//import components
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from '../buttons/Button';

function Nav({ sidebar, setSidebar }) {

  const { t } = useTranslation('translation', {keyPrefix: 'navbar'});

  return (
    <Navbar>
      <Container fluid>
        <Navbar.Brand>
            Paw Patrol
        </Navbar.Brand>
        <div className='links'>
          <li>
            Hundarna
          </li>
          <li>
            Verksamheten
          </li>
          <Button label={t('btn')} color='secondary'/> 
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
