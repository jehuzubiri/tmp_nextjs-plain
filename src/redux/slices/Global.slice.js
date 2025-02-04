import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  userDetails: {
    username: "jehu",
  },
};

const mystore = createSlice({
  name: "lorem",
  initialState,
  reducers: {
    stackIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    stackUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
  },
});

const { reducer, actions } = mystore;
export const {
  //
  stackIsLoggedIn,
  stackUserDetails,
} = actions;

export default reducer;
