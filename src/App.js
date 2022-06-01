import { React, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { getProducts } from './features/products/productsReducer'
import {
  Error,
  Home,
  Products,
  SharedLayout,
  SharedProductLayout,
  SingleProduct,
  Cart,
} from './pages'
import { useDispatch, useSelector } from 'react-redux'
import { cartTotal } from './features/cart/cartReducer'

const App = () => {
  const dispatch = useDispatch()
  const { cartItems } = useSelector((state) => state.cart)

  useEffect(() => {
    dispatch(getProducts())
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    dispatch(cartTotal())
    // eslint-disable-next-line
  }, [cartItems])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />

          <Route path='*' element={<Error />} />
          <Route path='products' element={<SharedProductLayout />}>
            <Route index element={<Products />} />
            <Route path='/products/:productId' element={<SingleProduct />} />
            <Route path='/products/cart' element={<Cart />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
