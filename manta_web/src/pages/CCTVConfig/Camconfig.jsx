import style from './Camconfig.module.css';
import style_def from '../OverviewMapsPage/OverviewMaps.module.css';
import Dock from '../../components/Navbar/DockApps';
import PageBox from '../../components/pagebar/namebar';
import Datetimebar from '../../components/datebar/datetimebar';
import React from 'react'

export default function Camconfig() {
  return (
    <>
    <div className={style_def.entire}>
        <div className={style.top}>
            <div className={style.bar}>
                <div className={style.topbar}>
                    <img src="/src/assets/Config_logo.svg" alt="Logo" className={style.logo}/>
                    <img src="/src/assets/Collapse.svg" alt="Logo" className={style.collapse}/>
                </div>
                <div className={style.cctvlist}>
                    <div className={style.overview}>
                        <div className={style.overviewicon}>
                            <img src="/src/assets/Overview.svg" alt="Logo" className={style.overviewicon}/>
                            <p className={style.overviewtext}>Overview</p>
                        </div>
                        <div className={style.notification}>
                            <p>2</p>
                        </div>
                    </div>
                    <div className={style.camtag}>
                        <img src="/src/assets/camtags.svg" alt="Logo" className={style.plus}/>
                        <p className={style.camtagtext}>Camera Tag</p>
                    </div>
                </div>
            </div>
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
