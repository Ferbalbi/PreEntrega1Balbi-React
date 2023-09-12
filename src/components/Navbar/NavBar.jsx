import { Link, NavLink } from "react-router-dom";
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
              <NavLink className="link-color" to="/">
                Inicio
              </NavLink>
              <NavLink className="link-color" to="/category/mujeres">
                Mujeres
              </NavLink>
              <NavLink className="link-color" to="/category/hombres">
                Hombres
              </NavLink>
              <NavLink className="link-color" to="/category/niños">
                Niños
              </NavLink>
              <NavLink className="link-color" to="#">
                Contacto
              </NavLink>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Que estas buscando?"
                className="me-2"
                aria-label="Search"
              />
              <Button className="boton-search" variant="outline-success">
                Search
              </Button>
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
