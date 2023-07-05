import {
  LanguageTypeEnum,
  ThemeTypeEnum,
  SystemKeysEnum,
} from 'types/enums/global-enums';

export type LanguageTypes = LanguageTypeEnum.EN | LanguageTypeEnum.TR;

export type ThemeType = ThemeTypeEnum.DARK | ThemeTypeEnum.LIGHT;

export type SystemKeys = SystemKeysEnum.LANGUAGE | SystemKeysEnum.THEME;

export interface ISystemState {
  [SystemKeysEnum.LANGUAGE]: LanguageTypes;
  [SystemKeysEnum.THEME]: ThemeType;
}
