import { SystemHelper } from 'helpers/system-helper';
import {
  MenuTypeEnum,
  SystemKeysEnum,
  ThemeTypeEnum,
} from 'types/enums/global-enums';

export const changeTheme = (mode: ThemeTypeEnum): void => {
  SystemHelper.updateSystemConfig(SystemKeysEnum.THEME, mode);
};

export const changeMenuType = (menuType: MenuTypeEnum): void => {
  SystemHelper.updateSystemConfig(SystemKeysEnum.MENU, menuType);
};

export const ThemeReducers = {
  changeTheme,
  changeMenuType,
};
