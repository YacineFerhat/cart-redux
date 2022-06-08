import { FC } from "react";
import { Title, CartCard, PriceCheck } from "components";
import { useSelector } from "react-redux";
interface Props {}
const container = {
  marginLeft: 20,
  backgroundColor: "#E0E0E0",
  padding: "50px 10px",
};
export const CartContainer: FC<Props> = () => {
  const cart = useSelector((state: any) => state.cart);
  return (
    <div style={container}>
      <Title title="Cart" />
      {cart?.cartItems?.map((object: any) => (
        <div style={{}} key={object.title}>
          <CartCard data={object} />
          <div
            style={{
              height: 1,
              width: "100%",
              backgroundColor: "gray",
              marginTop: 8,
              marginBottom: 8,
            }}
          />
        </div>
      ))}
      <PriceCheck />
    </div>
  );
};
