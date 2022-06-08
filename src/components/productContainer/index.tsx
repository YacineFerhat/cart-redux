import { FC } from "react";
import { products } from "data";
import { CardProduct, Title } from "components";
interface Props {}
export const ProductContainer: FC<Props> = () => {
  return (
    <div style={{padding:'50px 10px'}}>
      <Title title="Products" />
      {products.map((product) => (
        <CardProduct data={product} />
      ))}
    </div>
  );
};
