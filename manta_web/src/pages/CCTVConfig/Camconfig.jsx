import style from './Camconfig.module.css';
import style_def from '../OverviewMapsPage/OverviewMaps.module.css';
import Dock from '../../components/Navbar/DockApps';
import PageBox from '../../components/pagebar/namebar';
import Datetimebar from '../../components/datebar/datetimebar';
import React, { useState } from 'react';
import { SettingOutlined } from '@ant-design/icons';
import { Menu, Layout } from 'antd';
import cameras from '../../data/dummydata.json';
import overviewicon from '../../assets/Overview.svg';
import Menulist from '../../components/Menu/Menulist';
import CameraDetails from '../../components/CCTVDetails/CameraDetails';

export default function Camconfig() {
  const [cameraDetails, setCameraDetails] = useState(null);

  const onClick = (e) => {
    console.log('click ', e);
    window.history.pushState(null, null, `/CCTVConfig/${e.key}`);
    const selectedCamera = cameras.cameras.find((camera, index) => `${index}` === e.key);
    setCameraDetails(selectedCamera);
  };

  return (
    <>
      <div className={style_def.entire}>
        <div className={style.top}>
          <Layout className={style.bar}>
            <div className={style.topbar}>
              <img src="/src/assets/Config_logo.svg" alt="Logo" className={style.logo} />
            </div>
            <Menulist cameras={cameras} onClick={onClick} />
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