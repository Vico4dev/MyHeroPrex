import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getHeroes, createHero } from '../../services/api';

export const fetchHeroes = createAsyncThunk(
  'hero/fetchHeroes',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getHeroes();
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const addHero = createAsyncThunk(
  'hero/addHero',
  async (heroData, { rejectWithValue }) => {
    try {
      const response = await createHero(heroData);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const initialState = {
  heroes: [],
  selectedHero: null,
  loading: false,
  error: null,
};

export const heroSlice = createSlice({
  name: 'hero',
  initialState,
  reducers: {
    selectHero: (state, action) => {
      state.selectedHero = action.payload;
    },
    clearSelectedHero: (state) => {
      state.selectedHero = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHeroes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHeroes.fulfilled, (state, action) => {
        state.loading = false;
        state.heroes = action.payload;
      })
      .addCase(fetchHeroes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addHero.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addHero.fulfilled, (state, action) => {
        state.loading = false;
        state.heroes.push(action.payload);
      })
      .addCase(addHero.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { selectHero, clearSelectedHero } = heroSlice.actions;

export default heroSlice.reducer;