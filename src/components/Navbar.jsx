import React, { useEffect, useState } from "react";
import Badge from "@mui/material/Badge";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import styled from "styled-components";
import { mobile, phone } from "../responsive";
import { Button, StyledLink } from "../globalStyles";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Container = styled.div`
  height: 60px;
  ${phone({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${phone({ padding: "10px 0px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${phone({ display: "none" })}
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
  ${phone({ width: "50px" })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${phone({ fontSize: "24px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${phone({ flex: 2, justifyContent: "center" })}
  ${mobile({ marginRight: "50px" })}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${phone({ fontSize: "12px", marginLeft: "10px" })}
`;

const Categories = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: white;
    z-index: 1000;
  }
`;

const MobileMenuWrapper = styled.div``;

export const MobileIcon = styled.div`
  display: none;
  z-index: 2000;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 20px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const Navbar = ({ user }) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closephoneMenu = () => {
    setClick(false);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

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
        <MobileIcon onClick={handleClick}>
          {click ? <CloseIcon /> : <MenuIcon />}
        </MobileIcon>
        <Left>
          <StyledLink to="/">
            <Logo>DNDEV</Logo>
          </StyledLink>
          <Categories onClick={handleClick} click={click}>
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
          </Categories>
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
