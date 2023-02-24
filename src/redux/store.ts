import { configureStore } from '@reduxjs/toolkit';
import paisanosReducer from './slices/paisanosSlice';
import bidReducer from './slices/bidSlice';


export const store = configureStore({
  reducer: {
    paisanos: paisanosReducer,
    bid: bidReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch