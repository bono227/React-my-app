import React from "react";
import "./ProductCard.css";
import { Button, Image } from "../../components";
import { Link } from "react-router-dom";
import { useThemeContext } from "../../context";
import { FaCartShopping } from "react-icons/fa6";

export const ProductCard = (props) => {
  const { theme } = useThemeContext();
  const { data, index } = props;

  return (
    <div
      className="card-container"
      key={index}
      style={{
        backgroundColor: theme === "dark" ? "#003d66" : "#b3e0ff",
        color: theme === "dark" ? "#ffffff" : "#333",
      }}
    >
      <h2>{data.name}</h2>
      <p>"{data.description}"</p>

      <div id="buy-btn">
        <img id="preview" src={data.image} alt="photo" />
        <Link to={"/signup"}>
          <Button>Buy Now</Button>
          <Button>
            <FaCartShopping />
          </Button>
        </Link>
      </div>
    </div>
  );
};
