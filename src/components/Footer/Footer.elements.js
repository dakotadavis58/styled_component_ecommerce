import { COLORS } from "../../globalStyles";

const { default: styled } = require("styled-components");
const { phone, mobile } = require("../../utils/responsive");

export const Container = styled.div`
  display: flex;
  margin-top: auto;
  ${phone({ flexDirection: "column" })}
`;

export const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-right: 2px solid gray;
`;

export const Logo = styled.h1``;

export const Desc = styled.p`
  margin: 20px 0px;
`;

export const SocialContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

export const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
  border-right: 2px solid gray;
`;

export const Title = styled.h3`
  margin-bottom: 30px;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.a`
  width: 50%;
  margin-bottom: 10px;
  text-decoration: none;
  color: black;
`;

export const Right = styled.div`
  flex: 2;
  padding: 20px;
`;

export const ContactItem = styled.a`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
`;

export const Payment = styled.img`
  width: 50%;
`;
