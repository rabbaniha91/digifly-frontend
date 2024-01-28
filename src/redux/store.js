import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './reducers/products';

export default configureStore({
  reducer: {
    products: productsReducer
  }
})