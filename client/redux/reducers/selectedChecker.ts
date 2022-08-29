import { createSlice } from "@reduxjs/toolkit";

const selectedCheckerSlice = createSlice({
  name: "selectedChecker",
  initialState: {
    value: undefined,
  },
  reducers: {
    set: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { set } = selectedCheckerSlice.actions;
export default selectedCheckerSlice.reducer;
