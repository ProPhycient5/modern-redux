import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 5 };

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    squaringFn: (state) => {
      state.value = state.value ** 2;
    },
    squareRootFn: (state) => {
      state.value = Math.sqrt(state.value);
    },
    multiplyByAmount: (state, action) => {
      state.value = state.value * action.payload;
    },
  },
});

export const { squaringFn, squareRootFn, multiplyByAmount } = counterSlice.actions;

export default counterSlice.reducer;
