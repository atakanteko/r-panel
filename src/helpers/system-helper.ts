import {
  BorderRadiusValuesEnum,
  LanguageTypeEnum,
  LocalStorageEnum,
  MenuTypeEnum,
  PrimaryColorEnum,
  SystemKeysEnum,
  ThemeTypeEnum,
} from 'types/enums/global-enums';
import { ISystemState, SystemKeys } from 'types/global/system-types';

import { LocalStorageHelper } from './local-storage-helper';

export const defaultSystemConfig: ISystemState = {
  [SystemKeysEnum.THEME]: ThemeTypeEnum.LIGHT,
  [SystemKeysEnum.LANGUAGE]: LanguageTypeEnum.EN,
  [SystemKeysEnum.MENU]: MenuTypeEnum.VERTICAL,
  [SystemKeysEnum.BORDER_RADIUS]: BorderRadiusValuesEnum.B8,
  [SystemKeysEnum.COLOR_PRIMARY]: PrimaryColorEnum.PURPLE,
};

export const updateSystemConfig = (key: SystemKeys, value: string | number) => {
  // Retrieve the existing data from local storage
  const existingData = LocalStorageHelper.getLocalStorageItem(
    LocalStorageEnum.SYSTEM
  );
  let newData;
  const parsedData = existingData ?? {};
  if (parsedData) {
    newData = { ...existingData, [key]: value };
  } else {
    newData = { ...defaultSystemConfig, [key]: value };
  }

  // Store the updated data back into local storage
  LocalStorageHelper.setLocalStorageItem(LocalStorageEnum.SYSTEM, newData);
};

export const SystemHelper = {
  updateSystemConfig,
};
