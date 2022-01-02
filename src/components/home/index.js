import { Container, Row, Col } from "react-bootstrap";

export const Home = () => {
  return (
    <Row className="home mt-3">
      <Col lg={12} xl={6} className="d-flex flex-column pt-5 mt-5">
        <h1 className="mb-4">
          Miejskie Schronisko dla bezdomnych zwierząt <br />w Katowicach
        </h1>
        <p className="mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <div className="d-flex">
          <button>Sprawdź listę zwierzaków</button>
          <button>Poznaj zasady adopcji</button>
        </div>
      </Col>
      <Col lg={12} xl={6} className="pb-4">
        <div className="photo-container ">
          <div style={{ paddingRight: "2.5rem" }}>
            <img
              src="https://images.pexels.com/photos/5257628/pexels-photo-5257628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="dog-photo"
              style={{ minHeight: "65vh" }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "0",
              right: "0",
            }}
          >
            <img
              src="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="dog-photo"
              style={{ width: "450px", height: "400px" }}
            />
          </div>
        </div>
      </Col>
    </Row>
  );
};
