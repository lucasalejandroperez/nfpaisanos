import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { auctionsMock } from '../../mocks/auctionsMocks';
import { popularPaisanosMock } from '../../mocks/popularPaisanosMock';
import type { IAuction } from '../../types/auctionInterfaces';
import _ from 'lodash';


interface PopularPaisanosProps {
  loading: boolean,
  data: IAuction[],
  popularPaisanoSelectedIndex: number,
  error: any | undefined,
}

interface AuctionProps {
  loading: boolean,
  data: IAuction[],
  dataFiltered: IAuction[],
  error: any | undefined,
}

interface PaisanosSliceInitialStateProps {
  auctions: AuctionProps,
  popularPaisanos: PopularPaisanosProps,
}

const initialState: PaisanosSliceInitialStateProps = {
  auctions: {
    loading: true,
    data: [], 
    dataFiltered: [],
    error: undefined,
  },
  popularPaisanos: {
    loading: true,
    data: [],
    popularPaisanoSelectedIndex: 0,
    error: undefined,
  }
};

export const getPopularPaisanos = createAsyncThunk<IAuction[]>(
  'paisanos/getPopularPaisanos',
  async (_, { rejectWithValue }) => {
    try {
      const response = popularPaisanosMock;

      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export const getAuctions = createAsyncThunk<IAuction[]>(
  'paisanos/getAuctions',
  async (_, { rejectWithValue }) => {
    try {
      const response = auctionsMock;

      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

const paisanosSlice = createSlice({
  name: 'paisanos',
  initialState,
  reducers: {
    nextPopularPaisano: (state) => {
      const nextIndex = state.popularPaisanos.popularPaisanoSelectedIndex + 1;

      if (nextIndex !== state.popularPaisanos.data.length) {
        state.popularPaisanos.popularPaisanoSelectedIndex = nextIndex;
      }
    },
    previousPopularPaisano: (state) => {
      const previousIndex = state.popularPaisanos.popularPaisanoSelectedIndex - 1;

      if (previousIndex >= 0) {
        state.popularPaisanos.popularPaisanoSelectedIndex = previousIndex;
      }
    },
    resetFilters: (state) => {
      state.auctions.dataFiltered = state.auctions.data;
    },
    filterByCreatedDate: (state, action) => {
      const auctions = [...state.auctions.dataFiltered];
      state.auctions.dataFiltered = _.orderBy(auctions, 'createdAt', action.payload);
    },
    filterByPrice: (state, action) => {
      state.auctions.dataFiltered = [...state.auctions.data].filter(auction => Number(auction.instantPrice.slice(0,-4)) < action.payload);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getPopularPaisanos.pending, (state) => {
      state.popularPaisanos.loading = true;
    });

    builder.addCase(getPopularPaisanos.fulfilled, (state, action) => {
      state.popularPaisanos.loading = false;
      state.popularPaisanos.data = action.payload;
    });
    builder.addCase(getPopularPaisanos.rejected, (state, action) => {
      state.popularPaisanos.loading = false;
      state.popularPaisanos.data = [];
      state.popularPaisanos.error = action.payload;
    });
    builder.addCase(getAuctions.pending, (state) => {
      state.auctions.loading = true;
    });

    builder.addCase(getAuctions.fulfilled, (state, action) => {
      state.auctions.loading = false;
      state.auctions.data = action.payload;
      state.auctions.dataFiltered = action.payload;
    });
    builder.addCase(getAuctions.rejected, (state, action) => {
      state.auctions.loading = false;
      state.auctions.data = [];
      state.auctions.error = action.payload;
    });
  },
});

export const {
  nextPopularPaisano, 
  previousPopularPaisano, 
  resetFilters,
  filterByPrice,
  filterByCreatedDate
} = paisanosSlice.actions;

export default paisanosSlice.reducer;

