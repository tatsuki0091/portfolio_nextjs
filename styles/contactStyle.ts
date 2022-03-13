import styled from "styled-components";

export const CpIptxt = styled.div`
  position: relative;
  margin: 40px 3%;
  input[type="text"] {
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
      border-width: 0 1px 1px 1px;
      border-style: solid;
      border-color: #da3c41;
    }
  }
  input[type="submit"] {
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
      border-width: 0 1px 1px 1px;
      border-style: solid;
      border-color: #da3c41;
    }
    /* &:hover {
      background-color: #b3424a;
    } */
  }
  textarea {
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
      border-width: 0 1px 1px 1px;
      border-style: solid;
      border-color: #da3c41;
    }
  }
`;
