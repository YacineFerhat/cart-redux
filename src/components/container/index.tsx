import { ReactNode, FC } from "react";

interface Props {
  children: ReactNode;
}
const container = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: 10,
  height: "100vh",
  padding:200
};
export const Container: FC<Props> = ({ children }) => {
  return <div style={container}>{children}</div>;
};
