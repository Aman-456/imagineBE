// profileSlice.js
import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    username: null,
    email: null,
    token: null,
    _id: null,
  },
  reducers: {
    setProfile: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state._id = action.payload._id;
    },
  },
});

export const { setProfile } = profileSlice.actions;

export default profileSlice.reducer;
