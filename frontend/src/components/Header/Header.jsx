import React from 'react'
import {Container, Row, Button} from 'reactstrap'
import {Navlink, Link} from 'react-router-dom'

import logo from '../../assets/images/logo.png'

const nav_links=[
  {
    path: '/home',
    display: 'Home'
  },
  {
   path:'#',
   display: 'About'
  },
  {
    path: '/tours',
    display: 'Tours'
  },
]

const Header = () => {
  return <header className="header">
    <Container>
      <Row>
        <div className="nav_wrapper d-flex align-items-center justify-content-between">
          {/*================== LOGO ================ */ }
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          {/*================== LOGO END ================ */ }
          {/*================== MENU START ================ */ }
          <div className="navigation">
            <ul className="menu d-flex align-items-center gap-5">
              {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <Navlink to {item.path}>{item.display}</Navlink>
                  </li>
                ))
              }
            </ul>
          </div>
          {/*================== MENU END ================ */ }
        </div>
      </Row>
    </Container>
  </header>
};

export default Header;