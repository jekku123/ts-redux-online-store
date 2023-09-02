import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const api: string = 'http://fakestoreapi.com/products';

// if (!api) {
//     throw new Error(
//         'REACT_APP_STORE_API_URL is not defined in environment variables!'
//     );
// }

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const { data } = await axios.get(api);
        return data;
    }
);
