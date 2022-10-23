import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import { useDispatch, useSelector } from "react-redux";

import {
  Bottom,
  Container,
  Details,
  Hr,
  Image,
  Info,
  PriceDetail,
  ProductAmount,
  ProductAmountContainer,
  ProductDetail,
  ProductId,
  ProductName,
  ProductPrice,
  Summary,
  SummaryItem,
  SummaryItemPrice,
  SummaryItemText,
  SummaryTitle,
  Title,
  Top,
  TopButton,
  TopText,
  TopTexts,
  Wrapper,
  Button,
  Product,
} from "./Cart.elements";
import { deleteProduct, updateProduct } from "../../redux/cartRedux";

// const KEY = process.env.REACT_APP_STRIPE;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const { products, quantity, total } = cart;
  // const [stripeToken, setStripeToken] = useState(null);
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const deleteItem = (product) => {
    const index = products.indexOf(product);
    if (index > -1)
      dispatch(
        deleteProduct({
          index,
          price: product.price,
          quantity: product.quantity,
        })
      );
  };

  const handleClearRedux = () => {
    dispatch({ type: "clear_reducer" });
  };

  /**
   * When a user clicks one of the quantity change buttons, we find the index of the product,
   * then increase or decrease the quantity of the product. If the quantity goes below 1, we
   * delete the product. 🙋💓
   * @param {*} type which kind of quantity change
   * @param {*} product which product to update
   * @returns
   */
  const handleQuantityChange = (type, product) => {
    const index = products.indexOf(product);

    if (type === "inc") {
      let quan = product.quantity + 1;
      const addPrice = product.price;
      const newProduct = { ...product, quantity: quan };
      dispatch(updateProduct({ index, product: newProduct, amount: addPrice }));
    } else if (type === "dec") {
      //if decreasing quantity
      let quan;
      if (product.quantity === 1) {
        // if going below 1, delete product
        dispatch(
          deleteProduct({
            index,
            price: product.price,
            quantity: product.quantity,
          })
        );
        return;
      } else {
        // else update product
        quan = product.quantity - 1;
        let subtractPrice = -product.price;
        const newProduct = {
          ...product,
          quantity: quan,
          amount: subtractPrice,
        };
        dispatch(
          updateProduct({ index, product: newProduct, amount: subtractPrice })
        );
      }
    }
  };
  return (
    <Container>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag({quantity})</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled" onClick={handleClearRedux}>
            CHECKOUT NOW
          </TopButton>
        </Top>
        <Bottom>
          <Info>
            {products ? (
              products.map((product) => {
                return (
                  <div key={Math.random()}>
                    <Product>
                      <ProductDetail>
                        <Image src={product?.image} />
                        <Details>
                          <ProductName>
                            <b>Product:</b> {product?.name}
                          </ProductName>
                          <ProductId>
                            <b>ID:</b> {product?._id}
                          </ProductId>
                        </Details>
                      </ProductDetail>
                      <PriceDetail>
                        <ProductAmountContainer>
                          <RemoveCircleOutlineOutlinedIcon
                            onClick={() => handleQuantityChange("dec", product)}
                          />
                          <ProductAmount>{product?.quantity}</ProductAmount>
                          <AddCircleOutlineOutlinedIcon
                            onClick={() => handleQuantityChange("inc", product)}
                          />
                          <HighlightOffOutlinedIcon
                            onClick={() => deleteItem(product)}
                          />
                        </ProductAmountContainer>
                        <ProductPrice>$ {product?.price}</ProductPrice>
                      </PriceDetail>
                    </Product>
                    <Hr />
                  </div>
                );
              })
            ) : (
              <div>Nothing in cart</div>
            )}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {total?.toFixed(2)}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>
                $ {(total * 0.05)?.toFixed(2)}
              </SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>
                $ -{(total * 0.05)?.toFixed(2)}
              </SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {total?.toFixed(2)}</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Cart;
