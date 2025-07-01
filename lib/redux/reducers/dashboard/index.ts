import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: DashboardState = {
  loading: true,
  totalRevenue: 0,
  activeOrders: 0,
  totalUsers: 0,
  totalProducts: 0,
  charts: {
    product: [],
  },
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setDashboardLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setDashboardStats: (
      state,
      action: PayloadAction<Partial<DashboardState>>
    ) => {
      state = {
        ...state,
        ...action.payload,
      };
      return state;
    },
    setDashboardCharts: (
      state,
      action: PayloadAction<Partial<DashboardState>>
    ) => {
      state = {
        ...state,
        ...action.payload,
      };
      return state;
    },
  },
});

export const { setDashboardLoading, setDashboardStats, setDashboardCharts } =
  dashboardSlice.actions;

export const dashboardReducer = dashboardSlice.reducer;
