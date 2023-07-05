import {
  LanguageTypeEnum,
  ThemeTypeEnum,
  SystemKeysEnum,
  MenuTypeEnum,
} from 'types/enums/global-enums';

export type LanguageTypes = LanguageTypeEnum.EN | LanguageTypeEnum.TR;

export type ThemeType = ThemeTypeEnum.DARK | ThemeTypeEnum.LIGHT;

export type SystemKeys =
  | SystemKeysEnum.LANGUAGE
  | SystemKeysEnum.THEME
  | SystemKeysEnum.MENU;

export type MenuTypeKeys = MenuTypeEnum.VERTICAL | MenuTypeEnum.HORIZONTAL;

export interface ISystemState {
  [SystemKeysEnum.LANGUAGE]: LanguageTypes;
  [SystemKeysEnum.THEME]: ThemeType;
  [SystemKeysEnum.MENU]: MenuTypeKeys;
}
