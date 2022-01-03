import { Col, Container, Row, Table, Button, Form } from "react-bootstrap";

export const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Dashboard</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={2}>
          <Button variant="dark">Utwórz</Button>
        </Col>
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
    </Container>
  );
};

export const PetsList = () => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>ID</th>
          <th>Data przyjęcia</th>
          <th>Imię</th>
          <th>Płeć</th>
          <th>Wiek</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>325AFS72bSD67</td>
          <td>2022/01/01</td>
          <td>Burek</td>
          <td>suczka</td>
          <td>4 lata</td>
        </tr>
        <tr>
          <td>1</td>
          <td>325AFS72bSD67</td>
          <td>2022/01/01</td>
          <td>Burek</td>
          <td>suczka</td>
          <td>4 lata</td>
        </tr>
      </tbody>
    </Table>
  );
};

export const AddNewPet = () => {
  return (
    <Container>
      <Row>
        <Col className="text-dark">HFDUSAHFJHSFAH</Col>
      </Row>
    </Container>
  );
};
