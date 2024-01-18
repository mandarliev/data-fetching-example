import React from "react";
import { Product } from "@/typings";
import Link from "next/link";

const getProducts = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data.products;
};

async function ProductList() {
  const products: Product[] = await getProducts();
  return (
    <div className="flex flex-col space-y-5">
      {products?.map((product) => (
        <Link
          href={`/products/${product.id}`}
          key={product.id}
          className="p-5 bg-gray-200 border border-green-300"
        >
          <h2>{product.title}</h2>
          <h3>${product.price}</h3>
        </Link>
      ))}
    </div>
  );
}

export default ProductList;
