import React from 'react';
import { Outlet } from 'react-router-dom';

import { Layout, theme } from 'antd';
import { isSidebarOpen } from 'features/menu/menuSelectors';
import { useAppSelector } from 'hooks/useStore';

import AppHeader from './header/header';
import Logo from './logo/logo';
import PanelMenu from './panel-menu/panel-menu';
import Customization from '../customization/customization';

const { Sider, Content } = Layout;

function PanelLayout() {
  const sidebarStatus = useAppSelector(isSidebarOpen);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="r-panel-layout">
      <Sider
        className="r-panel-sider"
        trigger={null}
        collapsible
        collapsed={sidebarStatus}
        width={260}
        theme="light"
      >
        <Logo />
        <PanelMenu />
      </Sider>
      <Layout className="r-panel-layout-content">
        <Customization />
        <AppHeader />
        <Content
          className="r-panel-content"
          style={{
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default PanelLayout;
