import React from 'react';
import { Outlet } from 'react-router-dom';

import { Layout, Menu, theme } from 'antd';
import { isSidebarOpen } from 'features/menu/menuSelectors';
import { useAppSelector } from 'hooks/useStore';

import Logo from './logo/logo';
import PanelMenu from './panel-menu/panel-menu';
import Customization from '../customization/customization';

const { Header, Sider, Content } = Layout;

function PanelLayout() {
  const sidebarStatus = useAppSelector(isSidebarOpen);

  const {
    token: { colorBgContainer, borderRadius },
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
        <Header
          className="r-panel-header"
          style={{ background: colorBgContainer, borderRadius }}
        >
          Header
        </Header>
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
