import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Navigasi.css";

function Navigasi() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg-body-transparent navbar-expand-md mb-4 sticky-top my-nav"
        >
          <Container>
            <Navbar.Brand href="#" className="my-nav-brand">
              WEDDING.
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  className="my-nav-brand"
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                >
                  WEDDING.
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="ms-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#info">Info</Nav.Link>
                  <Nav.Link href="#story">Story</Nav.Link>
                  <Nav.Link href="#galery">Galery</Nav.Link>
                  <Nav.Link href="#rspv">RSPV</Nav.Link>
                  <Nav.Link href="#gift">Gift</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navigasi;
