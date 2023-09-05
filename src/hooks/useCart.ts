import { useCallback, useState } from 'react';
import { add, cartProducts, remove } from '../redux/features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { IProduct } from '../redux/services/products/productApi';

export const useCart = () => {
    const cart = useAppSelector(cartProducts);
    const dispatch = useAppDispatch();
    const [delivery, setDelivery] = useState(true);

    const addToCart = useCallback(
        (product: IProduct) => () => {
            dispatch(add(product));
        },
        [dispatch]
    );

    const removeFromCart = useCallback(
        (id: string) => () => {
            dispatch(remove(id));
        },
        [dispatch]
    );

    const totalPrice =
        Math.round(
            (cart.reduce((acc, curr) => {
                return acc + curr.product.price;
            }, 0) +
                (delivery ? 5 : 0)) *
                100
        ) / 100;

    const totalItems = cart.length || 0;

    return {
        cart,
        addToCart,
        removeFromCart,
        totalPrice,
        totalItems,
        setDelivery,
    };
};
