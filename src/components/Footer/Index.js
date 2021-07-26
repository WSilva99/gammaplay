import { Container, Row, Col } from "react-bootstrap";

import logo from '../../assets/logo.svg';

export default function Footer() {
  return (
    <>
      <div style={{backgroundColor: "#101B37", color: "#FFFFFF"}}>
        <Container className="pt-2 pb-3">
          <Row>
            <Col>
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
              <Row>
                <Col>
                  Todos os direitos reservados para gammaplay.netlify.app
                </Col>
              </Row>
            </Col>
            <Col className="col-auto">
              <div>
                Nos acompanhe nas redes sociais.
              </div>
              <Row className="justify-content-around mt-3">
                <Col className="col-auto">
                  <a href="/">
                    <div className="media-link">
                      <i className="fab fa-facebook-f"></i>
                    </div>
                  </a>
                </Col>
                <Col className="col-auto">
                  <a href="/">
                    <div className="media-link">
                      <i className="fab fa-instagram"></i>
                    </div>
                  </a>
                </Col>
                <Col className="col-auto">
                  <a href="/">
                    <div className="media-link">
                      <i className="fab fa-twitter"></i>
                    </div>
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}