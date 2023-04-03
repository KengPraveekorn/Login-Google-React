// เปรียบเสมือนการสรา้งตัวแปรเอาไว้เก็บข้อมูล

import { createSlice } from '@reduxjs/toolkit'

// การประกาศตัวแปรมารับค่า
const initialState = {
  value: 'สวัสดีครับ Keng Dev',
  user:[],
  it:[]
}

export const userSlice = createSlice({
  name: 'users',
  initialState,

  // เป็นเหมือน func ข้างใน
  reducers: {
    login: (state,action) => {            // action คือข้อมูลที่ส่งมา
      state.value = 'Login นะครับ'
      state.user = action.payload
    },
    logout: (state) => {
      state.value = 'Logout นะครับ'
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, logout, incrementByAmount } = userSlice.actions

export default userSlice.reducer