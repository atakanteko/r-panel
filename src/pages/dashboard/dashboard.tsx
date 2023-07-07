import { Button } from 'antd';
import { useThemeContext } from 'hooks/useThemeContext';

function Dashboard() {
  const ctx = useThemeContext();

  const bla = () => {
    ctx.updateToken('borderRadius', 12);
  };
  return (
    <div>
      <Button onClick={bla}>asdf</Button>
    </div>
  );
}

export default Dashboard;
