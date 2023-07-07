import React from 'react';

import { Drawer } from 'antd';
import { isSettingWheelMenuOpen } from 'features/menu/menuSelectors';
import { MenuActions } from 'features/menu/menuSlices';
import { useAppDispatch, useAppSelector } from 'hooks/useStore';

function Settings() {
  const dispatch = useAppDispatch();
  const settingWheelMenuStatus = useAppSelector(isSettingWheelMenuOpen);

  return (
    <Drawer
      className="r-panel-customization-settings-drawer"
      title="THEME CUSTOMIZER"
      placement="right"
      width="40%"
      onClose={() => dispatch(MenuActions.toggleSettingWheelMenu())}
      open={settingWheelMenuStatus}
      destroyOnClose
    >
      Test
    </Drawer>
  );
}

export default Settings;
