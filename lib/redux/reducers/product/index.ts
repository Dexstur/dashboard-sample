import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductState } from "./types";
import { TProduct } from "@/mock/product/types";
import { IFilter } from "@/types";

const initialState: ProductState = {
  loading: true,
  products: [],
  selected: null,
  total: 0,
  filters: {
    page: 1,
    limit: 20,
  },
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setProducts: (state, action: PayloadAction<TProduct[]>) => {
      state.products = action.payload;
      return state;
    },
    selectProduct: (state, action: PayloadAction<TProduct | null>) => {
      state.selected = action.payload;
    },
    setProductTotal: (state, action: PayloadAction<number>) => {
      state.total = action.payload;
    },
    setProductFilters: (state, action: PayloadAction<Partial<IFilter>>) => {
      state.filters = {
        ...state.filters,
        ...action.payload,
      };
      return state;
    },
  },
});

export const {
  setProductLoading,
  setProducts,
  selectProduct,
  setProductFilters,
  setProductTotal,
} = productSlice.actions;
export const productReducer = productSlice.reducer;
