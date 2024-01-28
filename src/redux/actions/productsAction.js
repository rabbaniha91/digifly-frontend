import axios from "../../axios/axios";
import { GET_PRODUCTS_REQUEST, GET_PRODUCTS_FAIL, GET_PRODUCTS_SUCCESS } from "./types";


const getPRoducts = (product, pageNum, pageLimit) => async (dispatch) => {
    try {
        dispatch({ type: GET_PRODUCTS_REQUEST })
        const controller = new AbortController()
        const { signal } = controller;
        const { data } = await axios.get(`
        /products/getProducts/${product}?pageNum=${pageNum}&pageLimit=${pageLimit}
        `, { signal })

        dispatch({type: GET_PRODUCTS_SUCCESS, payload: {
            info: data.docs,
            hasNextPage: data.hasNextPage,
            nextPage: data.nextPage,
            totalPage: data.totalPage
        }})
    } catch (error) {
        if (signal.aborted) return
        let errorMessage = "";
        if (!error?.response) {
            errorMessage = "پاسخی از سرور دریافت نشد!"
        } else {
            errorMessage = error?.response?.data?.message
        }

        dispatch({ type: GET_PRODUCTS_FAIL, payload: { errorMessage } })
    }
}