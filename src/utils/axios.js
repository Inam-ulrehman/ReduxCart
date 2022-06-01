import axios from 'axios'

export const customFetchProducts = axios.create({
  baseURL: 'https://course-api.com/react-store-products',
})
