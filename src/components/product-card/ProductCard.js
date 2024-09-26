import React from "react";
import "./ProductCard.css";
import { Button } from "../button";
import { Link } from "react-router-dom";

export const ProductCard = (props) => {
  const { data, index } = props;

  return (
    <div className="card-container" key={index}>
      <h2>{data.name}</h2>
      <p>"{data.description}"</p>
      <div>
        <Link to={"/signup"}>
          <Button>Buy</Button>
        </Link>
      </div>
    </div>
  );
};
