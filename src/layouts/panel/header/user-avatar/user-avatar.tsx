import React from 'react';

import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { getPrimaryColor } from 'features/global/globalSelectors';
import { useAppSelector } from 'hooks/useStore';

function UserAvatar() {
  const primaryColor = useAppSelector(getPrimaryColor);
  return (
    <div className="r-panel-user-avatar">
      <Avatar
        style={{ backgroundColor: primaryColor }}
        icon={<UserOutlined />}
      />
    </div>
  );
}

export default UserAvatar;
