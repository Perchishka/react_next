import { configureStore } from "@reduxjs/toolkit";
import { loggerMiddleware } from "./middlewares/logger";
import cart from "./ui/cart/index";

const store = configureStore({
  reducer: {
    cart,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    loggerMiddleware,
  ],
});

export default store;
