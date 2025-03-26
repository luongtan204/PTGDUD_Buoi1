import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, totalPrice, removeFromCart, updateQuantity } = useCart();

  return (
      <div className="p-10">
          <h2 className="text-3xl font-bold mb-5">Giỏ hàng của bạn 🛒</h2>

          {cart.length === 0 ? (
              <p className="text-lg">Giỏ hàng trống.</p>
          ) : (
              <div>
                  {cart.map((item) => (
                      <div key={item.id} className="flex justify-between border-b py-4">
                          <div>
                              <h3 className="text-xl">{item.name}</h3>
                              <p className="text-gray-500">Giá: {item.price.toLocaleString()} VND</p>
                          </div>
                          <div>
                              <input
                                  type="number"
                                  min="1"
                                  value={item.quantity}
                                  onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                                  className="w-16 text-center border rounded"
                              />
                              <button
                                  onClick={() => removeFromCart(item.id)}
                                  className="ml-4 text-red-500 hover:text-red-700"
                              >
                                  ❌ Xóa
                              </button>
                          </div>
                      </div>
                  ))}
                  <h3 className="text-2xl font-semibold mt-5">Tổng tiền: {totalPrice.toLocaleString()} VND</h3>
              </div>
          )}
      </div>
  );
};

export default Cart;
