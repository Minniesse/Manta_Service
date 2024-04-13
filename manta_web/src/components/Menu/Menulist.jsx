import React from 'react';
import { SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import style from '../../pages/CCTVConfig/Camconfig.module.css';
import overviewicon from '../../assets/Overview.svg';

const Menulist = ({ cameras, onClick, selectedKey }) => {
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[selectedKey]}
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
  );
};

export default Menulist;