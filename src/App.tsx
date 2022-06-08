import React from "react";
import { Container, CartContainer, ProductContainer } from "components";
import { useSelector } from "react-redux";

function App() {
  const cart = useSelector((state: any) => state.cart);
  return (
    <Container>
      <ProductContainer />

      {cart.cartItems.length > 0 && <CartContainer />}
    </Container>
  );
}

export default App;
