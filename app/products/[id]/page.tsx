import { Product } from "@/typings";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

type PageProps = {
  params: {
    id: string;
  };
};

// Helper function for fetching the data
const getProduct = async (id: string) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    next: { revalidate: 10 },
  });

  const product: Product = await res.json();
  return product;
};

async function ProductPage({ params: { id } }: PageProps) {
  const product = await getProduct(id);

  if (!product.id) return notFound();

  return (
    <div>
      <header className="p-5 bg-green-400">
        <nav className="flex space-x-10">
          <Link href="/">Home</Link>
          <p>Contact</p>
          <p>Link</p>
        </nav>
      </header>
      <div className="m-5 space-y-5">
        <h1>{product.title}</h1>
        <h2>{product.description}</h2>
        <h3>${product.price}</h3>
      </div>
    </div>
  );
}

export default ProductPage;

// Helper function to fetch all products
const getProducts = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data.products;
};

export async function generateStaticParams() {
  const products: Product[] = await getProducts();

  return products.map((product) => ({
    id: String(product.id),
  }));
}
