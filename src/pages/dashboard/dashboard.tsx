import { Card, theme, Button } from 'antd';

function Dashboard() {
  const {
    token: { boxShadow },
  } = theme.useToken();
  return (
    <div>
      <Card
        title="Card title"
        bordered={false}
        style={{ width: 300, boxShadow }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Button>Button</Button>
    </div>
  );
}

export default Dashboard;
