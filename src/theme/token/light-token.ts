import { AliasToken } from 'antd/es/theme/internal';
import { PrimaryColorEnum } from 'types/enums/global-enums';

export const lightToken: Partial<AliasToken> = {
  colorBgMask: 'rgba(0, 0, 0, 0)',
  colorBgBase: '#FCFCFD',
  colorBgContainer: '#ffffff',
  colorTextBase: '#111111',
  colorPrimary: '#ffffff',
  colorBgTextHover: '#F5F5F6',
  colorPrimaryHover: '#ffffff',
  colorSplit: '#DDDDE0',
  colorErrorOutline: PrimaryColorEnum.RED,
  controlOutline: '#111',
  controlOutlineWidth: 1,
};
