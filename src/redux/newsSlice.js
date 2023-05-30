import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  reservations: [],
  loading: true,
  error: null,
}

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
})

export const { } = counterSlice.actions

export default newsSlice.reducer