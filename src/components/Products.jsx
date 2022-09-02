import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ data }) => {
  const handleProductClick = () => {
    console.log("product clicked");
  };

  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} onClick={() => handleProductClick} />
      ))}
    </Container>
  );
};

export default Products;

// data.map((item) => <Product item={item} key={item.id} />)
