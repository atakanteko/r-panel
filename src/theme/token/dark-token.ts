import { AliasToken } from 'antd/es/theme/internal';
import { PrimaryColorEnum } from 'types/enums/global-enums';

export const darkToken: Partial<AliasToken> = {
  colorBgMask: 'rgba(0, 0, 0, 0)',
  colorBgBase: '#25293C',
  colorBgContainer: '#2E3247',
  colorTextBase: '#ffffff',
  colorPrimary: '#ffffff',
  colorBgTextHover: '#373B50',
  colorPrimaryHover: '#ffffff',
  colorSplit: '#484D64',
  colorErrorOutline: PrimaryColorEnum.RED,
  controlOutline: '#fff',
  controlOutlineWidth: 1,
};
