import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 90vh;
  width: 100%;
`;
const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 60px;
  margin-bottom: 1vh;
`;

const Name = styled.h2``;
const Address = styled.h2``;
const PaymentMethod = styled.h2``;
const CardInfo = styled.h2``;
const ProfilePic = styled.h2``;
const EditButton = styled.h2``;
const PhoneNumber = styled.h2``;

export const Profile = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Profile</Title>
      </Wrapper>
    </Container>
  );
};
