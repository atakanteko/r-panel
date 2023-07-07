import { IStore } from 'types/store/store-types';

export const isSettingWheelMenuOpen = (state: IStore) =>
  state.menu.isSettingWheelOpen;
