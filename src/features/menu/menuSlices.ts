import { createSlice } from '@reduxjs/toolkit';

export interface IMenuState {
  isSettingWheelOpen: boolean;
}

const initialState: IMenuState = {
  isSettingWheelOpen: false,
};

const MenuSlice = createSlice({
  name: 'Menu',
  initialState,
  reducers: {
    toggleSettingWheelMenu(state) {
      state.isSettingWheelOpen = !state.isSettingWheelOpen;
    },
  },
});

export const MenuActions = MenuSlice.actions;

export default MenuSlice.reducer;
