import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartReducer'
import productsReducer from './features/products/productsReducer'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
})
