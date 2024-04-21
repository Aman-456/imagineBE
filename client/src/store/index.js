import ProfileSliceReducer from "./Features/ProfileSlice";
import LoadingliceReducer from "./Features/loadingSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    profile: ProfileSliceReducer,
    loading: LoadingliceReducer,
  },
});
