import React from "react";
import { useNavigate } from "react-router-dom";
import { AiFillShopping } from "react-icons/ai";
import { useCart } from "../context/CartContext"; // 🔹 Import useCart

export default function Header() {
    const navigate = useNavigate();
    const { totalItems } = useCart(); // 🛒 Lấy tổng số sản phẩm từ Context

    return (
        <header className="flex bg-black text-amber-50 justify-center text-3xl items-center py-5 top-0">
            <nav>
                <ul className="flex space-x-7">
                    <li><a className="hover:text-amber-500 transition duration-300" href="/">HOME</a></li>
                    <li><a className="hover:text-amber-500 transition duration-300" href="/menu">MENU & PRICING</a></li>
                    <li><a className="hover:text-amber-500 transition duration-300" href="">CONTACT US</a></li>
                </ul>
            </nav>

            <div className="ml-10 relative">
                <button onClick={() => navigate("/shoppingcart")} className="relative rounded-full bg-amber-500 p-2.5 transition duration-300 hover:bg-white hover:border-amber-500 hover:text-amber-400">
                    <AiFillShopping />
                    {/* 🔴 Hiển thị số lượng sản phẩm */}
                    {totalItems > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-sm rounded-full px-2">
                            {totalItems}
                        </span>
                    )}
                </button>
            </div>
        </header>
    );
}
