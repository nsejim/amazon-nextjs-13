import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./slices/basket";
import catalogReducer from "./slices/catalog";

export const store = configureStore ({
  reducer: {
    basket: basketReducer,
    catalog: catalogReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;