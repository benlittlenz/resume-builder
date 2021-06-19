import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'

interface DetailsState {
  fullname?: any
  email?: any
  phone?: any
  street?:any
  city?:any
  postcode?:any
  country?:any
}

const initialState: DetailsState = {}

export const detailSlice = createSlice({
  name: 'details',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    formSubmitted: (state, action) => {
      console.log("submitted!!", state)
      console.log("ACTION:", action.payload)
      return {
        ...action.payload
      }
    },
  },
})

export const { formSubmitted } = detailSlice.actions
export const selectDetails = (state: RootState) => state

export default detailSlice.reducer
