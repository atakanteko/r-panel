import React, { useEffect } from 'react';

import { ConfigProvider } from 'antd';
import { getSystemTheme } from 'features/global/globalSelectors';
import { LocalStorageHelper } from 'helpers/local-storage-helper';
import { defaultSystemConfig } from 'helpers/system-helper';
import { useAppSelector } from 'hooks/useStore';
import { useThemeContext } from 'hooks/useThemeContext';
import Router from 'routes/routes';
import { LocalStorageEnum, ThemeTypeEnum } from 'types/enums/global-enums';

function App() {
  const sysTheme = useAppSelector(getSystemTheme);
  const ctx = useThemeContext();
  const clrPrimary = LocalStorageHelper.getLocalStorageItem(
    LocalStorageEnum.SYSTEM
  ).COLOR_PRIMARY;

  useEffect(() => {
    if (
      LocalStorageHelper.getLocalStorageItem(LocalStorageEnum.SYSTEM) === null
    ) {
      LocalStorageHelper.setLocalStorageItem(
        LocalStorageEnum.SYSTEM,
        defaultSystemConfig
      );
    }
  }, []);

  return (
    <ConfigProvider
      theme={{
        token: { ...ctx.token, ...ctx.overridableTokenItems },
        components: {
          Radio: {
            colorPrimary: clrPrimary,
          },
          Button: {
            colorBgContainer: clrPrimary,
            colorText: '#fff',
            fontSize: 15,
          },
          Slider: {
            colorPrimary: clrPrimary,
            colorBgElevated: clrPrimary,
          },
          Steps: {
            colorPrimary: 'gray',
            colorText: clrPrimary,
          },
          Menu: {
            activeBarBorderWidth: 0,
            subMenuItemBg: 'transparant',
            itemSelectedColor:
              sysTheme === ThemeTypeEnum.LIGHT ? '#111' : '#fff',
          },
        },
      }}
    >
      <Router />
    </ConfigProvider>
  );
}

export default App;
