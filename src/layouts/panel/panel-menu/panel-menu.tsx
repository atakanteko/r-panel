import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { MenuItemModel } from 'assets/model/menu-item-model';

function PanelMenu() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [selectedKeys, setSelectedKeys] = React.useState<string[]>([pathname]);

  React.useEffect(() => {
    setSelectedKeys([pathname]);
  }, [pathname]);

  const onClick: MenuProps['onClick'] = (e) => {
    navigate(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      defaultSelectedKeys={['/']}
      selectedKeys={selectedKeys}
      mode="inline"
      // inlineCollapsed
      triggerSubMenuAction="click"
      items={MenuItemModel.appMenu}
    />
  );
}

export default PanelMenu;
