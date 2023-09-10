import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import cartSliceReducer from '../features/cart/cartSlice';
import productApiReducer, { productApi } from '../services/products/productApi';

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApiReducer,
    cart: cartSliceReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
