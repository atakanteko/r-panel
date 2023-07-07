import React from 'react';

import { Slider, Typography } from 'antd';
import { LocalStorageHelper } from 'helpers/local-storage-helper';
import { useThemeContext } from 'hooks/useThemeContext';
import {
  BorderRadiusValuesEnum,
  LocalStorageEnum,
} from 'types/enums/global-enums';

function BorderSlider() {
  const ctx = useThemeContext();

  const changeBorderRadius = (radius: BorderRadiusValuesEnum) => {
    ctx.updateToken('borderRadius', radius);
  };

  return (
    <section className="r-panel-border-slider">
      <Typography.Title level={5}>Border Radius</Typography.Title>
      <Slider
        defaultValue={
          LocalStorageHelper.getLocalStorageItem(LocalStorageEnum.SYSTEM)
            .BORDER_RADIUS
        }
        dots
        onChange={changeBorderRadius}
        step={2}
        min={4}
        max={24}
      />
    </section>
  );
}

export default BorderSlider;
