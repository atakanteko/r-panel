/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, theme } from 'antd';
import { isSidebarOpen } from 'features/menu/menuSelectors';
import { MenuActions } from 'features/menu/menuSlices';
import { useAppSelector, useAppDispatch } from 'hooks/useStore';

function AppHeader() {
  const sidebarStatus = useAppSelector(isSidebarOpen);
  const dispatch = useAppDispatch();
  const {
    token: { colorBgContainer, borderRadius },
  } = theme.useToken();

  return (
    <Layout.Header
      className="r-panel-header"
      style={{ background: colorBgContainer, borderRadius }}
    >
      <div
        className="header-left"
        onClick={() => dispatch(MenuActions.toggleSidebar())}
      >
        {sidebarStatus ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
      <div className="header-right">Right</div>
    </Layout.Header>
  );
}

export default AppHeader;
