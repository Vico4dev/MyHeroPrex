import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import heroReducer from './slices/heroSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    hero: heroReducer,
  },
});
export default store;