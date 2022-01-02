import { Container, Row, Col } from "react-bootstrap";

export const Home = () => {
  return (
    <Row className="home mt-5">
      <Col lg={12} xl={6}>
        <h1>Miejskie Schronisko dla bezdomnych zwierząt w Katowicach</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
          aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis
          suscipit eaque repellat ipsum facere voluptate dicta obcaecati
          deserunt nobis suscipit eaque?
        </p>
      </Col>
      <Col lg={12} xl={6} className="photo-container">
        <img
          src="https://images.pexels.com/photos/2007/animal-dog-pet-cute.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="dog-photo"
        />
      </Col>
    </Row>
  );
};
