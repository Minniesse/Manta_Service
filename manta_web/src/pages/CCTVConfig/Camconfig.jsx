import style from './Camconfig.module.css';
import style_def from '../OverviewMapsPage/OverviewMaps.module.css';
import Dock from '../../components/Navbar/DockApps';
import PageBox from '../../components/pagebar/namebar';
import Datetimebar from '../../components/datebar/datetimebar';
import React from 'react'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, Layout } from 'antd';
import cameras from './dummydata.json';
import overviewicon from '../../assets/Overview.svg';

export default function Camconfig() {
    const onClick = (e) => {
        console.log('click ', e);
    };

    const { Header, Sider } = Layout;
  return (
    <>
    <div className={style_def.entire}>
        <div className={style.top}>
            <Layout className={style.bar}>
                <div className={style.topbar}>
                    <img src="/src/assets/Config_logo.svg" alt="Logo" className={style.logo}/>
                    {/* <img src="/src/assets/Collapse.svg" alt="Logo" className={style.collapse}/> */}
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
                    icon: <img src={overviewicon} alt="Overview" className={style.icon}/>,
                    label: 'Overview',
                    children: cameras.cameras.map((camera, index) => ({
                        key: `${index + 5}`, // start keys at 5
                        label: `${camera.model} (${camera.status})`,
                        className: style.menuItemSelected,
                      })),
                    },
                    {
                        key: 'sub3',
                        icon: <SettingOutlined />, // Assuming you are using the SettingOutlined icon
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
        </div>
        <div className={style_def.bottom}>
          <PageBox className={style.Left} />
          <Dock className={style.dock}/>
          <Datetimebar className={style.Right}/>
        </div>
    </div>
    </>
  )
}
