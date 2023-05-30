import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  reservations: [],
  loading: true,
  error: null,
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { decrement } = newsSlice.actions;

export default newsSlice.reducer;
