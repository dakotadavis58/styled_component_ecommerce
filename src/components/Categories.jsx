import styled from "styled-components";
import { categoryCards } from "../utils/data";
import { phone } from "../utils/responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${phone({ padding: "0px", flexDirection: "column" })}
`;

const Categories = () => {
  return (
    <Container>
      {categoryCards.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
