import { SettingOutlined } from '@ant-design/icons';
import { Tooltip, Row } from 'antd';

function Customization() {
  return (
    <Tooltip placement="left" title="Customization" destroyTooltipOnHide>
      <Row
        className="r-panel-customization-wheel"
        // onClick={() => dispatch(MenuActions.toggleSettingWheelMenu())}
      >
        <SettingOutlined />
      </Row>
    </Tooltip>
  );
}

export default Customization;
