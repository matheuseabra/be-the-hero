import React from "react";
import api from "../../services/api";
import { useHistory } from "react-router-dom";
import useInput from "../../hooks/useInput";

import { FiLogIn } from "react-icons/fi";
import logoHero from "../../assets/logo.svg";
import heroArt from "../../assets/heroes.png";

import {
  LoginContainer,
  FormContainer,
  OngTitle,
  RegisterLink,
} from "./styles";

const Login = () => {
  const [ongId, setOngId] = useInput("");

  const browserHistory = useHistory();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const {
        data: { name: ongName },
      } = await api.post("/sessions", { id: ongId });

      localStorage.setItem("ongId", ongId);
      localStorage.setItem("ongName", ongName);

      browserHistory.push("/profile");
    } catch (error) {
      alert("Fail to login, try again with different credentials");
    }
  }

  return (
    <LoginContainer>
      <FormContainer>
        <img src={logoHero} alt="Be the hero" />
        <form onSubmit={handleLogin}>
          <OngTitle>Sign in to Be The Hero</OngTitle>

          <input
            type="text"
            placeholder="Your Ong ID"
            value={ongId}
            onChange={setOngId}
          />

          <button className="primary-button">Sign in</button>

          <RegisterLink to="/register">
            <FiLogIn size={24} color="#E02041" />
            Not registered? Create an account.
          </RegisterLink>
        </form>
      </FormContainer>
      <img src={heroArt} alt="Hero art" />
    </LoginContainer>
  );
};

export default Login;
