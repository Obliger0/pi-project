import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: {},
  },
  reducers: {
    saveCurrentUserinfo: (state, action) => {
      console.log({ state });
      state.userData = action.payload;
      console.log({ ...state, action });
      //   return state;
    },
  },
});

export const { saveCurrentUserinfo } = userSlice.actions;

export default userSlice.reducer;
