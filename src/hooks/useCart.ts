import { useState } from 'react';
import { add, cartProducts, remove } from '../redux/features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { IProduct } from '../redux/services/products/productApi';

export const useCart = () => {
    const cart = useAppSelector(cartProducts);
    const dispatch = useAppDispatch();
    const [delivery, setDelivery] = useState(true);

    const addToCart = (product: IProduct) => () => {
        dispatch(add(product));
    };

    const removeFromCart = (id: number) => () => {
        dispatch(remove(id));
    };
    const changeDeliveryMethod = () => {
        setDelivery(!delivery);
    };

    const totalPrice =
        Math.round(
            (cart.reduce((acc, curr) => {
                return acc + curr.product.price * curr.cartQuantity;
            }, 0) +
                (delivery ? 5 : 0)) *
                100
        ) / 100;

    const totalItems = cart.reduce((acc, curr) => {
        return acc + curr.cartQuantity;
    }, 0);

    return {
        cart,
        addToCart,
        removeFromCart,
        totalPrice,
        totalItems,
        changeDeliveryMethod,
    };
};
