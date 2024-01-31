import { createSlice } from "@reduxjs/toolkit";
import getProducts from "../actions/productsAction";
import { RESET_ACTION } from "../slices";

const initialState = {
    isLoading: false,
    info: [],
    hasNextPage: "",
    nextPage: "",
    totalPages: "",
    errorMessage: ""

}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.info = [...state.info, ...action.payload.docs]
                state.hasNextPage = action.payload.hasNextPage;
                state.nextPage = action.payload.nextPage;
                state.totalPages = action.payload.totalPages;
                state.errorMessage = ""
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.isLoading = false;

                state.errorMessage = action?.error?.message;

            })
            .addCase(RESET_ACTION, (state) => initialState)
    },

});

export default productsSlice.reducer;


