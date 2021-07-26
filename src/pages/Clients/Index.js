import { useEffect, useState } from "react";
import { Row, Col, Container, Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import Table from "../../components/Table/Index";

export default function Clients() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [ clientName, setclientName ] = useState('');
  const handleChangeClientName = (e) => setclientName(e.target.value);
  const [ clientImage, setclientImage ] = useState('');
  const handleChangeClientImage = (e) => setclientImage(e.target.value);
  const [ clientDescription, setclientDescription ] = useState('');
  const handleChangeClientDescription = (e) => setclientDescription(e.target.value);

  const [itemsTable, setItemsTable] = useState([]);

  useEffect(() => {
    let clients = JSON.parse(window.localStorage.getItem("mockedData")).clients;
    setItemsTable(clients);
  }, []);

  const clientSave = () => {
    let dataExample = JSON.parse(window.localStorage.getItem("mockedData"));
    let client = {
      name: clientName,
      image: clientImage,
      description: clientDescription
    }
    client.id = itemsTable[itemsTable.length - 1].id + 1;
    const date = new Date();
    client.createAt = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
    let clients = itemsTable;
    clients.push(client);
    setItemsTable(clients);
    dataExample.clients = clients;
    window.localStorage.setItem("mockedData", JSON.stringify(dataExample));
    setShow(false)
  };
    
  return (
    <>
      <Container>
        <section id="client-list" className="mt-5">
          <Row className="justify-content-between align-items-center">
            <Col className="col-auto">
              <h2 className="section-title"> Clientes </h2>
            </Col>
            <Col className="col-auto">
              <Button variant="primary" onClick={handleShow}>
                Cadastrar
              </Button>
            </Col>
          </Row>

          <Table title="Cliente" items={itemsTable} />

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                Cadastre um novo Cliento
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <InputGroup className="mb-3">
                <InputGroup.Text id="name">
                  Nome do Jogo
                </InputGroup.Text>
                <FormControl
                  placeholder="Ex. Minecraft"
                  aria-label="name"
                  aria-describedby="name"
                  value={clientName}
                  onChange={handleChangeClientName}
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text id="image">
                  Link da Imagem
                </InputGroup.Text>
                <FormControl
                  placeholder="Ex. https://wallpapercave.com/wp/wc1765288.jpg"
                  aria-label="image"
                  aria-describedby="image"
                  value={clientImage}
                  onChange={handleChangeClientImage}
                />
              </InputGroup>

              <InputGroup>
                <InputGroup.Text id="description">
                  Descrição
                </InputGroup.Text>
                <FormControl
                  as="textarea"
                  placeholder="Descreva um pouco sobre o jogo aqui."
                  aria-label="description"
                  aria-describedby="description"
                  value={clientDescription}
                  onChange={handleChangeClientDescription}
                />
              </InputGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={clientSave}>
                Cadastrar
              </Button>
            </Modal.Footer>
          </Modal>

        </section>

      </Container>
    </>
  );
}