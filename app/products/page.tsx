import { Product } from "@/typings";
import Link from "next/link";
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
      <h1 className="m-5">List of products</h1>

      <div className="flex flex-col space-y-5 p-10">
        {products.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id} className="p-5 bg-gray-200 border border-green-300">
            <h2>{product.title}</h2>
            <h3>${product.price}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
