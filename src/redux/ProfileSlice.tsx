import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'

type ProfileState = {
  profile?: string
}

const initialState: ProfileState = {
  profile: '',
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    formSubmitted: (state, action) => {
      console.log("submitted!!", state)
      console.log("ACTION:", action.payload)
      state.profile = action.payload.profile
    },
  },
})

export const {
  formSubmitted,
 } = profileSlice.actions
export const selectProfile = (state: RootState) => state

export default profileSlice.reducer
