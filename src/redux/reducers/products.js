import {
    GET_PRODUCTS_FAIL, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS
} from "../actions/types"

const initialState = {
    isLoading: false,
    info: "",
    hasNextPage: "",
    nextPage: "",
    totalPage: "",
    errorMessage: ""

}

const productsReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case GET_PRODUCTS_REQUEST:
            return {
                isLoading: true,
                errorMessage: "",
                ...state
            }
        case GET_PRODUCTS_SUCCESS:
            return {
                isLoading: false,
                info: [...state.info, payload.products],
                hasNextPage: payload.hasNextPage,
                nextPage: payload.nextPage,
                totalPage: payload.totalPage,
                errorMessage: ""
            }
        case GET_PRODUCTS_FAIL:
            return {
                ...state,
                errorMessage: payload.errorMessage,
                isLoading: false
            }
        default:
            return initialState
    }
}


export default productsReducer