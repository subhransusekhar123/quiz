import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  all_Quizs : [
    {
        question:"what is your country's name?",
        answer:"india",
        option:["india", "brazil", "pakistan", "indonesia"]
    },
    {
        question:"what is your prime minister's name?",
        answer:"modi",
        option:["india", "brazil", "pakistan", "modi"]
    },
  ]
}

export const quizSlice = createSlice({
  name: 'Quiz',
  initialState,
  reducers: {
    increment: (state) => {
        if(state.value === state.all_Quizs.length-1){
            state.value = 0
        }else{
            state.value += 1
        }
      console.log(state.value)
    },
    decrement: (state) => {
        if(state.value === 0){ state.value = 0 }
        else{  state.value -= 1 }
     
      console.log(state.value)
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = quizSlice.actions; 

export default quizSlice.reducer;