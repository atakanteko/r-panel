import React, { useEffect } from 'react';

import { ConfigProvider, theme } from 'antd';
import { LocalStorageHelper } from 'helpers/local-storage-helper';
import { defaultSystemConfig } from 'helpers/system-helper';
import { useThemeContext } from 'hooks/useThemeContext';
import Router from 'routes/routes';
import { LocalStorageEnum } from 'types/enums/global-enums';

function App() {
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
        },
      }}
    >
      <Router />
    </ConfigProvider>
  );
}

export default App;
