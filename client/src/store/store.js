// file นี้ ทำหน้าที่เป็นตัวรวบรวมข้อมูลต่างๆเอาไว้ให้เป็นตัวแปรเดียวแล้วเรียกใช้

import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'

export const store = configureStore({  
  reducer: {
    user:userSlice,
  },
})