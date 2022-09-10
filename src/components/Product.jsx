import React from "react";
import styled from "styled-components";
import { phone } from "../responsive";

const Container = styled.div`
  flex-direction: column;
  margin: 10px;
  min-width: 280px;
  max-width: 400px;
  width: 25rem;
  height: 25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: transform 1s;
  ${phone({ width: "90vw" })}
  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  height: 10rem;
  width: 10rem;
  z-index: 2;
  max-width: 10rem;
`;
const Info = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: start;
  transition: all 0.5s ease;
  padding: 2rem;
`;

const Title = styled.h3`
  font-size: medium;
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
