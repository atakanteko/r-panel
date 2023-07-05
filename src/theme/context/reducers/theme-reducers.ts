import { SystemHelper } from 'helpers/system-helper';
import { SystemKeysEnum, ThemeTypeEnum } from 'types/enums/global-enums';

export const changeTheme = (mode: ThemeTypeEnum): void => {
  SystemHelper.updateSystemConfig(SystemKeysEnum.THEME, mode);
};

export const ThemeReducers = {
  changeTheme,
};
