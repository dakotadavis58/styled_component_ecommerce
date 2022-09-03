import React, { useState } from "react";
import Badge from "@mui/material/Badge";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Button, StyledLink } from "../globalStyles";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightGrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = ({ user }) => {
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
        <Left>
          <StyledLink to="/">
            <Logo>DNDEV</Logo>
          </StyledLink>
          <StyledLink to="/products/category">
            <MenuItem>Category</MenuItem>
          </StyledLink>
          <StyledLink to="/products/category">
            <MenuItem>Category</MenuItem>
          </StyledLink>
          <StyledLink to="/products/category">
            <MenuItem>Category</MenuItem>
          </StyledLink>
          <StyledLink to="/products/category">
            <MenuItem>Category</MenuItem>
          </StyledLink>
          <StyledLink to="/products/category">
            <MenuItem>Category</MenuItem>
          </StyledLink>
        </Left>
        <Center></Center>
        <Right>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchOutlinedIcon style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>

          <StyledLink to={user ? "/profile" : "/login"}>
            <MenuItem>
              <PersonOutlineOutlinedIcon />
            </MenuItem>
          </StyledLink>

          <StyledLink to="/cart">
            <MenuItem>
              <Badge badgeContent={4} color="primary" overlap="rectangular">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </MenuItem>
          </StyledLink>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
