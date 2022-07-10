import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: 0,
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setType: (state, action) => {
      state.type = action.payload;
    },
  },
});

export const { setType } = layoutSlice.actions;
export default layoutSlice.reducer;
