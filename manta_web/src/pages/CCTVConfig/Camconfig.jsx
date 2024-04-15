import style from './Camconfig.module.css';
import style_def from '../OverviewMapsPage/OverviewMaps.module.css';
import Dock from '../../components/Navbar/DockApps';
import PageBox from '../../components/pagebar/namebar';
import Datetimebar from '../../components/datebar/datetimebar';
import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import cameras from '../../data/dummydata.json';
import Menulist from '../../components/Menu/Menulist';
import CameraDetails from '../../components/CCTVDetails/CameraDetails';
import { useParams, useNavigate } from 'react-router-dom';
import addlogo from '../../assets/add_button.svg';

export default function Camconfig() {
  const [cameraDetails, setCameraDetails] = useState(null);
  const { key } = useParams();
  const navigate = useNavigate();
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  useEffect(() => {
    const selectedCamera = cameras.cameras.find((camera, index) => `${index}` === key);
    setCameraDetails(selectedCamera);
  }, [key]);

  const onClick = (e) => {
    console.log('click ', e);
    navigate(`/CCTVConfig/${e.key}`);
  };

  return (
    <>
      <div className={style_def.entire}>
        <div className={`${style.top} ${isButtonClicked ? style.blurred : style.unblurred}`}>
          <Layout className={style.bar}>
            <div className={style.topbar}>
              <img src="/src/assets/Config_logo.svg" alt="Logo" className={style.logo} />
            </div>
            <Menulist cameras={cameras} onClick={onClick} selectedKey={key}/>
          </Layout>
          {cameraDetails && (
            <div className={style.details}>
              <CameraDetails camera={cameraDetails} />
            </div>
          )}
        </div>
        <div className={style_def.bottom}>
          <PageBox className={style.Left} setIsButtonClicked={setIsButtonClicked}/>
          <Dock className={style.dock} />
          <Datetimebar className={style.Right} />
        </div>
      </div>
    </>
  );
}