// import libaries 
import React from 'react';
import { useTranslation } from 'react-i18next';

//import components
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import facebook from '../../assets/svg/facebook-icon.svg';
import instagram from '../../assets/svg/instagram-icon.svg';

function Sidebar({ sidebar, setSidebar }) {

  const { t } = useTranslation('translation', {keyPrefix: 'navbar'});

  const links = [
      {
          label: 'Hundarna',
          path: '#',
      },
      {
        label: 'Vår verksamhet',
        path: '#',
      },
      {
        label: 'Stöd oss',
        path: '#',
      },
      {
        label: 'Sök',
        path: '#',
      },
  ]

  const sublinks = [
    {
        label: 'Kontakt',
        path: '#',
    },
    {
        label: 'Om oss',
        path: '#',
    },
    {
      label: 'Integritetspolicy',
      path: '#',
    }
]

  return (
    <nav className={sidebar ? 'sidebar-wrap open' : 'sidebar-wrap'}>
      <div className={sidebar ? 'sidebar open' : 'sidebar'}>
           <ul className='links'>
              {links.map((link, index) => { 
                 return (
                    <Link to='#'>
                        <li>{link.label}</li>
                        <div className='border'></div>
                    </Link>
                 )
             })}
           </ul>
           <div className='social-icons'>
               <figure>
                   <img src={instagram} alt='Instagram Icon' /> 
               </figure>
               <figure>
                   <img src={facebook} alt='Facebook Icon' /> 
               </figure>
           </div>
           <ul className='sublinks'>
             {sublinks.map((link, index) => { 
                 return (
                    <Link to='#'>
                        <li>{link.label}</li>
                    </Link>
                 )
             })}
           </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
