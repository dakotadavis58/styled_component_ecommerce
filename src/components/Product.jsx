import React from "react";
import styled from "styled-components";
import { phone } from "../responsive";
import { Rating } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";

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
const RatingCon = styled.span``;
const NumReviews = styled.span`
  justify-content: center;
`;

const Product = ({ item }) => {
  const { image, name, category, price, rating, numReviews } = item;
  const navigate = useNavigate();
  const addToCart = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  const handleClick = () => {
    navigate(`/product/${item._id}`);
  };

  return (
    <Container onClick={handleClick}>
      <Image src={image} />
      <Info>
        <Title>{name}</Title>
        <Subtitle>{category}</Subtitle>
        <Price>{price}</Price>
        <RatingCon>
          <Rating name="read-only" value={rating} precision={0.1} readOnly />
          <NumReviews>{numReviews} reviews</NumReviews>
        </RatingCon>
      </Info>
    </Container>
  );
};

export default Product;
