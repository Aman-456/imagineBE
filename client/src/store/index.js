import ProfileSliceReducer from "./Features/ProfileSlice";
import LoadingliceReducer from "./Features/loadingSlice";
import { configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

const persistConfig = {
  key: "imagineBE",
  version: 1,
  storage,
};

const ProfileSlice = persistReducer(persistConfig, ProfileSliceReducer);

export const store = configureStore({
  reducer: {
    profile: ProfileSlice,
    loading: LoadingliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
