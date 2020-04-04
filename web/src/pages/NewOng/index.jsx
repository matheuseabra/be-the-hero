import React from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import useInput from "../../hooks/useInput";

import { FiLogOut } from "react-icons/fi";
import logoHero from "../../assets/logo.svg";

import {
  CardContainer,
  NewOngContainer,
  HeroBanner,
  RegisterTitle,
  RegisterDescription,
  TextInput,
  BackToLoginLink
} from "./styles";

const NewOng = () => {
  const [name, setName] = useInput("");
  const [email, setEmail] = useInput("");
  const [whatsapp, setWhatsapp] = useInput("");
  const [city, setCity] = useInput("");
  const [state, setState] = useInput("");

  const browserHistory = useHistory();

  async function handleSubmitNewOng(e) {
    e.preventDefault();

    const newOng = { name, email, whatsapp, city, state };

    const {
      data: { ongId }
    } = await api.post("/ongs", newOng);

    alert(`Your unique Ong ID is ${ongId}`);

    browserHistory.push("/");
  }

  console.log({ name, email, whatsapp, city, state });

  return (
    <NewOngContainer>
      <CardContainer>
        <HeroBanner>
          <img src={logoHero} alt="Be the hero" />
          <RegisterTitle>Register</RegisterTitle>
          <RegisterDescription>
            Sign up, enter the platform and help people find incidents
          </RegisterDescription>
          <BackToLoginLink to="/">
            <FiLogOut size={24} color="#E02041" />
            Back to Login
          </BackToLoginLink>
        </HeroBanner>

        <form onSubmit={handleSubmitNewOng}>
          <TextInput
            placeholder="Name"
            type="text"
            value={name}
            onChange={setName}
          />
          <TextInput
            placeholder="WhatsApp"
            text="number"
            value={whatsapp}
            onChange={setWhatsapp}
          />
          <TextInput
            placeholder="Email"
            type="email"
            value={email}
            onChange={setEmail}
          />
          <TextInput
            placeholder="City"
            type="text"
            value={city}
            onChange={setCity}
          />
          <TextInput
            placeholder="State"
            type="text"
            value={state}
            onChange={setState}
          />
          <button className="primary-button" type="submit">
            Sign Up
          </button>
        </form>
      </CardContainer>
    </NewOngContainer>
  );
};

export default NewOng;
