import { configureStore } from '@reduxjs/toolkit'
import  portSlice  from '../reducers/todolist/todolist'


export const store = configureStore({
  reducer: {
    portfolio: portSlice,
  },
});