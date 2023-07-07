import React from 'react';
import { Outlet } from 'react-router-dom';

import { Layout, Menu, theme } from 'antd';

import PanelMenu from './panel-menu/panel-menu';
import Customization from '../customization/customization';

const { Header, Sider, Content } = Layout;

function PanelLayout() {
  // const ctx = useThemeContext();
  // const [themeMode, setThemeMode] = React.useState<>();
  const [collapsed, setCollapsed] = React.useState(false);
  const {
    token: { colorBgContainer, borderRadius },
  } = theme.useToken();

  return (
    <Layout className="r-panel-layout">
      <Sider
        className="r-panel-sider"
        trigger={null}
        collapsible
        collapsed={false}
        width={260}
        theme="light"
      >
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
