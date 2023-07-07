import { SettingOutlined } from '@ant-design/icons';
import { Tooltip, Row } from 'antd';
import { MenuActions } from 'features/menu/menuSlices';
import { useAppDispatch } from 'hooks/useStore';

import Settings from './settings/settings';

function Customization() {
  const dispatch = useAppDispatch();
  return (
    <>
      <Tooltip placement="left" destroyTooltipOnHide>
        <Row
          className="r-panel-customization-wheel"
          onClick={() => dispatch(MenuActions.toggleSettingWheelMenu())}
        >
          <SettingOutlined />
        </Row>
      </Tooltip>
      <Settings />
    </>
  );
}

export default Customization;
