import React from 'react';

import { Radio, Typography } from 'antd';
import type { RadioChangeEvent } from 'antd';
import { LocalStorageHelper } from 'helpers/local-storage-helper';
import { useThemeContext } from 'hooks/useThemeContext';
import { LocalStorageEnum, PrimaryColorEnum } from 'types/enums/global-enums';

function ColorSwitch() {
  const ctx = useThemeContext();
  const [value, setValue] = React.useState(
    LocalStorageHelper.getLocalStorageItem(LocalStorageEnum.SYSTEM)
      .COLOR_PRIMARY
  );

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
    ctx.updateToken('colorPrimaryBg', e.target.value);
  };
  return (
    <section className="r-panel-color-switch">
      <Typography.Title level={5}>Primary Color</Typography.Title>
      <Radio.Group
        onChange={onChange}
        value={value}
        className="color-switch-radio"
      >
        <Radio value={PrimaryColorEnum.PURPLE} className="c-purple" />
        <Radio value={PrimaryColorEnum.GRAY} className="c-gray" />
        <Radio value={PrimaryColorEnum.GREEN} className="c-green" />
        <Radio value={PrimaryColorEnum.LIGHT_BLUE} className="c-light-blue" />
        <Radio value={PrimaryColorEnum.ORANGE} className="c-orange" />
        <Radio value={PrimaryColorEnum.RED} className="c-red" />
      </Radio.Group>
    </section>
  );
}

export default ColorSwitch;
