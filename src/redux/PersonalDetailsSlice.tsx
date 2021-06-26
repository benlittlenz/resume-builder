import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'

type DetailsState = {
  fullname?: string
  email?: any
  contactnum?: any
  street?:any
  city?:any
  postcode?:any
  country?:any
  nameSize?: any
  nameWeight?: any
  headerAlignment?: any
  headerDisplayType?: any
}

const initialState: DetailsState = {
  fullname: '',
  email: '',
  contactnum: '',
  street: '',
  city: '',
  postcode: '',
  country: '',
  nameSize: '',
  nameWeight: '',
  headerAlignment: 'center',
  headerDisplayType: '',
}

export const detailSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    formSubmitted: (state, action) => {
      console.log("submitted!!", state)
      console.log("ACTION:", action.payload)
      return {
        ...action.payload,
        nameSize: 'XL',
        nameWeight: 'semibold',
        headerAlignment: 'center',
        headerDisplayType: 'icon',
      }
    },
    changeFontSize: (state, action) => {
      const font = action.payload;
      state.nameSize = font;
    },
    changeFontWeight: (state, action) => {
      const weight = action.payload;
      state.nameWeight = weight;
    },
    changeAlignment: (state, action) => {
      const alignment = action.payload;
      state.headerAlignment = alignment;
    },
    changeHeaderDisplay: (state, action) => {
      state.headerDisplayType = action.payload;
    }
  },
})

export const {
  formSubmitted,
  changeFontSize,
  changeFontWeight,
  changeAlignment,
  changeHeaderDisplay
 } = detailSlice.actions
export const selectDetails = (state: RootState) => state

export default detailSlice.reducer
