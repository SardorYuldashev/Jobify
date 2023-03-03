import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  info: null,
  token: null,
  isCompleted: false
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
    }
  }
})

export const { loadUserToken, loadUserInfo, loadUserCompleted } = userSlice.actions

const userReducer = userSlice.reducer

export default userReducer