import React from 'react';

import { ThemeContext } from 'theme/context/theme-context';
import { IThemeContextType } from 'types/theme/theme-types';

export const useThemeContext = (): IThemeContextType =>
  React.useContext(ThemeContext) as IThemeContextType;
