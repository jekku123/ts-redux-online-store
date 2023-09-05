import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import { IProduct } from '../../services/products/productApi';
import type { RootState } from '../../store';

export interface ICart {
    cartItems: {
        cartItemId: string;
        product: IProduct;
    }[];
}

const initialState: ICart = {
    cartItems: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<IProduct>) => {
            state.cartItems.push({
                cartItemId: uuid(),
                product: action.payload,
            });
        },
        remove: (state, action: PayloadAction<string>) => {
            state.cartItems = state.cartItems.filter(
                (item) => item.cartItemId !== action.payload
            );
        },
    },
});

export const { add, remove } = cartSlice.actions;
export const cartProducts = (state: RootState) => state.cart.cartItems;

export default cartSlice.reducer;
