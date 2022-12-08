import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../images/boscobros.png"
import navStyle from "../style/nav.module.css"

const MainNavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
      <Navbar.Brand href="/">
            <img
              alt=""
              src={Logo}
              width="130"
              height="50"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className={navStyle.textColor} href="/">Home</Nav.Link>
            <Nav.Link className={navStyle.textColor} href="/brands">Brands</Nav.Link>
            <NavDropdown className={navStyle.textColor} title="Products" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/products/eye-protection">Eye Protection</NavDropdown.Item>
              <NavDropdown.Item href="/products/fall-protection">Fall Protection</NavDropdown.Item>
              <NavDropdown.Item href="/products/hearing-protection">Hearing Protection</NavDropdown.Item>
              <NavDropdown.Item href="/products/gloves">Gloves</NavDropdown.Item>
              <NavDropdown.Item href="/products/protective-clothing">Protective Clothing</NavDropdown.Item>
              <NavDropdown.Item href="/products/Boots">Boots</NavDropdown.Item>
              <NavDropdown.Item href="/products/hydration">Hydration</NavDropdown.Item>
              <NavDropdown.Item href="/products/respiratory">Respiratory</NavDropdown.Item>
              <NavDropdown.Item href="/products/tool-storage">Tool Storage</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/products">All Products</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link className={navStyle.textColor} href="/contact">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MainNavBar