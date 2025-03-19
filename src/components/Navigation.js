import Nav from "react-bootstrap/Nav";
import Popup from "reactjs-popup";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import Login from "./loginsignup";
import axios from "axios";

function Navigation() {
  const [login, setlogin] = useState("Login/SignUp");

  axios
    .post("https://doctor-appointment-backend.onrender.com/check")
    .then((response) => {
      setlogin(response.data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  return (
    <Container>
      <Row>
        <Col>
          <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
              <Nav.Link href="/doctors">Doctors</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Services</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">About Us</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col>
          <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
              <Nav.Link href="/home">Contact Us</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Popup
                trigger={<Nav.Link eventKey="link-3">{login}</Nav.Link>}
                modal
                nested
                closeOnDocumentClick
              >
                <div>
                  <Login />
                </div>
              </Popup>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
}

export default Navigation;