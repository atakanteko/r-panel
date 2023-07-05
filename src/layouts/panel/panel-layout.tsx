import { Button } from 'antd';
import { useThemeContext } from 'hooks/useThemeContext';
import { MenuTypeEnum, ThemeTypeEnum } from 'types/enums/global-enums';

function PanelLayout() {
  const ctx = useThemeContext();
  return (
    <div>
      <Button onClick={() => ctx.changeMenuType(MenuTypeEnum.HORIZONTAL)}>
        Swith Theme
      </Button>
    </div>
  );
}

export default PanelLayout;
