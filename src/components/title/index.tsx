import { FC } from "react";

interface Props {
  title: string;
}

const styling = {
  fontWeight: 600,
  fontSize: 30,
  marginBottom: 30,
  textTransform: "uppercase",
};

export const Title: FC<Props> = ({ title }) => {
  return (
    <div
      style={{
        fontWeight: 600,
        fontSize: 30,
        marginBottom: 30,
        textTransform: "uppercase",
      }}
    >
      {title}
    </div>
  );
};
