import React, { createContext } from 'react';

import { AliasToken } from 'antd/es/theme/internal';
import { LocalStorageHelper } from 'helpers/local-storage-helper';
import { SystemHelper, defaultSystemConfig } from 'helpers/system-helper';
import { darkToken } from 'theme/token/dark-token';
import { lightToken } from 'theme/token/light-token';
import {
  LocalStorageEnum,
  SystemKeysEnum,
  ThemeTypeEnum,
} from 'types/enums/global-enums';
import {
  IOverridableThemeItems,
  IThemeContextType,
} from 'types/theme/theme-types';

import { ThemeReducers } from './reducers/theme-reducers';

export const ThemeContext = createContext<IThemeContextType | null>(null);

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [overridableTokenItems, setOverridableTokenItems] =
    React.useState<IOverridableThemeItems>({
      borderRadius: 12,
      colorPrimaryBg: 'red',
      theme: ThemeTypeEnum.LIGHT,
    });

  const [themeMode, setThemeMode] = React.useState<Partial<AliasToken>>(
    LocalStorageHelper.getLocalStorageItem(LocalStorageEnum.SYSTEM).THEME ===
      ThemeTypeEnum.LIGHT
      ? lightToken
      : darkToken
  );

  React.useEffect(() => {
    const { BORDER_RADIUS, COLOR_PRIMARY, THEME } =
      LocalStorageHelper.getLocalStorageItem(LocalStorageEnum.SYSTEM);
    setOverridableTokenItems({
      ...overridableTokenItems,
      borderRadius: BORDER_RADIUS,
      colorPrimaryBg: COLOR_PRIMARY,
      theme: THEME,
    });
  }, []); // ToDo: infinite loop when overridableTokenItems as a dependency array item

  const memoizedUpdateOverridableTokenItemsState = React.useMemo(() => {
    return <K extends keyof IOverridableThemeItems>(
      key: K,
      val: IOverridableThemeItems[K]
    ) => {
      let x;
      switch (key) {
        case 'borderRadius':
          x = SystemKeysEnum.BORDER_RADIUS;
          break;
        case 'colorPrimaryBg':
          x = SystemKeysEnum.COLOR_PRIMARY;
          break;
        case 'theme':
          if (val === ThemeTypeEnum.DARK) {
            setThemeMode(darkToken);
          } else {
            setThemeMode(lightToken);
          }
          x = SystemKeysEnum.THEME;
          break;
        default:
          x = SystemKeysEnum.BORDER_RADIUS;
          break;
      }
      SystemHelper.updateSystemConfig(x, val);
      setOverridableTokenItems({ ...overridableTokenItems, [key]: val });
    };
  }, [overridableTokenItems, setOverridableTokenItems]);

  const memoizedSettings = React.useMemo(
    () => ({
      overridableTokenItems,
      token: themeMode,
      settings: defaultSystemConfig,
      changeMenuType: ThemeReducers.changeMenuType,
      updateToken: memoizedUpdateOverridableTokenItemsState,
    }),
    [overridableTokenItems, memoizedUpdateOverridableTokenItemsState, themeMode]
  );

  return (
    <ThemeContext.Provider value={memoizedSettings}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
