import { Button } from 'antd';
import { useThemeContext } from 'hooks/useThemeContext';
import Customization from 'layouts/customization/customization';
import {
  BorderRadiusValuesEnum,
  PrimaryColorEnum,
  ThemeTypeEnum,
} from 'types/enums/global-enums';

function Dashboard() {
  const ctx = useThemeContext();

  const changeThemeMode = (param: ThemeTypeEnum) => {
    ctx.updateToken('theme', param);
  };
  const changeBorderRadius = (radius: BorderRadiusValuesEnum) => {
    ctx.updateToken('borderRadius', radius);
  };

  const makeGreen = (color: PrimaryColorEnum) => {
    ctx.updateToken('colorPrimary', color);
  };
  return (
    <div>
      <Button onClick={() => changeThemeMode(ThemeTypeEnum.DARK)}>DARK</Button>
      <Button onClick={() => changeThemeMode(ThemeTypeEnum.LIGHT)}>
        LIGHT
      </Button>
      <Button onClick={() => changeBorderRadius(BorderRadiusValuesEnum.B20)}>
        Change Border Radius
      </Button>
      <Button onClick={() => makeGreen(PrimaryColorEnum.GREEN)}>
        Make Green
      </Button>
      <Button onClick={() => makeGreen(PrimaryColorEnum.ORANGE)}>
        Make ORANGE
      </Button>
    </div>
  );
}

export default Dashboard;
