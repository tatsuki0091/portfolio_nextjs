import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
`;

export const HumbergerButton = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

export const BlackLine = styled.div`
  width: 25px;
  height: 3px;
  background-color: black;
  margin: 4px;
`;

export const WhiteLine = styled.div`
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 4px;
`;
