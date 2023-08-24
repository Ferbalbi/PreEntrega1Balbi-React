import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidgets from "../Cartwidget/Cartwidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
      <h1 className="titulo">Pergola Lenceria</h1>
      <Navbar expand="lg" className="nav-color">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 "
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#">Inicio</Nav.Link>
              <Nav.Link href="#">Mujeres</Nav.Link>
              <Nav.Link href="#">Hombres/Niños</Nav.Link>
              <Nav.Link href="#">Sobre Nosotros</Nav.Link>
              <Nav.Link href="#">Contacto</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Que estas buscando?"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
          <CartWidgets />
        </Container>
      </Navbar>
      <hr className="hr"></hr>
    </header>
  );
};

export default NavBar;
