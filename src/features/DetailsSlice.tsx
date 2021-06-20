import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'

interface DetailsState {
  fullname?: any
  email?: any
  contactnum?: any
  street?:any
  city?:any
  postcode?:any
  country?:any
  nameSize?: any
}

const initialState: DetailsState = {}

export const detailSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    formSubmitted: (state, action) => {
      console.log("submitted!!", state)
      console.log("ACTION:", action.payload)
      return {
        ...action.payload
      }
    },
    changeFontSize: (state, action) => {
      const font = action.payload;
      state.nameSize = font;
      // console.log('state: ', state)
      // console.log('action: ', action)
    }
  },
})

export const { formSubmitted, changeFontSize } = detailSlice.actions
export const selectDetails = (state: RootState) => state

export default detailSlice.reducer
