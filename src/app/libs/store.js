"use client";

import productReducer from "@/redux/reducer/product/getProductSlice";
import userReducer from "@/redux/reducer/userSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
  },
});
