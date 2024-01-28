import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios/axios';

const controller = new AbortController()
const { signal } = controller;

const getProducts = createAsyncThunk(
    'products/getProducts',
    async ({ mainCategory, pageNum, pageLimit }) => {
        try {
            const { data } = await axios.get(
                `/products/getProducts/${mainCategory}?pageNum=${pageNum}&pageLimit=${pageLimit}`,
                { signal }
            );
            return data;
        } catch (error) {
            let errorMessage = ""
            if (!error?.response) {
                errorMessage = 'پاسخی از سرور دریافت نشد!';
            } else {
                errorMessage = error?.response?.data?.message || error?.message
            }

            throw errorMessage;
        }
    }
);


export default getProducts;