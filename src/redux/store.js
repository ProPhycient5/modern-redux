import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/counterSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist-indexeddb-storage";

const persistConfig = {
  key: "root",
  storage: storage("database"),
};

const persistedReducer = persistReducer(persistConfig, counterSlice);

export const store = configureStore({
  reducer: {
    counter: persistedReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
  ],
});

export const persistor = persistStore(store);
