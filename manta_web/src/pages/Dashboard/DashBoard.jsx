import React from 'react'
import style from './DashBoard.module.css';
import PageBox from '../../components/pagebar/namebar';
import Dock from '../../components/Navbar/DockApps';
import Datetimebar from '../../components/datebar/datetimebar';
import Barchart from '../../components/Charts/Barchart';
import LineGraph from '../../components/Charts/Linechart';
import Trender from '../../components/Trender/Trender';


export default function Dashboard() {
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
                            </div>
                            <div className={style.BLA_roadtime}>
                            <img src="/src/assets/arrow_icon.svg" alt="Logo"></img>
                                <p>Average<br></br>Time on Road</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="101" height="85" viewBox="0 0 101 85" fill="none">
                                    <path d="M86.2739 78.7227C88.4514 80.4303 91.6249 80.061 93.1066 77.7239C97.3691 71.0008 99.9817 63.3366 100.695 55.3601C101.558 45.7145 99.6077 36.0255 95.0794 27.4654C90.5511 18.9053 83.6392 11.8408 75.1799 7.12676C66.7207 2.4127 57.0766 0.251048 47.4145 0.903345C37.7524 1.55564 28.4864 4.99393 20.7375 10.8022C12.9886 16.6105 7.08893 24.5399 3.75227 33.631C0.41561 42.7221 -0.215052 52.5853 1.93659 62.0274C3.71593 69.8356 7.33497 77.0791 12.4624 83.1683C14.2448 85.285 17.4391 85.2244 19.3673 83.2396V83.2396C21.2956 81.2548 21.221 78.0997 19.492 75.9391C15.726 71.2328 13.0559 65.7197 11.7072 59.8009C9.98585 52.2472 10.4904 44.3566 13.1597 37.0838C15.829 29.8109 20.5488 23.4674 26.7479 18.8207C32.947 14.1741 40.3598 11.4235 48.0895 10.9016C55.8192 10.3798 63.5344 12.1091 70.3018 15.8804C77.0693 19.6516 82.5988 25.3032 86.2214 32.1513C89.8441 38.9994 91.4046 46.7506 90.7142 54.467C90.1732 60.5134 88.2683 66.3354 85.1691 71.5052C83.7463 73.8786 84.0964 77.015 86.2739 78.7227V78.7227Z" fill="#F4F5F9"/>
                                </svg>
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
                                <Barchart/>
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
                                <Trender is_positive = {true} percent = {4.5}/>
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
                                    <LineGraph/>
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