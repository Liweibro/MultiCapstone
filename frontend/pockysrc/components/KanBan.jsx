// KanBan.jsx
import React from "react";
import { 
Navbar,
Nav,
NavDropdown,
Form,
FormControl,
Button,
Modal } from "react-bootstrap";

function KanBan() {
//     return (//以下整個是官網的NavBar範例
//    <Navbar bg="light" expand="lg">
//      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//      <Navbar.Toggle aria-controls="basic-navbar-nav" />
//      <Navbar.Collapse id="basic-navbar-nav">
//        <Nav className="mr-auto">
//          <Nav.Link href="#home">Home</Nav.Link>
//          <Nav.Link href="#link">Link</Nav.Link>
//          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//            <NavDropdown.Item href="#action/3.2">
//              Another action
//            </NavDropdown.Item>
//            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//            <NavDropdown.Divider />
//            <NavDropdown.Item href="#action/3.4">
//              Separated link
//            </NavDropdown.Item>
//          </NavDropdown>
//        </Nav>
//        <Form inline>
//          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//          <Button variant="outline-success">Search</Button>
//        </Form>
//      </Navbar.Collapse>
//    </Navbar>
//  );
  const [isOpen, setIsOpen] = React.useState(false);
  const [title, setTitle] = React.useState("Transitioning...");

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
    setTitle("Transitioning...");
  };

  const modalLoaded = () => {
    setTitle("Modal Ready");
  };

  return (
    <>
      <button onClick={showModal}>Display Modal</button>
      <Modal show={isOpen} onHide={hideModal} onEntered={modalLoaded}>

        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>The body</Modal.Body>

        <Modal.Footer>
          <button onClick={hideModal}>Cancel</button>
          <button>Save</button>
        </Modal.Footer>
        
      </Modal>
    </>
  );
}

export default KanBan;