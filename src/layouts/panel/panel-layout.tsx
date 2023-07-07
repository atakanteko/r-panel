import React from 'react';
import { Outlet } from 'react-router-dom';

import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';

import Customization from '../customization/customization';

const { Header, Sider, Content } = Layout;

function PanelLayout() {
  // const ctx = useThemeContext();
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
      >
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
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
