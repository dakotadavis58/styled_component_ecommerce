import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Source Sans Pro', sans-serif;
    }
`;

export const COLORS = {
  primary: "#8758FF",
  secondary: "#5CB8E4",
  dark: "#181818",
  light: "F2F2F2",
  darkPurp: "#645CAA",
  medPurp: "#A084CA",
  lightColor: "#BFACE0",
  pink: "#EBC7E8",
  darkBg: "#111111",
  almostWhite: "#F2F2F2",

  lightGrey: "#a9b3c1",
};

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 50px;
  padding-right: 50px;

  @media screen and (max-width: 991px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? COLORS.primary : COLORS.secondary)};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "5px 10px")};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "14px")};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({ primary }) =>
      primary ? COLORS.secondary : COLORS.primary};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const NewButton = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: #ea4c89;
  cursor: pointer;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  list-style: none;
  margin: 0;
  outline: none;
  padding: 10px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  :hover,
  :focus {
    background-color: #f082ac;
  }
`;

export default GlobalStyle;
