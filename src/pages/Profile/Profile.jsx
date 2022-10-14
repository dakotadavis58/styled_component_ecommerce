import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../../firebase";
import { Button } from "../../globalStyles";
import { logout } from "../../redux/userRedux";
import { Container, Title, Wrapper } from "./Profile.elements";

export const Profile = () => {
  // const [user] = useAuthState(auth);
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const handleSignOut = () => {
  //   signOut(auth)
  //     .then(() => {
  //       console.log("Signout successful");
  //       // Sign-out successful.
  //     })
  //     .catch((error) => {
  //       // An error happened.
  //       console.log(`Error: ${error}`);
  //     });
  // };

  const signout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <Container>
      <Wrapper>
        <Title>Profile</Title>
        <p>{currentUser.name}</p>
        <p>{currentUser.username}</p>
        <p>{currentUser.email}</p>
        <button onClick={signout}>signout</button>
      </Wrapper>
    </Container>
  );
};
