import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = 'https://fakestoreapi.com/';

export interface IProduct {
    id: number;
    title: string;
    description: string;
    image: string;
    price: number;
    category: string;
    rating: { count: number; rate: number };
}

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: (builder) => ({
        getProducts: builder.query<IProduct[], void>({
            query: () => 'products',
        }),
    }),
});

export const { useGetProductsQuery } = productApi;

export default productApi.reducer;
