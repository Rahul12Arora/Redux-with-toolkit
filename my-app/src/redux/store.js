import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // counter2:counterreducer2 2nd slice
}
})