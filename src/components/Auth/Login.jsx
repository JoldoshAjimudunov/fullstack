import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";
// import { Alert } from "@mui/material";
import { useAuth } from "../Contexts/AuthContextProvider";
import { useState } from "react";
import "../Auth/Auth.css";
import { createTheme } from "@mui/material";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    if (!email.trim() || !password.trim()) {
      alert("Заполните поля!");
      return;
    }

    e.preventDefault();

    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    login(formData, email);
  };

  return (
    <div class="header" theme={theme}>
      <div class="container">
        <form class="form">
          <h1>Login</h1>

          <img
            src="https://i.ibb.co/bvqgKnm/account.png"
            width="120"
            height="120"
          />
          <div class="input">
            <label for="email" id="email_label" class="label">
              Email
            </label>
            <input
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              class="form-input"
              placeholder="Email"
            />
          </div>
          <div class="input">
            <label for="password" id="email_label" class="label">
              Password
            </label>
            <input
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              class="form-input"
              placeholder="Password"
            />
          </div>
          <RouterLink to="/register">
            <Typography style={{ marginBottom: "10px" }}>
              {"Dont' have an account? Sign Un"}
            </Typography>
          </RouterLink>
          <button type="submit" id="submit_button" onClick={handleSubmit}>
            Login
          </button>
        </form>
      </div>
      <div style={{ height: "130px" }}></div>
    </div>
  );
}
