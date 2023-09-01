import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const api: string | undefined = process.env.REACT_APP_STORE_API_URL;

if (!api) {
    throw new Error('REACT_APP_STORE_API_URL is not defined!');
}

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const { data } = await axios.get(api);
        return data;
    }
);
