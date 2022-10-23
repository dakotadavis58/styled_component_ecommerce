import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { phone } from "../utils/responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: all 0.5s ease;
  ${phone({ height: "20vh" })}
  &:hover {
    opacity: 0.3;
  }
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

const CategoryItem = ({ item }) => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    const cat = e.target.innerText.toLowerCase();
    navigate(`/products/${cat}`);
  };
  return (
    <Container value={item} onClick={handleClick}>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
      </Info>
    </Container>
  );
};

export default CategoryItem;
