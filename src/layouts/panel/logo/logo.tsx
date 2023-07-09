import { Typography } from 'antd';
import logo from 'assets/img/r-panel-logo.svg';
import { LocalStorageHelper } from 'helpers/local-storage-helper';
import { LocalStorageEnum } from 'types/enums/global-enums';

function Logo() {
  return (
    <section className="r-panel-logo-section">
      <div className="r-panel-logo">
        <img src={logo} alt="" />
      </div>
      <Typography.Title
        level={3}
        style={{
          color: LocalStorageHelper.getLocalStorageItem(LocalStorageEnum.SYSTEM)
            .COLOR_PRIMARY,
        }}
      >
        r-panel
      </Typography.Title>
    </section>
  );
}

export default Logo;
