import { Product } from "@/typings";
import React, { Suspense } from "react";
import ProductList from "./ProductList";
import Loading from "./loading";

// Helper function to fetch all products
const getProducts = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data.products;
};

async function ProductsPage() {
  const products: Product[] = await getProducts();
  return (
    <div className="space-x-5 space-y-5">
      <h1 className="m-5">List of products</h1>
      <Suspense fallback={<Loading />}>
        <ProductList />
      </Suspense>
    </div>
  );
}

export default ProductsPage;
