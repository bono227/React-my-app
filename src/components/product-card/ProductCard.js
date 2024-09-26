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
        <Link to={"/signup"} id="buy-container">
          <Button
            style={{
              backgroundColor: theme === "dark" ? "#b3e0ff" : "#003d66",
              color: theme === "dark" ? "#333" : "#ffffff",
            }}
          >
            Buy Now
          </Button>
          <Button
            style={{
              backgroundColor: theme === "dark" ? "#b3e0ff" : "#003d66",
              color: theme === "dark" ? "#333" : "#ffffff",
            }}
          >
            <FaCartShopping />
          </Button>
        </Link>
      </div>
    </div>
  );
};
