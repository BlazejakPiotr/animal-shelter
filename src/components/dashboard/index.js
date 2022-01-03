import {
  Col,
  Container,
  Row,
  Table,
  Button,
  Form,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Dashboard</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Col className="d-flex justify-content-between mb-3">
            <Form>
              <Row>
                <Col>
                  <Form.Control type="text" placeholder="ID/Imie/CHIP" />
                </Col>
                <Col>
                  <Form.Select>
                    <option value="Dowolne">Dowolne zwierzę</option>
                    <option value="Pies">Pies</option>
                    <option value="Kot">Kot</option>
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Select>
                    <option value="Dowolne">Dowolna płeć</option>
                    <option value="Samiec">Samiec</option>
                    <option value="Samica">Samica</option>
                  </Form.Select>
                </Col>
                <Col>
                  <Row>
                    <Col>
                      <Form.Control type="number" placeholder="Wiek od" />
                    </Col>
                    <Col>
                      <Form.Control type="number" placeholder="Wiek do" />
                    </Col>
                  </Row>
                </Col>
                <Col xs={1} className="d-flex justify-content-end">
                  <Button variant="dark">Szukaj</Button>
                </Col>
              </Row>
            </Form>
          </Col>
          <PetsList />
        </Col>
      </Row>
      <Row>
        {" "}
        <Col xs={2}>
          <Link to="add">
            <Button variant="dark">Utwórz</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export const PetsList = () => {
  return (
    <Table striped bordered hover variant="light">
      <thead>
        <tr>
          <th>#</th>
          <th>Zwierzę</th>
          <th>Imię</th>
          <th>Płeć</th>
          <th>Wiek</th>
          <th>ID</th>
          <th>Data przyjęcia</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Pies</td>
          <td>Burek</td>
          <td>Samiec</td>
          <td>4 lata</td>
          <td>325AFS72bSD67</td>
          <td>2022/01/01</td>
        </tr>
      </tbody>
    </Table>
  );
};

export const PetDetails = () => {
  return (
    <div style={{ backgroundColor: "#e4edf0" }}>
      <Container>
        
        <Row className="py-5 justify-content-center">
          
          <Col xs={12} lg={9}>
            <div className="mb-4 p-0"><Button>Powrót</Button></div>
            <Form>
              <div className="pet-details-container row">
                <h3 className="mb-4">Dodaj zwierzaka</h3>
                <Col xs={12} md={5} style={{marginRight: "2.5rem"}}>
                  <FormGroup className="mb-3">
                    <FormLabel>Zwierzę</FormLabel>
                    <Form.Select className="">
                      <option value="Pies">Pies</option>
                      <option value="Kot">Kot</option>
                    </Form.Select>
                  </FormGroup>
                  <Row>
                    <Col>
                      <FormGroup className="mb-3">
                        <FormLabel>Wiek</FormLabel>
                        <Form.Control type="number" />
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup className="mb-3">
                        <FormLabel>Data przyjęcia</FormLabel>
                        <Form.Control type="date" className="" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup className="mb-3">
                    <FormLabel>ID</FormLabel>
                    <Form.Control type="text" disabled className="" />
                  </FormGroup>

                  <FormGroup className="mb-3">
                    <FormLabel>CHIP</FormLabel>
                    <Form.Control type="text" className="" />
                  </FormGroup>
                  <Form.Group className="mb-3">
                    <Form.Label>Zdjęcia</Form.Label>
                    <Form.Control type="file" multiple />
                  </Form.Group>
                </Col>

                <Col>
                  <FormGroup className="mb-3">
                    <FormLabel>Imie</FormLabel>
                    <Form.Control type="text" />
                  </FormGroup>
                  <Form.Group className="mb-3">
                    <Form.Label>Opis</Form.Label>
                    <Form.Control as="textarea" rows={12} />
                  </Form.Group>
                </Col>
                <Col xs={12} className="d-flex justify-content-between">
                  <Button variant="danger">Usuń</Button>
                  <Button>Zapisz</Button>
                </Col>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
