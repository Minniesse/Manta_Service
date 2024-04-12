import style from './Camconfig.module.css';
import style_def from '../OverviewMapsPage/OverviewMaps.module.css';
import Dock from '../../components/Navbar/DockApps';
import PageBox from '../../components/pagebar/namebar';
import Datetimebar from '../../components/datebar/datetimebar';
import React, { useState } from 'react';
import { SettingOutlined } from '@ant-design/icons';
import { Menu, Layout } from 'antd';
import cameras from './dummydata.json';
import overviewicon from '../../assets/Overview.svg';

const CameraDetails = ({ camera }) => {
  return (
    <div className={style.details}>
      <h2>{camera.model}</h2>
      <p>Status: {camera.status}</p>
      <p>IP: {camera.camera_he}</p>
    </div>
  );
};

export default function Camconfig() {
  const [cameraDetails, setCameraDetails] = useState(null);

  const onClick = (e) => {
    console.log('click ', e);
    window.history.pushState(null, null, `/CCTVConfig/${e.key}`);
    const selectedCamera = cameras.cameras.find((camera, index) => `${index}` === e.key);
    setCameraDetails(selectedCamera);
  };

  const { Header, Sider } = Layout;

  return (
    <>
      <div className={style_def.entire}>
        <div className={style.top}>
          <Layout className={style.bar}>
            <div className={style.topbar}>
              <img src="/src/assets/Config_logo.svg" alt="Logo" className={style.logo} />
            </div>
            <Menu
              onClick={onClick}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              className={style.menu}
              items={[
                {
                  key: 'sub1',
                  icon: <img src={overviewicon} alt="Overview" className={style.icon} />,
                  label: 'Overview',
                  children: cameras.cameras.map((camera, index) => ({
                    key: `${index}`,
                    label: `${camera.model} (${camera.status})`,
                    className: style.menuItemSelected,
                  })),
                },
                {
                  key: 'sub3',
                  icon: <SettingOutlined />,
                  label: 'Navigation Three',
                  children: [
                    { key: '7', label: 'Option 7', className: style.menuItemSelected },
                    { key: '8', label: 'Option 8', className: style.menuItemSelected },
                    { key: '9', label: 'Option 9', className: style.menuItemSelected },
                  ],
                },
              ]}
            />
          </Layout>
          {cameraDetails && (
            <div className={style.details}>
              <CameraDetails camera={cameraDetails} />
            </div>
          )}
        </div>
        <div className={style_def.bottom}>
          <PageBox className={style.Left} />
          <Dock className={style.dock} />
          <Datetimebar className={style.Right} />
        </div>
      </div>
    </>
  );
}