import { Container } from "react-bootstrap";
import { PetFilters, PetsList } from "./components/pets";

function Pets() {
  return (
    <div className="home">
      <Container className="px-0 py-5">
        <h1 className="mb-3">Adoptuj zwierzaka</h1>
        <PetFilters />
      </Container>
      <Container fluid className="pet-list px-0 py-5">
        <PetsList />
      </Container>
    </div>
  );
}

export default Pets;
