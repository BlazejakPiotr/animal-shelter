import { Container } from "react-bootstrap";
import { About, ContactUs, Help, Home } from "./components/home";
import { TopNavbar } from "./components/menu";

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <Container fluid className="home px-0">
        <Home />
      </Container>
      <Container fluid className="about px-0">
        <About />
      </Container>
      <Container fluid className="help px-0">
        <Help />
      </Container>
      <Container className="contact px-0">
        <ContactUs />
      </Container>
    </div>
  );
}

export default App;
