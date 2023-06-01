import { configureStore, combineReducers } from '@reduxjs/toolkit';
import NewsSlice from './newsSlice';

const rootReducer = combineReducers({
  news: NewsSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
