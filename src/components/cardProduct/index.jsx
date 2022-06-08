import ReactStars from "react-stars";
import { useDispatch } from "react-redux";
import { addItem } from "redux/action";

/*interface Props {
  data: {
    title: string;
    price: number;
    picture: string;
    description: string;
    stars: number;
  };
}
*/
const container = {
  border: "1px solid gray",
  margin: "12px 0px",
  borderRadius: 12,
  padding: 8,
};
const flex = {
  display: "flex",
  alignItems: "center",
};
const flex2 = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  padding: 8,
};
const titleStyle = {
  fontWeight: 700,
};

const image = {
  height: 45,
  width: 90,
  padding: 8,
};

const button = {
  color: "white",
  backgroundColor: "#2a8cff",
  padding: "4px 32px",
  cursor: "pointer",
  border: "1px solid gray",
  borderRadius: 4,
};
export const CardProduct = ({
  data: { title, price, picture, description, stars },
}) => {
  const dispatch = useDispatch();
  const handleAddItemToCart = () => {
    dispatch(addItem({ title, picture, price }));
  };
  return (
    <div style={container}>
      <div style={flex}>
        <img style={image} src={picture} alt={title} />
        <div style={flex2}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={titleStyle}>{title}</div>
            <div>{description}</div>
          </div>
          <div>
            <div>
              <ReactStars
                count={5}
                value={stars}
                size={24}
                color2={"#ffd700"}
              />
            </div>
            <div style={{ fontWeight: 700, textAlign: "right" }}>
              £{price.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ display: "flex", width: "100%", justifyContent: "flex-end" }}
      >
        <button onClick={handleAddItemToCart} style={button}>
          ADD TO CART
        </button>
      </div>
    </div>
  );
};
