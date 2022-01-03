import Home from "./components/Home";
import { TopNavbar } from "./components/menu";
import { Footer } from "./footer";
import Pets from "./Pets";

function App() {
  return (
    <div className="App content">
      <TopNavbar />
      <Home />

      <Footer />
    </div>
  );
}

export default App;
