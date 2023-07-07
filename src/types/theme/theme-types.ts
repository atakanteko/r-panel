import { AliasToken } from 'antd/es/theme/internal';
import { MenuTypeEnum, ThemeTypeEnum } from 'types/enums/global-enums';
import { ISystemState } from 'types/global/system-types';

export interface IOverridableThemeItems {
  colorPrimary: string;
  borderRadius: number;
}
export interface IThemeContextType {
  overridableTokenItems: IOverridableThemeItems;
  settings: ISystemState;
  token: Partial<AliasToken>;
  changeTheme: (theme: ThemeTypeEnum) => void;
  changeMenuType: (menuType: MenuTypeEnum) => void;
  updateToken: (
    ket: keyof IOverridableThemeItems,
    val: number | string
  ) => void;
}
