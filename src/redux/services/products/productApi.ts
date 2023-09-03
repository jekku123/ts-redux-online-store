import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from '../../../types';

const API_URL = 'https://fakestoreapi.com/';

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
