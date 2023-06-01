import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';



export const newsThunk = createAsyncThunk('/news', async ({rejecctWithValue}) => {
  try {
    const response = await getLatestNews();

    if (response.status === 200) {
      return response.data
    }
    return rejecctWithValue('Failed to get Latest news')
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const initialState = {
  reservations: [],
  loading: true,
  error: null,
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {

  },
});

// export const { decrement } = newsSlice.actions;

export default newsSlice.reducer;
