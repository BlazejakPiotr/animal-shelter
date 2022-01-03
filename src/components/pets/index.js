import { Container, Row, Col, Form } from "react-bootstrap";
import Pet from "../Pet";
import PetCard from "./petcard";

export const PetFilters = () => {
  return (
    <Form>
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Zwierzę</Form.Label>
            <Col>
              <Form.Select>
                <option value="Dowolne">Dowolne</option>
                <option value="Pies">Pies</option>
                <option value="Kot">Kot</option>
              </Form.Select>
            </Col>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Płeć</Form.Label>
            <Col>
              <Form.Select>
                <option value="Dowolne">Dowolna</option>
                <option value="Samiec">Samiec</option>
                <option value="Samica">Samica</option>
              </Form.Select>
            </Col>
          </Form.Group>
        </Col>
        <Col md={6} lg={2}>
          <Form.Group className="mb-3">
            <Form.Label>Wiek</Form.Label>
            <Row>
              <Col>
                <Form.Control type="number" placeholder="od" />
              </Col>
              <Col>
                <Form.Control type="number" placeholder="do" />
              </Col>
            </Row>
          </Form.Group>
        </Col>
        <Col md={9} lg={4}>
          <Form.Group className="mb-3">
            <Form.Label>Szukaj według</Form.Label>
            <Row>
              <Col xs={4} lg={4}>
                <Form.Select>
                  <option value="name">Imie</option>
                  <option value="chip">Numer chipu</option>
                  <option value="id">ID</option>
                </Form.Select>
              </Col>
              <Col xs={8} lg={8}>
                <Form.Control type="text" />
              </Col>
            </Row>
          </Form.Group>
        </Col>
        <Col className="d-flex justify-content-end align-items-center">
          <button>Szukaj</button>
        </Col>
      </Row>
    </Form>
  );
};

export const PetsList = () => {
  let petsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <Container>
      <Row className="pet-list">
        {petsArr.map((pet, index) => (
          <Col xs={6} md={4} lg={3} className="mb-3">
            <PetCard key={index} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
