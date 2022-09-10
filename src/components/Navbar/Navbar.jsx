import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { categories } from "../../data";
import { auth } from "../../firebase";
import { StyledLink } from "../../globalStyles";
import {
  Categories,
  Center,
  Container,
  Input,
  Language,
  Left,
  Logo,
  MenuItem,
  MobileIcon,
  Right,
  SearchContainer,
  Wrapper,
} from "./Navbar.elements";

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
            {categories.map((category) => (
              <StyledLink to="/products/category">
                <MenuItem>{category}</MenuItem>
              </StyledLink>
            ))}
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
