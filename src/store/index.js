import { configureStore } from "@reduxjs/toolkit";
import todoListDataSlice from "./data-slice";

const store = configureStore({
  reducer: { todoListData: todoListDataSlice.reducer },
  // issue
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
