import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Card, CardContent } from "@mui/material";

import cookie from "cookie";

const Login = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const login = (e) => {
    e.preventDefault();
    // set cookie here
    // set loggedIn = true and max-age = 60*1000 (one minute)

    document.cookie = cookie.serialize("loggedIn", "true", { maxAge: 60 });

    navigate("/");
  };

  return (
    <div className="App">
      <Container maxWidth="sm" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <Card sx={{ minWidth: 275, height: 150, alignItems: "center", display: "flex", justifyContent: "center" }}>
        <form className="login-form" onSubmit={login}>
          <TextField
            required
            onChange={handleTextChange}
            value={state.username}
            name="username"
            label="Username"
            type="text"
          />
          <TextField
            required
            onChange={handleTextChange}
            value={state.password}
            name="password"
            label="Password"
            type="password"
          />
          <Button
            type="submit"
            className="login-button"
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </form>
        </Card>
      </Container>
    </div>
  );
};

export default Login;