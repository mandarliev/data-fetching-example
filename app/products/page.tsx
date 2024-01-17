import { Product } from "@/typings";
import React from "react";

// Helper function to fetch all products
const getProducts = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data.products;
};

async function ProductsPage() {
  const products: Product[] = await getProducts();
  return (
    <div>
      <h1>List of products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <h3>${product.price}</h3>
        </div>
      ))}
    </div>
  );
}

export default ProductsPage;
