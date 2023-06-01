import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getLatestNews, getPopularNews } from './api/newsAPI';

export const newsThunk = createAsyncThunk('/news', async (data = '', { rejectWithValue }) => {
  console.log(data);
  try {
    const response = await getLatestNews();
    console.log(response);
    if (response.status === 200) {
      return response.data;
    }
    return rejectWithValue('Failed to get Latest news');
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const popularNewsThunk = createAsyncThunk('/popular-news', async (data = '', { rejectWithValue }) => {
  console.log(data);
  try {
    const response = await getPopularNews();
    console.log(response);
    if (response.status === 200) {
      return response.data;
    }
    return rejectWithValue('Failed to get popular news');
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const initialState = {
  latestNews: {},
  popularNews: [],
  loading: true,
  error: null,
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    // Latest News
    builder.addCase(newsThunk.pending, (state) => ({ ...state, error: null, loading: true }));
    builder.addCase(newsThunk.fulfilled, (state, action) => ({
      ...state, latestNews: action.payload, error: null, loading: false,
    }));
    builder.addCase(newsThunk.rejected, (state, action) => ({
      ...state, error: action.payload, loading: false,
    }));

    // Popular news
    builder.addCase(popularNewsThunk.pending, (state) => ({
      ...state, error: null, loading: true,
    }));
    builder.addCase(popularNewsThunk.fulfilled, (state, action) => ({
      ...state, popularNews: action.payload.articles, error: null, loading: false,
    }));
    builder.addCase(popularNewsThunk.rejected, (state, action) => ({
      ...state, error: action.payload, loading: false,
    }));
  },
});

export const { decrement } = newsSlice.actions;

export default newsSlice.reducer;
