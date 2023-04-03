import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

// router dom
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  // Javascript
  const handleLogout = ()=>{
    // code 
    auth.signOut()
    navigate('/')
  }

  return (
    <div>
      {/* HTML */}
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
          <Navbar.Toggle />
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link>
              <Link to="/login">Login</Link>
            </Nav.Link>
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            {/* <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
