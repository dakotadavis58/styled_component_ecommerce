import React from "react";
import styled from "styled-components";
import { COLORS } from "../globalStyles";

const Container = styled.div`
  height: 30px;
  background-color: ${COLORS.purple};
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return (
    <Container>50% off all orders over $200! Get it while you can!</Container>
  );
};

export default Announcement;
