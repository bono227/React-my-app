import "../../data";

import React from "react";

export const ProductCard = (props) => {
  const { data } = props;

  return (
    <div>
      {data.map((product, index) => (
        <div key={index}>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};
