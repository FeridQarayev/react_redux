import { configureStore } from '@reduxjs/toolkit'
import favousReducer from './favous/favous'

export default configureStore({
  reducer: {
    favous: favousReducer,
  },
})