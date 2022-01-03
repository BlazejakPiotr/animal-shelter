import { Form } from "react-bootstrap";

export const ContactForm = () => {
  return (
    <Form style={{ paddingRight: "2rem" }}>
      <Form.Control
        type="name"
        placeholder="Imię i nazwisko"
        className="mb-3 contact-form"
      />
      <Form.Control
        type="email"
        placeholder="Adres email"
        className="mb-3 contact-form"
      />
      <Form.Select
        aria-label="Default select example"
        className="mb-3 contact-form"
      >
        <option>Typ zapytania</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
      <Form.Control
        as="textarea"
        placeholder="Treść wiadomości"
        rows={7}
        className="mb-3 contact-form"
      />
      <Form.Check type="checkbox" className="mb-3">
        <Form.Check.Input type="checkbox" />
        <Form.Check.Label>
          <small>
            Officia qui fugiat aliqua dolor sit enim deserunt consectetur irure
            eiusmod consectetur magna veniam. Aute cillum non minim sint anim.
            Dolore ex exercitation commodo mollit consectetur irure commodo.
          </small>
        </Form.Check.Label>
      </Form.Check>
      <Form.Check type="checkbox" className="mb-3">
        <Form.Check.Input type="checkbox" />
        <Form.Check.Label>
          <small>
            Excepteur aliqua amet amet deserunt et eiusmod labore reprehenderit
            laboris occaecat nulla. Ullamco non deserunt dolor et irure commodo
            mollit nulla culpa anim sit reprehenderit ex pariatur. Proident
            laborum tempor elit quis velit voluptate.
          </small>
        </Form.Check.Label>
      </Form.Check>
      <div className="contact d-flex justify-content-end">
        <button>Wyślij</button>
      </div>
    </Form>
  );
};
