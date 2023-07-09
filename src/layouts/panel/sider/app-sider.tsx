import React from 'react';

import { Layout } from 'antd';
import { isSidebarOpen } from 'features/menu/menuSelectors';
import { useAppSelector } from 'hooks/useStore';

import Logo from '../logo/logo';
import PanelMenu from '../panel-menu/panel-menu';

function AppSider() {
  const sidebarStatus = useAppSelector(isSidebarOpen);

  return (
    <Layout.Sider
      className="r-panel-sider"
      trigger={null}
      collapsible
      collapsed={sidebarStatus}
      width={260}
      theme="light"
    >
      <Logo />
      <PanelMenu />
    </Layout.Sider>
  );
}

export default AppSider;
