import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../../types';
import type { RootState } from '../../store';

interface ICart {
    products: IProduct[];
}

const initialState: ICart = {
    products: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<IProduct>) => {
            state.products.push(action.payload);
        },
        remove: (state, action: PayloadAction<number>) => {
            state.products = state.products.filter(
                (item) => item.id !== action.payload
            );
        },
    },
});

export const { add, remove } = cartSlice.actions;

export const cartCount = (state: RootState) => state.cart.products;

export default cartSlice.reducer;
