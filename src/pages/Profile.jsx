import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { auth } from "../firebase";
import { Button } from "../globalStyles";

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
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Signout successful");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log(`Error: ${error}`);
      });
  };
  return (
    <Container>
      <Wrapper>
        <Title>Profile</Title>
        {user ? (
          <Button onClick={handleSignOut}>Sign out</Button>
        ) : (
          <div>Sign in up top</div>
        )}
      </Wrapper>
    </Container>
  );
};
