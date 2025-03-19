import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the user exists
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      // Simulate successful login
      localStorage.setItem("isLoggedIn", true); // Set login status
      localStorage.setItem("currentUser", JSON.stringify(user)); // Store current user
      navigate("/"); // Redirect to homepage
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <Form
      style={{
        width: "700px",
        margin: "auto auto",
        backgroundColor: "black",
        padding: "50px 50px 50px 50px",
        borderRadius: "10px",
        color: "white", // Add text color for better visibility
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form.Group className="mb-3" controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleLogin}>
        Submit
      </Button>

      <Link to="/signup">
        <Button style={{ marginLeft: "10px" }} variant="secondary">
          SignUp
        </Button>
      </Link>
    </Form>
  );
}