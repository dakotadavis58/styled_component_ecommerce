import { COLORS } from "../../globalStyles";
import { mobile, phone } from "../../utils/responsive";
import GoogleButton from "react-google-button";

const { default: styled } = require("styled-components");

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://www.acquisition-international.com/wp-content/uploads/2020/01/tech-cruve.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 50%;
  max-width: 600px;
  padding: 20px;
  background-color: white;
  flex-direction: column;

  ${mobile({ width: "60%" })}
  ${phone({ width: "75%" })}
`;
export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({ flexDirection: "column" })}
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

export const Button = styled.button`
  width: 240px;
  max-height: 80%;
  border: none;
  padding: 15px 20px;
  margin: 10px;
  background-color: ${COLORS.primary};
  color: white;
  cursor: pointer;
`;

export const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

export const GoogleBtn = styled(GoogleButton)`
  font-size: 4rem;
  ${mobile({ marginBottom: "20px" })}
`;

export const Error = styled.span`
  color: red;
`;
