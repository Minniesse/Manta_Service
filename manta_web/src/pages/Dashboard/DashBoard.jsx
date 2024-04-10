import React from 'react'
import style from './DashBoard.module.css';
import PageBox from '../../components/pagebar/namebar';
import Dock from '../../components/Navbar/DockApps';
import Datetimebar from '../../components/datebar/datetimebar';



export default function Dashboard() {
    return(
        <>
        <div className={style.entire}>
            <div className={style.top}>
                <div className={style.name}>
                    smth road
                </div>
                <div className={style.layer1}>
                    <div className={style.graph1}>
                        111111111111111
                    </div>
                    <div className={style.graph2}>
                        222222222222222
                    </div>
                    <div className={style.graph3}>
                        333333333333333
                    </div>
                </div>
                <div className={style.layer2}>
                    <div className={style.graph4}>
                        333333333333333
                    </div>
                    <div className={style.graph5}>
                        333333333333333
                    </div>
                    <div className={style.graph6}>
                        333333333333333
                    </div>
                </div>
            </div>
            <div className={style.bottom}>
            <PageBox className={style.Left}/>
            <Dock className={style.dock}/>
            <Datetimebar className={style.Right}/>
            </div>
        </div>
        </>
    )
}