import { ThemeTypeEnum } from 'types/enums/global-enums';
import { ISystemState } from 'types/global/system-types';

export interface IThemeContextType {
  settings: ISystemState;
  changeTheme: (theme: ThemeTypeEnum) => void;
}
