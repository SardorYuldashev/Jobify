import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  info: null,
  token: null
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadUserToken(state, { payload }) {
      state.token = payload
      console.log(state.token);
    }
  }
})

export const { loadUserToken } = userSlice.actions

const userReducer = userSlice.reducer

export default userReducer