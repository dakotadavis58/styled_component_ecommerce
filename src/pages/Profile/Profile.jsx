import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { auth } from "../../firebase";
import { Button } from "../../globalStyles";
import { Container, Title, Wrapper } from "./Profile.elements";

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
