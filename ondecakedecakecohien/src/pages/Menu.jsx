// 📂 src/components/Menu.jsx
import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Birthday Cake", price: 99, image: "https://source.unsplash.com/150x150/?cake" },
  { id: 2, name: "Chocolate Cake", price: 79, image: "https://source.unsplash.com/150x150/?chocolate" },
  { id: 3, name: "Ultimate Chocolate Cake", price: 99, image: "https://source.unsplash.com/150x150/?dessert" }
];

const Menu = () => {
  const { addToCart } = useCart();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Menu & Pricing</h1>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-lg">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg" />
            <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
            <p className="text-lg font-bold">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>
            <Link to={`/product/${product.id}`} className="block text-center mt-2 text-blue-600">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
