import React, { useState } from "react";

import {
  IncidentsListContainer,
  IncidentContainer,
  IncidentItem,
  IncidentLabel,
  IncidentTitle,
  IncidentDescription,
  IncidentPrice,
  DeleteIncidentButton
} from "./styles";

import { FiTrash2 } from "react-icons/fi";

const IncidentsList = incidents => {
  const [x, setIncidents] = useState(incidents);
  return (
    <IncidentsListContainer>
      {x.map(({ id, title, description, price }) => (
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

          <DeleteIncidentButton>
            <FiTrash2 size={16} color="#777" />
          </DeleteIncidentButton>
        </IncidentContainer>
      ))}
    </IncidentsListContainer>
  );
};

export default IncidentsList;
