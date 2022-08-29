import { configureStore } from "@reduxjs/toolkit";
import selectedCheckerReducer from "./reducers/selectedChecker";

const store = configureStore({
  reducer: {
    selectedChecker: selectedCheckerReducer,
  },
});

export default store;
