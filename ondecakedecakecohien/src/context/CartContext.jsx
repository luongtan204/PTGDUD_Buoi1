import { createContext, useContext, useReducer, useEffect } from "react";

// Tạo Context
const CartContext = createContext();

// Hook để sử dụng giỏ hàng
export const useCart = () => useContext(CartContext);

// 🛒 Định nghĩa các action types
const actionTypes = {
  ADD: "ADD_TO_CART",
  REMOVE: "REMOVE_FROM_CART",
  UPDATE: "UPDATE_QUANTITY",
  LOAD: "LOAD_CART",
};

// 🎯 Reducer quản lý giỏ hàng
const cartReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOAD:
      return action.payload || []; // Load giỏ hàng từ localStorage

    case actionTypes.ADD:
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];

    case actionTypes.REMOVE:
      return state.filter((item) => item.id !== action.payload);

    case actionTypes.UPDATE:
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: Math.max(1, action.payload.quantity) }
          : item
      );

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  // 🎯 Sử dụng useReducer thay vì useState
  const [cart, dispatch] = useReducer(cartReducer, [], (initialState) => {
    try {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : initialState;
    } catch (error) {
      console.error("Lỗi khi đọc giỏ hàng từ localStorage:", error);
      return initialState;
    }
  });

  // ✅ Lưu giỏ hàng vào localStorage khi có thay đổi
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Lỗi khi lưu giỏ hàng vào localStorage:", error);
    }
  }, [cart]);

  // 🔢 Tính tổng số sản phẩm trong giỏ hàng
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  // 💰 Tính tổng tiền
  const totalPrice = cart.reduce((total, item) => total + item.quantity * item.price, 0);

  // 🛒 Hàm thêm sản phẩm
  const addToCart = (product) => dispatch({ type: actionTypes.ADD, payload: product });

  // ❌ Xóa sản phẩm khỏi giỏ hàng
  const removeFromCart = (id) => dispatch({ type: actionTypes.REMOVE, payload: id });

  // 🔄 Cập nhật số lượng sản phẩm
  const updateQuantity = (id, quantity) =>
    dispatch({ type: actionTypes.UPDATE, payload: { id, quantity } });

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
