import React from 'react';

import type { RadioChangeEvent } from 'antd';
import { Radio, Typography } from 'antd';
import { GlobalActions } from 'features/global/globalSlices';
import { LocalStorageHelper } from 'helpers/local-storage-helper';
import { useAppDispatch } from 'hooks/useStore';
import { useThemeContext } from 'hooks/useThemeContext';
import { LocalStorageEnum, ThemeTypeEnum } from 'types/enums/global-enums';

function ThemeMode() {
  const dispatch = useAppDispatch();
  const ctx = useThemeContext();
  const [value, setValue] = React.useState(
    LocalStorageHelper.getLocalStorageItem(LocalStorageEnum.SYSTEM).THEME
  );

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
    dispatch(GlobalActions.changeTheme(e.target.value));
    ctx.updateToken('theme', e.target.value);
  };

  return (
    <section className="r-panel-theme-mode">
      <Typography.Title level={5}>Theme</Typography.Title>
      <Radio.Group
        onChange={onChange}
        value={value}
        className="theme-mode-radio"
        style={{ color: 'red' }}
      >
        <Radio value={ThemeTypeEnum.DARK} className="tm-dark">
          Dark
        </Radio>
        <Radio value={ThemeTypeEnum.LIGHT} className="tm-light">
          Light
        </Radio>
      </Radio.Group>
    </section>
  );
}

export default ThemeMode;
