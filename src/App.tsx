import { useEffect } from 'react';

import { ConfigProvider } from 'antd';
import { LocalStorageHelper } from 'helpers/local-storage-helper';
import { defaultSystemConfig } from 'helpers/system-helper';
import Router from 'routes/routes';
import ThemeProvider from 'theme/context/theme-context';
import { LocalStorageEnum } from 'types/enums/global-enums';

function App() {
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
    <ThemeProvider>
      <ConfigProvider>
        <Router />
      </ConfigProvider>
    </ThemeProvider>
  );
}

export default App;
