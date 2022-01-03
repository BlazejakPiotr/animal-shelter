import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Pet = () => {
  const navigate = useNavigate();

  return (
    <div className="pet">
      <Container className="px-0 py-5">
        <Row className="mb-3">
          <Col className="d-flex justify-content-between">
            <button
              onClick={() => navigate(-1)}
              style={{
                padding: "0.75rem 1.5rem",
                color: "#FFF",
                marginLeft: "0px",
              }}
              className="zaginione-btn"
            >
              {"< "}Powrót
            </button>
            <button
              style={{
                padding: "0.75rem 1.5rem",
                backgroundColor: "#fff",
                color: "#000",
              }}
              className="zaginione-btn"
            >
              Udostępnij
            </button>
          </Col>
        </Row>
        <Row className="section-container" style={{ margin: "0px" }}>
          <Col xs={12} md={7} className="p-0">
            <img
              src="http://www.schronisko-lodz.pl/gfx/abase/abase_202201/31915_20220102_134531_018.jpg"
              alt="dog-photo"
              style={{
                width: "100%",
                maxHeight: "600px",
                objectFit: "cover",
                borderTopLeftRadius: "24px",
                borderBottomLeftRadius: "24px",
              }}
            />
          </Col>

          <Col
            style={{ padding: "3rem" }}
            className="d-flex flex-column justify-content-evenly"
          >
            <h4 className="text-center mb-3">Burek</h4>
            <div className="d-flex justify-content-between row">
              <Col lg={4}>
                <ul style={{ paddingLeft: "0px" }}>
                  <li className="d-flex justify-content-between">
                    Płeć:
                    <span style={{ fontWeight: "700" }}>suka</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    Wiek:
                    <span style={{ fontWeight: "700" }}>4 lata</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    Wielkość:
                    <span style={{ fontWeight: "700" }}>średni</span>
                  </li>
                </ul>
              </Col>

              <Col md={12} lg={7}>
                <ul style={{ paddingLeft: "0px" }}>
                  <li className="d-flex justify-content-between">
                    ID:
                    <span style={{ fontWeight: "700" }}>14212567</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    CHIP:
                    <span style={{ fontWeight: "700" }}>616093901677796</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    Data przyjęcia:
                    <span style={{ fontWeight: "700" }}>2022/01/01</span>
                  </li>
                </ul>
              </Col>
            </div>
            <h6>Opis:</h6>
            <p>
              Tempor Lorem dolore sit do reprehenderit officia Lorem sunt
              incididunt eu minim id et. Sunt eu laborum consectetur ullamco
              cupidatat tempor excepteur aliqua. Fugiat eu enim laboris fugiat
              velit irure nulla. Esse eu excepteur enim deserunt consequat
              laborum consequat qui labore aute. Nisi et do excepteur duis
              nostrud esse.
            </p>
            {/* <div className="d-flex justify-content-between">
              <Button
                variant="danger"
                style={{ padding: "0.75rem 1.5rem", marginRight: "2rem" }}
              >
                Delete
              </Button>
              <Button style={{ padding: "0.75rem 1.5rem" }}>Edytuj</Button>
            </div> */}
          </Col>
        </Row>
        <Row>
          <div className="pet-thumbnails">
            <img
              src="http://www.schronisko-lodz.pl/gfx/abase/abase_202201/31915_20220102_134531_003.jpg"
              alt="dog-thumbnail"
            />
            <img
              src="http://www.schronisko-lodz.pl/gfx/abase/abase_202201/31915_20220102_134531_001.jpg"
              alt="dog-thumbnail"
            />
            <img
              src="http://www.schronisko-lodz.pl/gfx/abase/abase_202201/31915_20220102_134531_002.jpg"
              alt="dog-thumbnail"
            />
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Pet;
