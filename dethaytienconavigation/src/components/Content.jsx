import React from "react";
import { Link } from "react-router-dom";

const items = [
  { id: 1, title: "Item 1", description: "Description 1", image: "/assets/item1.jpg" },
  { id: 2, title: "Item 2", description: "Description 2", image: "/assets/item2.jpg" },
];

const Content = () => {
  return (
    <div className="p-4 grid grid-cols-2 gap-4">
      {items.map((item) => (
        <div key={item.id} className="border p-4 rounded shadow">
          <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
          <h2 className="text-lg font-bold mt-2">{item.title}</h2>
          <p>{item.description}</p>
          <Link to={`/detail/${item.id}`} className="text-blue-600">View More</Link>
        </div>
      ))}
    </div>
  );
};

export default Content;
