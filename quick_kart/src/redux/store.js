import { configureStore } from '@reduxjs/toolkit'
import hjk from './slices/userSlice'
import kjh from './slices/productSlice'

export default configureStore({
  reducer: {
    userSlice: hjk,
    productSlice:kjh
  },
})