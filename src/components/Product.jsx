import React from "react";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { phone } from "../responsive";

const Container = styled.div`
  border: 1px solid gray;
  flex-direction: column;
  margin: 10px;
  min-width: 280px;
  max-width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${phone({ width: "90vw" })}
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
  width: 75%;
  max-width: 10rem;
`;
const Info = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  transition: all 0.5s ease;
`;

const Title = styled.h3`
  font-size: medium;
  padding: 1rem;
`;
const Subtitle = styled.h5``;
const Price = styled.span``;

const Rating = styled.span``;

const Product = ({ item }) => {
  const handleClick = (item) => {
    console.log(item);
  };

  return (
    <Container>
      <Image src={item.image} />
      <Info>
        <Title>{item.title}</Title>
        <Subtitle>{item.category}</Subtitle>
        <Price>{item.price}</Price>
        <Rating>{item.rating.rate}</Rating>
      </Info>
    </Container>
  );
};

export default Product;
