export const setCartItemsToLocalStorage = (items) => {
  localStorage.setItem('cart', JSON.stringify(items))
}

export const getCartItemsFromLocalStorage = () => {
  const result = localStorage.getItem('cart')
  const cart = result ? JSON.parse(result) : null

  return cart
}

export const removeCartItemsFromLocalStorage = () => {
  localStorage.removeItem('cart')
}
