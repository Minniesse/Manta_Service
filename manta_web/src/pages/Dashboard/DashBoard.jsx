import React, { useState } from 'react'
import style from './DashBoard.module.css';
import PageBox from '../../components/pagebar/namebar';
import Dock from '../../components/Navbar/DockApps';
import Datetimebar from '../../components/datebar/datetimebar';
import Barchart from '../../components/Charts/Barchart';
import LineGraph from '../../components/Charts/Linechart';
import Trender from '../../components/Trender/Trender';


export default function Dashboard() {
    const avg_velo = "45";
    return(
        <>
        <div className={style.entire}>
            <div className={style.top}>
                <div className={style.name}>
                    Sukhumvit Cam 40
                </div>
                <div className={style.body}>
                    <div className={style.body_left}>
                        <div className={style.BL_avg_data}>
                            <div className={style.BLA_velocity}>
                                <img src="/src/assets/energy_icon.svg" alt="Logo"></img>
                                <p>Average<br></br>Velocity</p>
                                <div className={style.BLA_prog_barV}>
                                    <div className={style.BLA_prog_fillV} style={{ width: avg_velo.concat("%")}}></div>
                                </div>
                                <h2>{avg_velo}%</h2>
                            </div>
                            <div className={style.BLA_roadtime}>
                            <img src="/src/assets/arrow_icon.svg" alt="Logo"></img>
                                <p>Average<br></br>Time on Road</p>
                                <div className={style.BLA_prog_barT}>
                                    <div className={style.BLA_prog_fillT} style={{ width: "30".concat("%")}}></div>
                                </div>
                                <h2>{avg_velo}</h2>
                            </div>
                        </div>
                        <div className={style.BL_other_data}>
                            <p>No Traffic Data Yet</p>
                        </div>
                    </div>
                    <div className={style.body_mid}>
                        <div className={style.BM_cam}></div>
                        <div className={style.BM_data}>
                            <div className={style.BMD_header}>
                                <img src="/src/assets/Speed_alt.svg" alt="Logo"></img>
                                <p>Speed Compared to Speed Limit [in %]</p>
                                <button></button>
                            </div>
                            <div className={style.BMD_value}>
                                <h2>40</h2>
                                <h3>Km/Hr</h3>
                            </div>
                            <div className={style.BMD_graph}>
                                <Barchart num_of_points = {5} data = {[1,2,3,4,5]}/>
                            </div>
                        </div>
                    </div>
                    <div className={style.body_right}>
                        <div className={style.BR_map}></div>
                        <div className={style.BR_data}>
                            <div className={style.BRD_header}>
                                <img src="/src/assets/car_icon.svg" alt="Logo"></img>
                                <p>Amount of Cars</p>
                                <button></button>
                            </div>
                            <div className={style.BRD_value}>
                                <h2>25</h2>
                                <h2>Cars</h2>
                            </div>
                            <div className={style.BRD_detail}>
                                <Trender is_positive = {false} percent = {5.5}/>
                                <p>Compared to the Average</p>
                                <div className={style.BRD_legendL}>
                                    <img src="/src/assets/yellow_icon.svg" alt="Logo"></img>
                                    <p>Today</p>
                                </div>
                                <div className={style.BRD_legendR}>
                                    <img src="/src/assets/blue_icon.svg" alt="Logo"></img>
                                    <p>Average</p>
                                </div>
                            </div>
                                <div className={style.BRD_graph}>
                                    <LineGraph today_count = {[21,32,43,54,65,76]} avg_count = {[12,34,56,67,78]}/>
                            </div>
                        </div>
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