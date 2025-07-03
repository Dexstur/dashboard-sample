import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: PrototypeState = {
  loading: true,
  prototypes: [],
  selected: null,
  total: 0,
  filters: {
    page: 1,
    limit: 20,
  },
};

const prototypeSlice = createSlice({
  name: "prototype",
  initialState,
  reducers: {
    setLoadingPrototypes: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setPrototypes: (state, action: PayloadAction<TPrototype[]>) => {
      state.prototypes = action.payload;
    },
    selectPrototype: (state, action: PayloadAction<TPrototype | null>) => {
      state.selected = action.payload;
    },
    setPrototypeTotal: (state, action: PayloadAction<number>) => {
      state.total = action.payload;
    },
    setPrototypeFilters: (state, action: PayloadAction<Partial<TFilter>>) => {
      state.filters = {
        ...state.filters,
        ...action.payload,
      };
      return state;
    },
  },
});

export const {
  setLoadingPrototypes,
  setPrototypes,
  selectPrototype,
  setPrototypeTotal,
  setPrototypeFilters,
} = prototypeSlice.actions;

export const prototypeReducer = prototypeSlice.reducer;
