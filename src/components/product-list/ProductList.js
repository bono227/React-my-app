import { useThemeContext } from "../../context";
import "./ProductList.css";
import { ProductCard } from "../product-card";

export const ProductList = (props) => {
  const { theme } = useThemeContext();
  const { data } = props;

  return (
    <div
      className="ListContainer"
      style={{
        backgroundColor: theme === "dark" ? "#333" : "#f5f5f5",
        color: theme === "dark" ? "#f5f5f5" : "#333",
      }}
    >
      {data.map((product, index) => (
        <ProductCard data={product} index={index} />
      ))}
    </div>
  );
};
