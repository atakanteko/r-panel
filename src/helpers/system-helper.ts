import {
  LanguageTypeEnum,
  LocalStorageEnum,
  SystemKeysEnum,
  ThemeTypeEnum,
} from 'types/enums/global-enums';
import { ISystemState, SystemKeys } from 'types/global/system-types';

import { LocalStorageHelper } from './local-storage-helper';

export const defaultSystemConfig: ISystemState = {
  [SystemKeysEnum.THEME]: ThemeTypeEnum.LIGHT,
  [SystemKeysEnum.LANGUAGE]: LanguageTypeEnum.EN,
};

export const updateSystemConfig = (key: SystemKeys, value: string | number) => {
  // Retrieve the existing data from local storage
  const existingData = LocalStorageHelper.getLocalStorageItem(
    LocalStorageEnum.SYSTEM
  );
  //  if data doesn't exist create an empty object
  const parsedData = existingData ?? {};
  // Update the value for the specified key
  parsedData[key] = value;
  // Store the updated data back into local storage
  LocalStorageHelper.setLocalStorageItem(LocalStorageEnum.SYSTEM, parsedData);
};

export const SystemHelper = {
  updateSystemConfig,
};
