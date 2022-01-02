import { Container, Row, Col, Carousel, Card, Button } from "react-bootstrap";
import { ContactForm } from "./contactform.js";

export const Home = () => {
  return (
    <Container>
      <Row className="home pt-4">
        <Col lg={12} xl={5} className="d-flex flex-column pt-5 mt-5">
          <h1 className="mb-4">
            Miejskie Schronisko
            <br /> dla bezdomnych zwierząt <br />w Katowicach
          </h1>
          <p className="mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <div className="d-flex">
            <button>Sprawdź listę zwierzaków</button>
            <button>Poznaj zasady adopcji</button>
          </div>
        </Col>
        <Col lg={12} xl={7} className="pb-4">
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
    </Container>
  );
};

export const About = () => {
  return (
    <Container>
      <Row className="p-0 section-container">
        <Col
          className="d-flex flex-column justify-content-between"
          style={{ padding: "3.5rem" }}
        >
          <h1 className="mb-4">O Schronisku</h1>
          <p>
            Miejskie Schronisko dla Bezdomnych Zwierząt działa już od końca lat
            80. Jest całkowicie finansowane przez Urząd Miasta w Katowicach.
            Schronisko jest umiejscowione na obrzeżach Dąbrówki Małej w
            Katowicach. Otoczone zielenią wtapia się w krajobraz, a zwierzęta
            zaznają tu ciszy i spokoju.
          </p>
          <p>
            W naszym schronisku przebywają zarówno psy jak i koty. Każde
            trafiające do schroniska zwierzę musi zostać poddane 14- dniowej
            kwarantannie. Jest to czas, w którym czekamy na odbiór zwierzaka
            przez właściciela, a także obserwujemy zwierzęta pod kątem chorób,
            ponieważ ich przeszłość jest nam nieznana. Gdy właściciel nie zgłosi
            się w ciągu 14 dni do schroniska prawowitym właścicielem zwierzaka
            staje się schronisko. Wtedy zwierzaki są przygotowywane do adopcji.
            Wykonywane są szczepienia, zabiegi kastracji/ sterylizacji, oceniamy
            dokładnie również charakter i cechy zwierzaka, które mogą wpływać na
            proces adopcji.
          </p>
          <div>
            <button>Dowiedz się więcej</button>
          </div>
        </Col>
        <Col className="p-0">
          <img
            src="https://images.pexels.com/photos/2252311/pexels-photo-2252311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="dog-photo"
            style={{
              width: "100%",
              maxHeight: "650px",
              objectFit: "cover",
              borderTopRightRadius: "24px",
              borderBottomRightRadius: "24px",
            }}
          />
        </Col>
      </Row>
      <Row className="py-5">
        <Col className="p-0">
          <Pupils />
        </Col>
      </Row>
    </Container>
  );
};

export const Pupils = () => {
  return (
    <>
      <h1 className="text-center my-5" style={{ color: "#444444" }}>
        Adoptuj pupila
      </h1>
      <Carousel controls={false}>
        <Carousel.Item>
          <Row>
            <Col className="d-flex justify-content-between">
              <PupilCard />
              <PupilCard />
              <PupilCard />
              <PupilCard />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col className="d-flex justify-content-between">
              <PupilCard />
              <PupilCard />
              <PupilCard />
              <PupilCard />
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
      <div className="text-center mt-5">
        <button>Sprawdź pełną listę</button>
      </div>
    </>
  );
};

export const PupilCard = () => {
  return (
    <Card className="pupil-card">
      <Card.Img
        variant="top"
        src="https://images.pexels.com/photos/2007/animal-dog-pet-cute.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <Card.Body className="pb-0">
        <Card.Title className="mt-2" style={{ fontWeight: "700" }}>
          Lucky
        </Card.Title>
        <Card.Text>
          <div className="d-flex justify-content-between">
            <ul>
              <li>Pies</li>
              <li>2 lata</li>
            </ul>
            <button
              style={{
                paddingTop: "0px",
                paddingBottom: "0px",
                height: "45px",
              }}
            >
              Więcej
            </button>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export const Help = () => {
  return (
    <Container className="py-5">
      <Row className=" p-0 section-container">
        <Col className="p-0">
          <img
            src="https://images.pexels.com/photos/8434635/pexels-photo-8434635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="dog-food-photo"
            style={{
              width: "100%",
              maxHeight: "650px",
              objectFit: "cover",
              borderTopLeftRadius: "24px",
              borderBottomLeftRadius: "24px",
            }}
          />
        </Col>
        <Col
          className="d-flex flex-column justify-content-between"
          style={{ padding: "3.5rem" }}
        >
          <h1 className="mb-4">Zbiórka jedzenia</h1>
          <p>
            Miejskie Schronisko dla Bezdomnych Zwierząt działa już od końca lat
            80. Jest całkowicie finansowane przez Urząd Miasta w Katowicach.
            Schronisko jest umiejscowione na obrzeżach Dąbrówki Małej w
            Katowicach. Otoczone zielenią wtapia się w krajobraz, a zwierzęta
            zaznają tu ciszy i spokoju.
          </p>
          <p>
            W naszym schronisku przebywają zarówno psy jak i koty. Każde
            trafiające do schroniska zwierzę musi zostać poddane 14- dniowej
            kwarantannie. Jest to czas, w którym czekamy na odbiór zwierzaka
            przez właściciela, a także obserwujemy zwierzęta pod kątem chorób,
            ponieważ ich przeszłość jest nam nieznana. Gdy właściciel nie zgłosi
            się w ciągu 14 dni do schroniska prawowitym właścicielem zwierzaka
            staje się schronisko. Wtedy zwierzaki są przygotowywane do adopcji.
            Wykonywane są szczepienia, zabiegi kastracji/ sterylizacji, oceniamy
            dokładnie również charakter i cechy zwierzaka, które mogą wpływać na
            proces adopcji.
          </p>
          <div>
            <button>Dowiedz się więcej</button>
          </div>
        </Col>
      </Row>
      <Row className="my-5 p-0 section-container">
        <Col
          className="d-flex flex-column justify-content-between"
          style={{ padding: "3.5rem" }}
        >
          <h1 className="mb-4">Wolontariat</h1>
          <p>
            Miejskie Schronisko dla Bezdomnych Zwierząt działa już od końca lat
            80. Jest całkowicie finansowane przez Urząd Miasta w Katowicach.
            Schronisko jest umiejscowione na obrzeżach Dąbrówki Małej w
            Katowicach. Otoczone zielenią wtapia się w krajobraz, a zwierzęta
            zaznają tu ciszy i spokoju.
          </p>
          <p>
            W naszym schronisku przebywają zarówno psy jak i koty. Każde
            trafiające do schroniska zwierzę musi zostać poddane 14- dniowej
            kwarantannie. Jest to czas, w którym czekamy na odbiór zwierzaka
            przez właściciela, a także obserwujemy zwierzęta pod kątem chorób,
            ponieważ ich przeszłość jest nam nieznana. Gdy właściciel nie zgłosi
            się w ciągu 14 dni do schroniska prawowitym właścicielem zwierzaka
            staje się schronisko. Wtedy zwierzaki są przygotowywane do adopcji.
            Wykonywane są szczepienia, zabiegi kastracji/ sterylizacji, oceniamy
            dokładnie również charakter i cechy zwierzaka, które mogą wpływać na
            proces adopcji.
          </p>
          <div>
            <button>Dowiedz się więcej</button>
          </div>
        </Col>
        <Col className="p-0">
          <img
            src="https://images.pexels.com/photos/7210704/pexels-photo-7210704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="dog-photo"
            style={{
              width: "100%",
              maxHeight: "650px",
              objectFit: "cover",
              borderTopRightRadius: "24px",
              borderBottomRightRadius: "24px",
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export const ContactUs = () => {
  return (
    <Container>
      <Row>
        <Col className="px-0 py-5">
          <h1 className="mb-4">Napisz do nas</h1>
          <ContactForm />
        </Col>
        <Col className="px-0">
          <img src="https://i.imgur.com/nYdvzDG.jpeg" alt="map" />
        </Col>
      </Row>
    </Container>
  );
};
