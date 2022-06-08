import { FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "redux/action";

const pictureStyle = {
  height: 50,
  width: 70,
  border: "1px solid gray",
  borderRadius: "100%",
};
const flex = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const titleStyle = {
  fontWeight: 600,
  marginBottom: 12,
};
const icon = {
  borderRadius: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 5,
  backgroundColor: "white",
  border: "1px solid gray",
  cursor: "pointer",
  margin: "0px 20px",
};

const quantityStyle = {
  fontWeight: 600,
};

const priceStyle = {
  fontWeight: 600,
};

export const CartCard = ({ data: { picture, title, quantity, price } }) => {
  const dispatch = useDispatch();
  const handleAddItemToCart = () => {
    dispatch(addItem({ title, picture, price }));
  };
  const handleRemoveItem = () => {
    dispatch(removeItem({ title }));
  };
  return (
    <div style={flex}>
      <img style={pictureStyle} src={picture} alt={title} />
      <div
        style={{
          padding: 10,
          marginLeft: title === "Fresh Suiss milk" ? 16 : 0,
        }}
      >
        <div style={titleStyle}>{title}</div>
        <div style={flex}>
          <div>quantity</div>{" "}
          <div onClick={handleRemoveItem} style={icon}>
            <FaMinus />
          </div>
          <div style={quantityStyle}> {quantity}</div>
          <div onClick={handleAddItemToCart} style={icon}>
            <FaPlus />
          </div>
        </div>
      </div>
      <div style={priceStyle}>£{price.toFixed(2)}</div>
    </div>
  );
};
