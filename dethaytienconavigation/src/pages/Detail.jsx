import React from "react";
import { useParams } from "react-router-dom";

const items = [
  { id: 1, title: "Item 1", description: "Description 1", image: "/assets/item1.jpg" },
  { id: 2, title: "Item 2", description: "Description 2", image: "/assets/item2.jpg" },
];

const Detail = () => {
  const { id } = useParams();
  const item = items.find((i) => i.id === parseInt(id));

  if (!item) return <p>Item not found</p>;

  return (
    <div className="p-4">
      <img src={item.image} alt={item.title} className="w-full h-60 object-cover" />
      <h2 className="text-xl font-bold mt-2">{item.title}</h2>
      <p>{item.description}</p>
    </div>
  );
};

export default Detail;