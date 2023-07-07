import { useEffect } from 'react';

import { ConfigProvider } from 'antd';
import { LocalStorageHelper } from 'helpers/local-storage-helper';
import { defaultSystemConfig } from 'helpers/system-helper';
import { useThemeContext } from 'hooks/useThemeContext';
import Router from 'routes/routes';
import { LocalStorageEnum } from 'types/enums/global-enums';

function App() {
  const ctx = useThemeContext();

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
      theme={{ token: { ...ctx.token, ...ctx.overridableTokenItems } }}
    >
      <Router />
    </ConfigProvider>
  );
}

export default App;
