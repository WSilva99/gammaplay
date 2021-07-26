import { useEffect, useState } from "react";
import { Row, Col, Container, Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import Table from "../../components/Table/Index";

export default function Products() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [ productName, setProductName ] = useState('');
  const handleChangeProdutName = (e) => setProductName(e.target.value);
  const [ productImage, setProductImage ] = useState('');
  const handleChangeProdutImage = (e) => setProductImage(e.target.value);
  const [ productDescription, setProductDescription ] = useState('');
  const handleChangeProdutDescription = (e) => setProductDescription(e.target.value);

  const [itemsTable, setItemsTable] = useState([]);

  useEffect(() => {
    let games = JSON.parse(window.localStorage.getItem("mockedData")).games;
    setItemsTable(games);
  }, []);

  const productSave = () => {
    let dataExample = JSON.parse(window.localStorage.getItem("mockedData"));
    let product = {
      name: productName,
      image: productImage,
      description: productDescription
    }
    product.id = itemsTable[itemsTable.length - 1].id + 1;
    const date = new Date();
    product.createAt = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
    let products = itemsTable;
    products.push(product);
    setItemsTable(products);
    dataExample.games = products;
    window.localStorage.setItem("mockedData", JSON.stringify(dataExample));
    setShow(false)
  };
  
  
  return (
    <>
      <Container>
        <section id="product-list" className="mt-5">
          <Row className="justify-content-between align-items-center">
            <Col className="col-auto">
              <h2 className="section-title"> Produtos </h2>
            </Col>
            <Col className="col-auto">
              <Button variant="primary" onClick={handleShow}>
                Cadastrar
              </Button>
            </Col>
          </Row>

          <Table title="Produto" items={itemsTable} />

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                Cadastre um novo Produto
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
                  value={productName}
                  onChange={handleChangeProdutName}
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
                  value={productImage}
                  onChange={handleChangeProdutImage}
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
                  value={productDescription}
                  onChange={handleChangeProdutDescription}
                />
              </InputGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={productSave}>
                Cadastrar
              </Button>
            </Modal.Footer>
          </Modal>

        </section>

      </Container>
    </>
  );
}