import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  background: #F0F0F5;
  font: 400 14px Lato, sans-serif;
  -webkit-font-smoothing: antialised;  
}

input, button, textarea {
  font: 400 18px Lato, sans-serif;
}

form input {
  width: 100%;
  height: 60px;
  border: 2px solid #dcdce6;
  border-radius: 8px;
  padding: 0 24px;

  &:placeholder {
    color: #3333;
  }
}

a, button {
    cursor: pointer;
}

.primary-button {
  width: 100%;
  height: 60px;
  background: #E02041;
  border: 0;
  border-radius: 8px;
  color: #FFF;
  font-weight: 700;
  display: inline-block;
  text-align: center;
  font-size: 18px;
  line-height: 60px;
  margin: 16px 0;
  padding: 0 24px;
}

.primary-button:hover {
  filter: brightness(90%); 
}

i {
  position: relative;
  bottom: 0px;
}

a {
  text-decoration: none;
  color: inherit;
}

/* Keyframes */
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  0% {
    transform: translateY(15px);
    transition: all 0.15s cubic-bezier(0.25, 0.8, 0.25, 1);
    opacity: 0;
  }
  50% {
    
  }
  100% {
    transform: translateY(0px);
    transition: all 0.15s cubic-bezier(0.25, 0.8, 0.25, 1);
    opacity: 1;
  }
}
`;
