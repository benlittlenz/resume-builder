import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/CounterSlice'
import detaislsReducer from '../redux/PersonalDetailsSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    detailsForm: detaislsReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
