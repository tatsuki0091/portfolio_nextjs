import styled from "styled-components";

export const Button = styled.button`
  font: 15px/24px sans-serif;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  width: 100%;
  padding: 0.3em;
  letter-spacing: 1px;
  border: 0;
  &::after {
    display: block;
    width: 100%;
    height: 4px;
    margin-top: -1px;
    content: "";
  }
  &:hover {
    background-color: #b3424a;
  }
`;
