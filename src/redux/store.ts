import categories  from './slices/CategorySleces';
import cart from './slices/CartSlice'
import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import user from './slices/UserSlices'
import product from './slices/ProductSlices'
import productId from './slices/FetchByIdSlice'
import users from './slices/UsersSlice'



export const store = configureStore({
  reducer: {
    user,
    users,
    product,
    categories,
    cart,
    productId,
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
