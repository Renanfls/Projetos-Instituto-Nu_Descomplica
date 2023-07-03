// Header padrão em todas as págs
"use client";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export const HeaderPartial = () => (
  <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">DescomPin</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/minhas-pastas">
            Minhas pastas
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
