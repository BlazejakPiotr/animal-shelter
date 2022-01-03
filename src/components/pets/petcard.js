import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pet from "../Pet";

const PetCard = () => {
  return (
    <Link to="234">
      <Card className="pet-card">
        <Card.Img
          variant="top"
          src="https://images.pexels.com/photos/2007/animal-dog-pet-cute.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Card.Body className="pb-0">
          <Card.Title className="mt-2" style={{ fontWeight: "700" }}>
            Lucky (pies)
          </Card.Title>
          <Card.Text>
            <div className="d-flex justify-content-between">
              <ul>
                <li>Płeć: Samiec</li>
                <li>Wiek: 2 lata</li>
              </ul>

              <button
                style={{
                  paddingTop: "0px",
                  paddingBottom: "0px",
                  height: "45px",
                  marginRight: "0px",
                }}
              >
                Więcej
              </button>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default PetCard;
