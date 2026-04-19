import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  admin: null, // will store user object,
  loading: true,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setAdmin: (state, action) => {
      state.admin = action.payload; // store full user (email etc.)
      state.loading = false; 
    },
    logout: (state) => {
      state.admin = null;
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

  },
});

export const { setAdmin, logout, setLoading } = adminSlice.actions;
export default adminSlice.reducer;