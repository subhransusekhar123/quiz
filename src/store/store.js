import { configureStore } from '@reduxjs/toolkit'
import quizReducer from "../Slice/quizSlice";

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
})