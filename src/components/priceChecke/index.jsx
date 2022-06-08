import { useSelector } from "react-redux";

export const PriceCheck = () => {
  const cart = useSelector((state) => state.cart);

  const checkDiscountMilk = cart?.cartItems?.find(
    (cartItem) => cartItem.price === 1.15
  );

  const discountMilk =
    checkDiscountMilk && checkDiscountMilk?.quantity > 3
      ? Math.floor(checkDiscountMilk.quantity / 4)
      : 0;

  const total =
    cart?.cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity * cartItem.price,
      0
    ) -
    discountMilk * 1.15;

  return (
    <div style={{ textAlign: "right", width: "100%" }}>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          flexDirection: "column",
        }}
      >
        <div style={{ fontWeight: 600, marginTop: 12, color: "gray" }}>
          Subtotal
        </div>
        <div style={{ fontWeight: 700 }}>
          £{total.toFixed(2) + discountMilk}
        </div>

        <div style={{ fontWeight: 600, marginTop: 12, color: "gray" }}>
          Discount
        </div>
        <div style={{ fontWeight: 700 }}>£{discountMilk.toFixed(2)}</div>

        <div style={{ fontWeight: 600, marginTop: 12, color: "gray" }}>
          Total
        </div>
        <div style={{ fontWeight: 700 }}>£{total.toFixed(2)}</div>
      </div>
    </div>
  );
};

/*
  const checkDiscountButter = cart?.cartItems?.find(
    (cartItem) => cartItem.price === 0.8
  );

  const checkBread = cart?.cartItems?.find((cartItem) => cartItem.price === 1);

  const discountBread =
    checkDiscountButter && checkDiscountButter?.quantity >= 2
      ? Math.floor(checkDiscountButter.quantity / 2)
      : 0;

  const totalBread =
    checkBread !== undefined && checkBread.quantity >= discountBread 
      ? discountBread * 0.5
      : 0;
*/
