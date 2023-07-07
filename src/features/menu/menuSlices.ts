import { createSlice } from '@reduxjs/toolkit';

export interface IMenuState {
  isSettingWheelOpen: boolean;
  isSidebarOpen: boolean;
}

const initialState: IMenuState = {
  isSettingWheelOpen: false,
  isSidebarOpen: false,
};

const MenuSlice = createSlice({
  name: 'Menu',
  initialState,
  reducers: {
    toggleSettingWheelMenu(state) {
      state.isSettingWheelOpen = !state.isSettingWheelOpen;
    },
    toggleSidebar(state) {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const MenuActions = MenuSlice.actions;

export default MenuSlice.reducer;
