import { Container } from "react-bootstrap";
import { About, ContactUs, Help, Home } from "./components/home";
import { TopNavbar } from "./components/menu";
import { Footer } from "./footer";

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <div className="content">
        <Home />

        <About />

        <Help />

        <ContactUs />

        <Footer />
      </div>
    </div>
  );
}

export default App;
