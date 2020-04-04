import styled from "styled-components";
import { Link } from "react-router-dom";

export const NewOngContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardContainer = styled.section`
  width: 100%;
  padding: 96px;
  background: #f0f0f5;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeroBanner = styled.div`
  width: 100%;
  max-width: 350px;
`;

export const RegisterTitle = styled.h1`
  margin: 64px 0 32px;
  font-size: 32px;
`;

export const RegisterDescription = styled.p`
  font-size: 18px;
  color: #737380;
  line-height: 32px;
`;

export const BackToLoginLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-top: 40px;
  color: #41414d;
  font-size: 18px;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }

  svg {
    margin-right: 15px;
  }
`;

export const Form = styled.form``;

export const TextInput = styled.input`
  margin: 5px 0;
`;
