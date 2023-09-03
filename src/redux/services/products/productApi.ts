import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from '../../../types';

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://fakestoreapi.co' }),
    endpoints: (builder) => ({
        getProducts: builder.query<IProduct[], void>({
            query: () => 'products',
        }),
    }),
});

export const { useGetProductsQuery } = productApi;

export default productApi.reducer;
