import React from "react";
import { Footer, Header, ProductList } from "../../components";
import { productsData } from "../../data";

export const Home = () => {
  return (
    <div>
      <Header />
      <ProductList data={productsData} />
      <Footer />
    </div>
  );
};
