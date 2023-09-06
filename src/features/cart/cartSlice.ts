import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../services/products/productApi';
import { RootState } from '../../store/store';

export interface ICart {
    cartItems: {
        product: IProduct;
        cartQuantity: number;
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
            const index = state.cartItems.findIndex(
                (item) => item.product.id === action.payload.id
            );
            if (index > -1) {
                state.cartItems[index].cartQuantity += 1;
            } else {
                state.cartItems.push({
                    product: action.payload,
                    cartQuantity: 1,
                });
            }
        },
        remove: (state, action: PayloadAction<number>) => {
            const index = state.cartItems.findIndex(
                (item) => item.product.id === action.payload
            );

            if (state.cartItems[index].cartQuantity > 1) {
                state.cartItems[index].cartQuantity -= 1;
            } else {
                state.cartItems = state.cartItems.filter(
                    (item) => item.product.id !== action.payload
                );
            }
        },
        removeAll: (state, action: PayloadAction<number>) => {
            state.cartItems = state.cartItems.filter(
                (item) => item.product.id !== action.payload
            );
        },
    },
});

export const { add, remove, removeAll } = cartSlice.actions;
export const cartProducts = (state: RootState) => state.cart.cartItems;

export default cartSlice.reducer;
