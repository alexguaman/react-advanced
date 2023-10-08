import { useContext } from "react";
import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { ProductContext } from "./ProductCard";

export interface Props {
  img?: string;
  className?: string;
  style?: React.CSSProperties;
}
export const ProductImage = ({ img = "", className, style }: Props) => {
  const { product } = useContext(ProductContext);
  const imgToShow = img ? img : product.img ? product.img : noImage;

  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={imgToShow}
      alt="Cofee Mug"
      style={style}
    />
  );
};
