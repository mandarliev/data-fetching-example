import React from "react";

// Helper function to fetch all products
const getProducts = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data.products;
};

async function ProductsPage() {
  const products = await getProducts();
  return (
    <div>
      <h1>List of products</h1>
      
    </div>
  );
}

export default ProductsPage;
