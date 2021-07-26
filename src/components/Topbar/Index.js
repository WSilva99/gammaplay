import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

export default function Topbar() {
  return (
    <>
      <Navbar variant="dark" fixed="top" bg="dark">
        <Container>
          <Row className="align-items-center justify-content-between" style={{width: "100%"}}>
            <Col xs="auto">
              <Navbar.Brand as="div">
                <Row className="align-items-center">
                  <Col xs="auto">
                    <img
                      alt=""
                      src={logo}
                      width="60"
                      height="60"
                    />
                  </Col>
                  <Col xs="auto">
                    React Bootstrap
                  </Col>
                </Row>
              </Navbar.Brand>
            </Col>
            <Col xs="auto">
              <Row className="align-items-center">
                <Col xs="auto">
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                </Col>
                <Col xs="auto">
                  <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav>
                        <Link to="/" className="nav-link">
                          LOJA
                        </Link>
                        <Link to="/products" className="nav-link">
                          PRODUTOS
                        </Link>
                        <Link to="/clients" className="nav-link">
                          CLIENTES
                        </Link>
                      </Nav>
                  </Navbar.Collapse>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
}