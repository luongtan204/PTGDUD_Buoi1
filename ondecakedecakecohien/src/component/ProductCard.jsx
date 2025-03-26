// 📂 src/components/ProductDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

const products = [
  { id: 1, name: "Birthday Cake", price: 99, image: "https://source.unsplash.com/300x300/?cake", description: "Delicious birthday cake." },
  { id: 2, name: "Chocolate Cake", price: 79, image: "https://source.unsplash.com/300x300/?chocolate", description: "Rich chocolate cake." },
  { id: 3, name: "Ultimate Chocolate Cake", price: 99, image: "https://source.unsplash.com/300x300/?dessert", description: "Perfect for chocolate lovers!" }
];

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <h1>Product not found</h1>;

  return (
    <div className="p-6">
      <img src={product.image} alt={product.name} className="w-64 h-64 object-cover rounded-lg" />
      <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-lg font-bold">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
