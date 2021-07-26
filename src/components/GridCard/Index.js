import { Row, Col, Card } from "react-bootstrap";

export default function GridCard({title, items}) {
  return (
    <>
      <h2 className="section-title"> { title } </h2>
      <Row className="g-4 mt-3 games-grid">
        { items.map(item => {
          return (
            <Col className="gift-card" key={item.id}>
              <Card>
                <Card.Img variant="top" src="https://wallpapercave.com/wp/wc1765288.jpg" style={{height: "200px", width: "100%", objectFit: "cover", backgroundColor: "#000000"}} />
                <Card.Body className="gift-card-info">
                  <Card.Title>{ item.name }</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          );
        })};
      </Row>
    </>
  );
}