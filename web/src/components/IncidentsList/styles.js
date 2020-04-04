import styled from "styled-components";
import { Link } from "react-router-dom";

export const IncidentsListContainer = styled.ul`
  margin-top: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
  list-style: none;
`;

export const IncidentContainer = styled.div`
  background #FFF;
  padding: 24px;
  border-radius 8px;
  position: relative;
`;

export const IncidentItem = styled.li`
  display: block;
  flex-column: column;
  margin: 10px 0;
`;

export const IncidentLabel = styled.strong`
  display: block;
  color: #7c7c7c;
  text-transform: uppercase;
`;

export const IncidentTitle = styled.p`
  margin: 5px 0;
  color: 737380;
  line-height: 21px;
  font-size: 16px;
`;

export const IncidentDescription = styled.p`
  margin: 5px 0;
`;

export const IncidentPrice = styled.p`
  margin: 5px 0;
`;

export const DeleteIncidentButton = styled.button`
  position: absolute;
  right: 24px;
  top: 24px;
  border: 0;
  background: transparent;

  &:hover {
    opacity: 0.8;
  }
`;
