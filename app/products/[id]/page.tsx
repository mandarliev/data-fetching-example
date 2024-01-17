import { notFound } from "next/navigation";
import React from "react";

type PageProps = {
  params: {
    id: string;
  };
};

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

// Helper function for fetching the data
const getProduct = async (id: string) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    next: { revalidate: 10 },
  });

  const product: Product = await res.json();
  console.log("FETCHING DATA NEW", product);
  return product;
};

async function ProductPage({ params: { id } }: PageProps) {
  const product = await getProduct(id);

  if (!product.id) return notFound();

  return (
    <div className="m-5 space-y-5">
      <h1>{product.title}</h1>
      <h2>{product.description}</h2>
      <h3>${product.price}</h3>
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
