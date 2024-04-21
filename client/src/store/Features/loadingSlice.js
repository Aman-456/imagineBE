import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

export const LoadingSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = LoadingSlice.actions;

export default LoadingSlice.reducer;
