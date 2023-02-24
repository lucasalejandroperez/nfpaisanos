import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { currentBidMock } from '../../mocks/currentBidMock';
import type { ICurrentBid } from '../../types/currentBidInterfaces';

interface CurrentBidProps {
  loading: boolean,
  data: ICurrentBid | null,
  error: any | undefined,
}

interface PaisanosSliceInitialStateProps {
  currentBid: CurrentBidProps,
}

const initialState: PaisanosSliceInitialStateProps = {
  currentBid: {
    loading: true,
    data: null, 
    error: undefined,
  },
};

export const getCurrentBid = createAsyncThunk<ICurrentBid>(
  'bid/getCurrentBid',
  async (_, { rejectWithValue }) => {
    try {
      const response = currentBidMock;

      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

const bidSlice = createSlice({
  name: 'bid',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCurrentBid.pending, (state) => {
      state.currentBid.loading = true;
    });

    builder.addCase(getCurrentBid.fulfilled, (state, action) => {
      state.currentBid.loading = false;
      state.currentBid.data = action.payload;
    });
    builder.addCase(getCurrentBid.rejected, (state, action) => {
      state.currentBid.loading = false;
      state.currentBid.data = null;
      state.currentBid.error = action.payload;
    });
  },
});


export default bidSlice.reducer;

