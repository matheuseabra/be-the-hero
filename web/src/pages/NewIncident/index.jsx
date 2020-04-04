import React from "react";
import api from "../../services/api";
import useInput from "../../hooks/useInput";
import { useHistory } from "react-router-dom";

import { FiArrowLeft } from "react-icons/fi";
import logoHero from "../../assets/logo.svg";

import {
  CardContainer,
  RegisterIncidentContainer,
  HeroBanner,
  IncidentTitle,
  IncidentDescription,
  TextInput,
  TextArea,
  BackToLoginLink
} from "./styles";

const NewIncident = () => {
  const [title, setTitle] = useInput("");
  const [description, setDescription] = useInput("");
  const [price, setPrice] = useInput("");

  const browserHistory = useHistory();

  const ongId = localStorage.getItem("ongId");

  async function handleSubmitNewIncident(e) {
    try {
      e.preventDefault();

      const newIncident = { title, description, price };

      await api.post("/incidents", newIncident, {
        headers: { Authorization: ongId }
      });

      browserHistory.push("/profile");
    } catch (error) {
      alert("Error while submitting new incident");
    }
  }

  return (
    <RegisterIncidentContainer>
      <CardContainer>
        <HeroBanner>
          <img src={logoHero} alt="Be the hero" />
          <IncidentTitle>Register a new incident</IncidentTitle>
          <IncidentDescription>
            Describe the incident with detailed information in order to find a
            hero
          </IncidentDescription>
          <BackToLoginLink to="/">
            <FiArrowLeft size={24} color="#E02041" />
            Back to home
          </BackToLoginLink>
        </HeroBanner>

        <form onSubmit={handleSubmitNewIncident}>
          <TextInput
            placeholder="Title"
            type="text"
            value={title}
            onChange={setTitle}
          />
          <TextArea
            placeholder="Description"
            value={description}
            onChange={setDescription}
          />
          <TextInput
            placeholder="Price"
            type="text"
            value={price}
            onChange={setPrice}
          />
          <button className="primary-button" type="submit">
            Save
          </button>
        </form>
      </CardContainer>
    </RegisterIncidentContainer>
  );
};

export default NewIncident;
