import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import Newsletter from "../../components/Newsletter";
import { addProduct } from "../../redux/cartRedux";
import { publicRequest } from "../../requestMethods";
import { ProductPrice } from "../Cart/Cart.elements";
import {
  AddContainer,
  Amount,
  AmountContainer,
  Button,
  Container,
  Desc,
  Filter,
  FilterColor,
  FilterContainer,
  FilterSize,
  FilterSizeOption,
  FilterTitle,
  Image,
  ImgContainer,
  InfoContainer,
  Price,
  Title,
  Wrapper,
} from "./Product.elements";

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleDec = () => {
    const n = quantity;
    n <= 0 ? setQuantity(0) : setQuantity(n - 1);
  };
  const handleInc = () => {
    const n = quantity;
    setQuantity(n + 1);
  };

  const handleAddToCart = () => {
    dispatch(
      addProduct({
        ...product,
        quantity,
        price: product.price * quantity,
      })
    );
  };

  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src={product.image} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.name}</Title>
          <Desc>{product.description}</Desc>
          <Price>${product.price}</Price>
          <AddContainer>
            <AmountContainer>
              <RemoveCircleOutlineOutlinedIcon onClick={handleDec} />
              <Amount>{quantity}</Amount>
              <AddCircleOutlineOutlinedIcon onClick={handleInc} />
            </AmountContainer>
            <Button
              onClick={handleAddToCart}
              disabled={quantity === 0 ? true : false}
            >
              ADD TO CART
            </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
    </Container>
  );
};

export default Product;
