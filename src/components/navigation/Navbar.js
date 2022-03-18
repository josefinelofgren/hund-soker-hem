// import libaries 
import React, { useLayoutEffect } from 'react';

//import components
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Nav({ sidebar, setSidebar }) {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });


  return (
    <Navbar>
      <Container fluid>
        <Navbar.Brand>
            Paw Patrol
        </Navbar.Brand>
        <Link
            to='#'
            className={sidebar ? `sidebar-btn is-active` : `sidebar-btn`}
            onClick={() => setSidebar(!sidebar)}>
            <div className={sidebar ? `sidebar-burger is-active`: `sidebar-burger`} />
        </Link>
      </Container>
    </Navbar>
  );
}

export default Nav;
