import { Row, Col, Card } from "react-bootstrap";

export default function GridCover({title, items}) {
  return (
    <>
      <h2 className="section-title"> { title } </h2>
      <Row className="g-4 mt-3 games-grid">
        { items.map(item => {
          return (
            <Col className="game-cover" key={item.id}>
              <Card>
                <Card.Img variant="top" src={ item.image } style={{height: "360px", width: "100%", objectFit: "cover"}} />
                <Card.Body className="game-info">
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