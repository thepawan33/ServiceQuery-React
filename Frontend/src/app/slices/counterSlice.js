import { createSlice } from "@reduxjs/toolkit";

export const alertSlice = createSlice({
  name: "alert",
  initialState: {
    alert: { open: false, severity: "", message: "" },
    refreshToken: false,
  },

  reducers: {
    showAlert: (state, action) => {
      const newAlert = {
        open: action.payload.open,
        severity: action.payload.severity,
        message: action.payload.message,
      };
      state.alert = newAlert;
    },
    hideAlert: (state) => {
      state.alert.open = false;
    },
    refreshToken: (state, action) => {
      state.refreshToken = action.payload;
    },
  },
});

export const { showAlert, hideAlert, refreshToken } = alertSlice.actions;
export default alertSlice.reducer;
