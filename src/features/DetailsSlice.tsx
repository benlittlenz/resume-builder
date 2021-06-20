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
  nameWeight?: any
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
    },
    changeFontWeight: (state, action) => {
      const weight = action.payload;
      state.nameWeight = weight;
    }
  },
})

export const { formSubmitted, changeFontSize, changeFontWeight } = detailSlice.actions
export const selectDetails = (state: RootState) => state

export default detailSlice.reducer
