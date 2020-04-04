import React, { useState, useEffect } from "react";
import api from "../../services/api";
import logoHero from "../../assets/logo.svg";
import { FiPower, FiTrash2 } from "react-icons/fi";
import { useHistory } from "react-router-dom";

import {
  ProfileContainer,
  ProfileHeader,
  Logo,
  WelcomeMsg,
  RegisterIncidentButton,
  PowerButton,
  IncidentsListContainer,
  IncidentContainer,
  IncidentItem,
  IncidentLabel,
  IncidentTitle,
  IncidentDescription,
  IncidentPrice,
  DeleteIncidentButton
} from "./styles";

const Profile = () => {
  const ongName = localStorage.getItem("ongName");
  const ongId = localStorage.getItem("ongId");
  const [incidents, setIncidents] = useState([]);

  const browserHistory = useHistory();

  useEffect(() => {
    const fetchIncidents = async () => {
      const { data } = await api.get("/profile", {
        headers: { Authorization: ongId }
      });
      setIncidents(data);
    };
    fetchIncidents();
  }, [ongId]);

  function handleLogout() {
    localStorage.clear();
    browserHistory.push("/");
  }

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`/incidents/${id}`, {
        headers: { Authorization: ongId }
      });
    } catch (error) {
      alert("Error while deleting comment, try again later");
    }
  }

  return (
    <ProfileContainer>
      <ProfileHeader>
        <Logo src={logoHero} alt="Be the hero" />
        <WelcomeMsg>Welcome, {ongName}!</WelcomeMsg>

        <RegisterIncidentButton to="/incidents/new" type="button">
          New incident
        </RegisterIncidentButton>

        <PowerButton onClick={handleLogout}>
          <FiPower size={18} color="#E02041" />
        </PowerButton>
      </ProfileHeader>

      <br />
      <h1>Registered incidents</h1>

      <IncidentsListContainer>
        {incidents.map(({ id, title, description, price }) => (
          <IncidentContainer key={id}>
            <IncidentItem>
              <IncidentLabel>Case:</IncidentLabel>
              <IncidentTitle>{title}</IncidentTitle>
            </IncidentItem>

            <IncidentItem>
              <IncidentLabel>Description:</IncidentLabel>
              <IncidentDescription>{description}</IncidentDescription>
            </IncidentItem>

            <IncidentItem>
              <IncidentLabel>Price:</IncidentLabel>
              <IncidentPrice>${price}</IncidentPrice>
            </IncidentItem>

            <DeleteIncidentButton onClick={() => handleDeleteIncident(id)}>
              <FiTrash2 size={16} color="#777" />
            </DeleteIncidentButton>
          </IncidentContainer>
        ))}
      </IncidentsListContainer>
    </ProfileContainer>
  );
};

export default Profile;
