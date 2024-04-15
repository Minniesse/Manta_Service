import React, { useState } from 'react';
import { SettingOutlined } from '@ant-design/icons';
import { Menu, Input } from 'antd';
import style from '../../pages/CCTVConfig/Camconfig.module.css';
import overviewicon from '../../assets/Overview.svg';

const Menulist = ({ cameras, onClick, selectedKey }) => {
  const [searchValue, setSearchValue] = useState('');

  const filteredCameras = cameras.cameras.filter((camera) =>
    camera.model.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[selectedKey]}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      className={style.menu}
    >
      <Menu.Item key="search">
        <Input.Search
          placeholder="Search cameras"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          style={{
            backgroundColor: '#E7F4FE',
            borderRadius: '0rem',
            padding: '0.5rem',
            width: '100%',
          }}
        />
      </Menu.Item>
      <Menu.SubMenu
        key="sub1"
        icon={<img src={overviewicon} alt="Overview" className={style.icon} />}
        title="Overview"
      >
        {filteredCameras.map((camera, index) => (
          <Menu.Item key={`${index}`} className={style.menuItemSelected}>
            {`${camera.model} (${camera.status})`}
          </Menu.Item>
        ))}
      </Menu.SubMenu>
    </Menu>
  );
};

export default Menulist;