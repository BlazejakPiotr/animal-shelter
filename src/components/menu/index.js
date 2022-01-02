import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import logo from "../../logo.png";

export const TopNavbar = () => {
  return (
    <Navbar expand="lg" className="home">
      <Container className="top-navbar">
        <div className="logo-container">
          <img src={logo} alt="logo" /> <h4>Miejskie Schronisko</h4>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="/">Strona główna</Nav.Link>

            <NavDropdown title="Nasze zwierzaki">
              <NavDropdown.Item href="">Link 1</NavDropdown.Item>
              <NavDropdown.Item href="">Link 2</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="O nas">
              <NavDropdown.Item href="">Link 1</NavDropdown.Item>
              <NavDropdown.Item href="">Link 2</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/">Jak pomóc</Nav.Link>
            <Nav.Link href="/">Kontakt</Nav.Link>
            <div className="zaginione-btn">
              <Nav.Link href="/">Zaginione</Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
