import { AliasToken } from 'antd/es/theme/internal';
import { MenuTypeEnum } from 'types/enums/global-enums';
import { ISystemState } from 'types/global/system-types';

export interface IOverridableThemeItems {
  theme: string;
  colorPrimaryBg: string;
  borderRadius: number;
}
export interface IThemeContextType {
  overridableTokenItems: IOverridableThemeItems;
  settings: ISystemState;
  token: Partial<AliasToken>;
  changeMenuType: (menuType: MenuTypeEnum) => void;
  updateToken: (
    key: keyof IOverridableThemeItems,
    val: number | string
  ) => void;
}
