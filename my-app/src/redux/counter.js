import { createSlice } from '@reduxjs/toolkit'


export const counterSlice = createSlice({
  name: 'count',         //This is a name to distinguis & id different bw different slices & stores, This will be exported as counterReducer
  initialState:{
  count: 0,                 // This contains initial state with initial values
},
  reducers: {              //this contains reducer functions
    increment: (state) => {     //Increment reducer function
      // Redux Toolkit allows us to write "mutating" logic in reducers. It doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new immutable state based off those changes
      state.count += 1
    },
    decrement: (state) => {    //Decrement reducer function
      state.count -= 1
    },
    incrementByAmount: (state, action) => {  //3rd reducer function
      state.count += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer