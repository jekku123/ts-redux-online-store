import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchProducts } from './storeAPI';

export interface IProduct {
    id: number;
    title: string;
    description: string;
    image: string;
}

export type ProductStateType = IProduct[] | { products: [] };

const initState: ProductStateType = {
    products: [],
};

export const productsSlice = createSlice({
    name: 'products',
    initialState: initState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.products = [];
            });
    },
});

export const selectProducts = (state: RootState) => state.products.products;

export default productsSlice.reducer;
