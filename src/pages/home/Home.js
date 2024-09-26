import React from "react";
import { Footer, Header, ProductList } from "../../components";
import { smartPhonesData } from "../../data";

export const Home = () => {
  return (
    <div>
      <Header />
      <ProductList data={smartPhonesData} />
      <Footer />
    </div>
  );
};
