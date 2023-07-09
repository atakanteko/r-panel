import { Typography } from 'antd';
import logo from 'assets/img/r-panel-logo.svg';
import { isSidebarOpen } from 'features/menu/menuSelectors';
import { LocalStorageHelper } from 'helpers/local-storage-helper';
import { useAppSelector } from 'hooks/useStore';
import { LocalStorageEnum } from 'types/enums/global-enums';

function Logo() {
  const sidebarStatus = useAppSelector(isSidebarOpen);

  return (
    <section className="r-panel-logo-section">
      <div className="r-panel-logo">
        <img src={logo} alt="" />
      </div>
      {!sidebarStatus ? (
        <Typography.Title
          level={3}
          style={{
            color: LocalStorageHelper.getLocalStorageItem(
              LocalStorageEnum.SYSTEM
            ).COLOR_PRIMARY,
          }}
        >
          r-panel
        </Typography.Title>
      ) : null}
    </section>
  );
}

export default Logo;
