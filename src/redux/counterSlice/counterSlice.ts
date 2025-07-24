import { createSlice, PayloadAction } from '@reduxjs/toolkit'
export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    handleIncrease :(state, action:PayloadAction<{num :number}>)=>{
state.value= state.value + action.payload.num
    },
     handleDecrease :(state, action:PayloadAction<{num :number}>)=>{
state.value= state.value - action.payload.num
    }
  },
})

// Action creators are generated for each case reducer function
export const {handleIncrease,handleDecrease } = counterSlice.actions

export default counterSlice.reducer;
