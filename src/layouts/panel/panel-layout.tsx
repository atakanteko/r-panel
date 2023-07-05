import { Button } from 'antd';
import { useThemeContext } from 'hooks/useThemeContext';
import { ThemeTypeEnum } from 'types/enums/global-enums';

function PanelLayout() {
  const { settings, changeTheme } = useThemeContext();

  return (
    <div>
      <Button onClick={() => changeTheme(ThemeTypeEnum.DARK)}>
        Swith Theme
      </Button>
    </div>
  );
}

export default PanelLayout;
