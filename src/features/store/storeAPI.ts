import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const api: string | undefined = process.env.API_URL;

if (!api) {
    throw new Error('API_URL not found in environment variables');
}

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const { data } = await axios.get(api);
        return data;
    }
);
