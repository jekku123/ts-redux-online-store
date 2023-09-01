import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './storeAPI';

export interface IProduct {
    id: number;
    title: string;
    description: string;
    image: string;
}

const initState: IProduct[] | { products: [] } = {
    products: [],
};

export const productsSlice = createSlice({
    name: 'product',
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

export default productsSlice.reducer;
