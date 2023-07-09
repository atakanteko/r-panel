import { IMenuState } from 'features/menu/menuSlices';
import { IOverridableThemeItems } from 'types/theme/theme-types';

export interface IStore {
  menu: IMenuState;
  global: Partial<IOverridableThemeItems>;
}
