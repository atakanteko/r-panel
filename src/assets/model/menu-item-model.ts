import React from 'react';

import * as Icons from '@ant-design/icons';
import { IMenu } from 'types/global/menu-types';

const customIcons: { [key: string]: any } = Icons;

const createIcon = (name?: string) => {
  if (name && customIcons[name]) {
    return React.createElement(customIcons[name]);
  }
  return null;
};

const appMenu: IMenu[] = [
  {
    key: '/',
    label: 'Dashboard',
    path: '/dashboard',
    icon: createIcon('PieChartOutlined'),
  },
  {
    key: '/multi-step-form',
    label: 'Multi Step Form',
    path: '/multi-step-form',
    icon: createIcon('FormOutlined'),
  },
  {
    key: '/children',
    label: 'Children Example',
    path: '/children',
    icon: createIcon('EnterOutlined'),
    // children: []
  },
];

export const MenuItemModel = {
  appMenu,
};
