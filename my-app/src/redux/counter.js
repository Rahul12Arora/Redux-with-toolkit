import { createSlice } from '@reduxjs/toolkit'


export const counterSlice = createSlice({
  name: 'count',         //This is a name to distinguish & id different bw different slices & stores
  
  initialState:{
  count: 0,                 // This is the actual variable, we give it initial value here
},

  reducers: {              //this contains reducer functions/actions
    increment: (state) => {     //Increment reducer function
                                                                                        // Redux Toolkit allows us to write "mutating" logic in reducers. It doesn't actually mutate the state because it uses the Immer library,which detects changes to a "draft state" and produces a brand new immutable state based off those changes
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

export const { increment, decrement, incrementByAmount } = counterSlice.actions // Action creators are generated for each case reducer function, we export them to use in our functions

export default counterSlice.reducer; //This is the full reducer that we need to export to put in the store