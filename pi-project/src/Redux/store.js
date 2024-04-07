import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import imageReducer from "./imageSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    image: imageReducer,
  },
});