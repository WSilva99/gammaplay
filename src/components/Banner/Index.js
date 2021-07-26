import { Carousel, Container } from "react-bootstrap";

export default function Banner({items}) {
  return (
    <>
      <Container>
        <section id="advertising">
          <Carousel>
            { items.map(item => {
              return (
                <Carousel.Item key={item.id}>
                  <img
                    className="d-block w-100"
                    src={item.image}
                    alt={item.name}
                    style={{objectFit: "cover", minWidth: "100%", height: "50vh"}}
                  />
                  <Carousel.Caption>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </section>
      </Container>
    </>
  );
}