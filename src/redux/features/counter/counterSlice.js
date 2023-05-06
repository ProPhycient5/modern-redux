import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 5 };

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    squaringFn: (state) => {
      state.value = state.value ** 2;
    },
    increment: (state) => {
      state.value += 1;
    },
    multiplyByAmount: (state, action) => {
      state.value = state.value * action.payload;
    },
    incrementByAmount: (state, action) => {
      state.value = state.value + action.payload;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { squaringFn, increment, multiplyByAmount, reset, incrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
