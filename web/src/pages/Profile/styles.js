import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProfileContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  padding: 0 30px;
  margin: 32px auto;
`;

export const ProfileHeader = styled.header`
  display: flex;
  align-items: center;
`;

export const WelcomeMsg = styled.span`
  font-size: 20px;
  margin-left: 24px;
`;

export const Logo = styled.img`
  height: 64px;
`;

export const RegisterIncidentButton = styled(Link)`
  width: 260px;
  margin-left: auto;
  margin-top: 0;
  height: 60px;
  background: #e02041;
  border: 0;
  border-radius: 8px;
  color: #fff;
  font-weight: 700;
  display: inline-block;
  text-align: center;
  font-size: 18px;
  line-height: 60px;

  padding: 0 24px;
`;

export const PowerButton = styled.button`
  height: 60px;
  width: 60px;
  border-radius: 4px;
  border: none;
  background: transparent;
  margin-left: 16px;
  transition: border-color 0.2s;
`;

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
