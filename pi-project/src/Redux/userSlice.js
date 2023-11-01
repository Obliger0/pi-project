import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: {},
  },
  reducers: {
    saveSignedInUserinfo: (state, action) => {
      state.userData = action.payload;
      // console.log({ ...state, action });
      },
  },
});

export const { saveSignedInUserinfo } = userSlice.actions;

export default userSlice.reducer;
