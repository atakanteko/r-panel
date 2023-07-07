import {
  LanguageTypeEnum,
  ThemeTypeEnum,
  SystemKeysEnum,
  MenuTypeEnum,
  BorderRadiusValuesEnum,
  PrimaryColorEnum,
} from 'types/enums/global-enums';

export type LanguageTypes = LanguageTypeEnum.EN | LanguageTypeEnum.TR;

export type ThemeType = ThemeTypeEnum.DARK | ThemeTypeEnum.LIGHT;

export type SystemKeys =
  | SystemKeysEnum.LANGUAGE
  | SystemKeysEnum.THEME
  | SystemKeysEnum.MENU
  | SystemKeysEnum.BORDER_RADIUS
  | SystemKeysEnum.COLOR_PRIMARY;

export type MenuTypeKeys = MenuTypeEnum.VERTICAL | MenuTypeEnum.HORIZONTAL;

export type BorderRadiusTypeKeys =
  | BorderRadiusValuesEnum.B4
  | BorderRadiusValuesEnum.B6
  | BorderRadiusValuesEnum.B8
  | BorderRadiusValuesEnum.B10
  | BorderRadiusValuesEnum.B12
  | BorderRadiusValuesEnum.B14
  | BorderRadiusValuesEnum.B16
  | BorderRadiusValuesEnum.B18
  | BorderRadiusValuesEnum.B20
  | BorderRadiusValuesEnum.B22
  | BorderRadiusValuesEnum.B24;

export type PrimaryColorTypeKeys =
  | PrimaryColorEnum.GREEN
  | PrimaryColorEnum.GRAY
  | PrimaryColorEnum.PURPLE
  | PrimaryColorEnum.LIGHT_BLUE
  | PrimaryColorEnum.ORANGE
  | PrimaryColorEnum.RED;
export interface ISystemState {
  [SystemKeysEnum.LANGUAGE]: LanguageTypes;
  [SystemKeysEnum.THEME]: ThemeType;
  [SystemKeysEnum.MENU]: MenuTypeKeys;
  [SystemKeysEnum.BORDER_RADIUS]: BorderRadiusTypeKeys;
  [SystemKeysEnum.COLOR_PRIMARY]: PrimaryColorTypeKeys;
}
