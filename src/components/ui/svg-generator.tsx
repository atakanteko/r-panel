import React from 'react';

import {
  UserOutlined,
  PhoneOutlined,
  BankOutlined,
  IdcardOutlined,
} from '@ant-design/icons';

export type SvgGeneratorType = {
  svgType: 'userIcon' | 'emailIcon' | 'phoneIcon' | 'companyIcon';
};

function SvgGenerator({ svgType }: SvgGeneratorType) {
  let SvgIcon;

  switch (svgType) {
    case 'userIcon':
      SvgIcon = <UserOutlined />;
      break;
    case 'emailIcon':
      SvgIcon = <IdcardOutlined />;
      break;
    case 'phoneIcon':
      SvgIcon = <PhoneOutlined />;
      break;
    case 'companyIcon':
      SvgIcon = <BankOutlined />;
      break;
    default:
      break;
  }
  return SvgIcon;
}

export default SvgGenerator;
