import "./ProductList.css";

export const ProductList = (props) => {
  const { data } = props;

  return (
    <div>
      {data.map((product, index) => (
        <div key={index}>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
        </div>
      ))}
      Products
    </div>
  );
};
