import React from 'react';

import { Divider, Drawer } from 'antd';
import { isSettingWheelMenuOpen } from 'features/menu/menuSelectors';
import { MenuActions } from 'features/menu/menuSlices';
import { useAppDispatch, useAppSelector } from 'hooks/useStore';

import ColorSwitch from './color-switch/color-switch';

function Settings() {
  const dispatch = useAppDispatch();
  const settingWheelMenuStatus = useAppSelector(isSettingWheelMenuOpen);

  return (
    <Drawer
      className="r-panel-customization-settings-drawer"
      title="THEME CUSTOMIZER"
      placement="right"
      width="400"
      onClose={() => dispatch(MenuActions.toggleSettingWheelMenu())}
      open={!settingWheelMenuStatus}
      destroyOnClose
    >
      <ColorSwitch />
      <Divider />
    </Drawer>
  );
}

export default Settings;
