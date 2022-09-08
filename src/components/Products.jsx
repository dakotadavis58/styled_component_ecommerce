import { useContext } from "react";
import styled from "styled-components";
import ProductContext from "../contexts/ProductContext";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  const products = useContext(ProductContext);
  const handleProductClick = () => {
    console.log("product clicked");
  };

  return (
    <Container>
      {products.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;

// data.map((item) => <Product item={item} key={item.id} />)
