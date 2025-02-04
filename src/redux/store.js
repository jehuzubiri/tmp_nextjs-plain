import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./slices/Global.slice";

const rootReducer = {
  lorem: globalReducer,
};

export const makeStore = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    devTools: process.env.NODE_ENV !== "production",
  });
};

const store = makeStore();

export default store;
