import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar style={{zIndex:1}} className="bg-body-tertiary position-fixed w-100">
        <Container>
          <Link to={'/'} style={{textDecoration:'none'}}>
          <Navbar.Brand className='fs-5'>
            <img
              alt=""
              src="./logo.png"
              width="35"
              height="35"
              className="d-inline-block align-top"
            />{' '}
            Spectrum
          </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
  )
}

export default Header