import { configureStore } from '@reduxjs/toolkit';
import auctionReducer from './slices/auctionSlice';
import bidReducer from './slices/bidSlice';


export const store = configureStore({
  reducer: {
    auction: auctionReducer,
    bid: bidReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch