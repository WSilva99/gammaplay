import { Row, Col, Alert } from "react-bootstrap";

export default function Table({title, items}) {
  
  return (
    <>
      <div>
        { (items.length > 0)
          ?(
            <Row className="g-4 mt-3">
              {items.map(item => {
                return (
                  <Col className="col-12" key={item.id}>
                    <div className="card mb-2">
                      <div className="row g-0">
                        <div className="col-4" style={{height: "200px", overflow: "hidden"}}>
                          <img  
                            className="img-fluid rounded-start"
                            alt="..."
                            src={item.image}
                            style={{objectFit: "cover", height: "100%", width: "100%", backgroundColor: "#000"}}
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.description}</p>
                            <p className="card-text"><small className="text-muted">Criado em {item.createAt}</small></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          )
          :(
            <Alert variant="warning" className="mt-4">
              Nenhum {title} cadastrado.
            </Alert>
          )
        }
      </div>
    </>
  );
}