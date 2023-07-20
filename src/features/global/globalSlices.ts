import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LocalStorageHelper } from 'helpers/local-storage-helper';
import {
  LocalStorageEnum,
  PrimaryColorEnum,
  ThemeTypeEnum,
} from 'types/enums/global-enums';
import { IOverridableThemeItems } from 'types/theme/theme-types';

const initialState: Partial<IOverridableThemeItems> = {
  colorPrimaryBg:
    LocalStorageHelper.getLocalStorageItem(LocalStorageEnum.SYSTEM)
      ?.COLOR_PRIMARY ?? PrimaryColorEnum.PURPLE,
  theme:
    LocalStorageHelper.getLocalStorageItem(LocalStorageEnum.SYSTEM)?.THEME ??
    ThemeTypeEnum.LIGHT,
};

const GlobalSlice = createSlice({
  name: 'Global',
  initialState,
  reducers: {
    changePrimaryColor(state, { payload }: PayloadAction<string>) {
      state.colorPrimaryBg = payload;
    },
    changeTheme(state, { payload }: PayloadAction<string>) {
      state.theme = payload;
    },
  },
});

export const GlobalActions = GlobalSlice.actions;

export default GlobalSlice.reducer;
