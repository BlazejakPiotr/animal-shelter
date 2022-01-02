import { Container } from "react-bootstrap";
import { Home } from "./components/home";
import { TopNavbar } from "./components/menu";

function App() {
  return (
    <div className="App">
      <div className="container-blue">
        <TopNavbar />
        <Container className="px-0">
          <Home />
        </Container>
      </div>
    </div>
  );
}

export default App;
