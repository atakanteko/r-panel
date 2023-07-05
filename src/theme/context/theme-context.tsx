import React, { createContext } from 'react';

import { defaultSystemConfig } from 'helpers/system-helper';
import { IThemeContextType } from 'types/theme/theme-types';

import { ThemeReducers } from './reducers/theme-reducers';

export const ThemeContext = createContext<IThemeContextType | null>(null);

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const memoizedSettings = React.useMemo(
    () => ({
      settings: defaultSystemConfig,
      changeTheme: ThemeReducers.changeTheme,
    }),
    []
  );

  return (
    <ThemeContext.Provider value={memoizedSettings}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
