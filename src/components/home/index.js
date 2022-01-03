import { Container, Row, Col, Carousel } from "react-bootstrap";
import PetCard from "../pets/petcard.js";
import { ContactForm } from "./contactform.js";

export const Welcome = () => {
  return (
    <Container>
      <Row className="home pt-4">
        <Col lg={12} xl={6} className="d-flex flex-column pt-5 mt-5">
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
            <button style={{ background: "#fff", color: "#000" }}>
              Sprawdź listę zwierzaków
            </button>
            <button style={{ background: "#fff", color: "#000" }}>
              Poznaj zasady adopcji
            </button>
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
              <PetCard />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col className="d-flex justify-content-between"></Col>
          </Row>
        </Carousel.Item>
      </Carousel>
      <div className="text-center mt-5">
        <button>Sprawdź pełną listę</button>
      </div>
    </>
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
            Consectetur ex do aute anim incididunt elit elit Lorem occaecat
            adipisicing aliquip veniam veniam culpa. Est aute voluptate veniam
            eiusmod nulla enim culpa consequat cupidatat incididunt. Ut in ex
            consectetur ad reprehenderit consectetur sint. Aliquip quis anim
            cupidatat commodo non minim. Magna mollit veniam eiusmod magna
            labore ea pariatur non deserunt eu laborum cillum.
          </p>
          <p>
            Voluptate incididunt reprehenderit veniam qui pariatur consequat
            veniam quis reprehenderit. Deserunt magna in tempor velit amet
            excepteur esse nulla do et elit reprehenderit culpa minim. Dolore
            consequat labore nulla duis nulla fugiat incididunt id nulla.
          </p>
          <p>
            Sint cillum incididunt proident ex fugiat laborum adipisicing
            pariatur laboris dolor qui. Consequat nulla labore proident non
            mollit proident deserunt minim commodo ad. Dolore voluptate
            cupidatat proident et. Irure enim qui commodo laboris ad laboris
            ullamco proident laboris nisi cupidatat. Fugiat ad excepteur
            cupidatat dolor et. Veniam laboris ullamco sunt ex irure excepteur
            Lorem deserunt culpa. Proident id velit consequat tempor ut Lorem
            aliquip aute qui minim do occaecat ad.
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
            Magna ea ipsum do ipsum in excepteur eiusmod ullamco enim cupidatat
            pariatur laboris et. Pariatur incididunt deserunt dolor velit elit
            duis deserunt ea aliquip aliquip. Commodo incididunt nostrud eiusmod
            aliqua. Exercitation amet voluptate voluptate velit qui pariatur
            voluptate. Pariatur quis labore elit fugiat et cillum dolore do
            irure fugiat id. Sit consequat est laborum tempor nisi occaecat
            Lorem nulla commodo veniam et dolore. Sint dolor magna adipisicing
            nisi consectetur proident sunt laboris consectetur eu irure duis
            nostrud. Est tempor occaecat sint ullamco occaecat voluptate est
            aliquip aute Lorem aute. Eu deserunt incididunt cupidatat excepteur
            eiusmod est ut. Dolore occaecat occaecat incididunt fugiat dolor et
            minim reprehenderit.
          </p>
          <p>
            Aute adipisicing dolor officia dolor tempor eu nisi. Fugiat
            exercitation officia mollit laborum commodo non aute dolore duis
            laborum excepteur. Incididunt exercitation in duis cillum laborum
            ipsum. Velit nulla mollit esse duis culpa sint. Dolor aute ad ipsum
            aute ipsum aute est enim incididunt proident sint mollit consequat.
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
          <img
            src="https://i.imgur.com/nYdvzDG.jpeg"
            alt="map"
            style={{ height: "750px" }}
          />
        </Col>
      </Row>
    </Container>
  );
};
