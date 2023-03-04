import { createSlice } from '@reduxjs/toolkit'
import { localTokenKey } from '../../Components/Constants'

let token = localStorage.getItem(localTokenKey)
let isCompleted = localStorage.getItem("isCompleted")
let userInfo = JSON.parse(localStorage.getItem("userInfo"))
let userEmail = localStorage.getItem("userEmail")


const initialState = {
  info: userInfo || null,
  token: token || null,
  isCompleted: isCompleted || false,
  email: userEmail || null
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {    
    loadUserToken(state, { payload }) {
      state.token = payload
    },
    loadUserInfo(state, { payload }) {
      state.info = payload
    },
    loadUserCompleted(state, { payload }) {
      state.isCompleted = payload
    },
    loadUserEmail(state, { payload }) {
      state.email = payload
    }
  }
})

export const { loadUserToken, loadUserInfo, loadUserCompleted, loadUserEmail } = userSlice.actions

const userReducer = userSlice.reducer

export default userReducer