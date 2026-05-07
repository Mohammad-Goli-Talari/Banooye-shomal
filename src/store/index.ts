// src/store/index.ts

import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice';
import videoReducer from './slices/videoSlice';
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
    video: videoReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
