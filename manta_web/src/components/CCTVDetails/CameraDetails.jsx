import style from './Cameradetails.module.css';
import React from 'react';
import cctvstreamingdummy from '../../assets/cctvstreamingdummy.svg';

const CameraDetails = ({ camera }) => {
    return (
        <div className={style.details}>
            <div className={style.cctvname}>
                <div className={style.cctvicon}></div>
                <div className={style.cctvnamebox}>
                    <div className={style.blockElement}>
                        {camera.model}
                    </div>
                    <div className={style.tags}>
                        {camera.status}
                    </div>
                </div>
            </div>
            <div className={style.cctvinfo}>
                <div className={style.left}>
                    <div className={style.cctvstreaming}>
                        <img src={cctvstreamingdummy} alt="cctvstreaming" className={style.cctvstreamingvideo} />
                    </div>
                    <div className={style.cctvinfocontentleft}>
                            <div className={style.temp}>
                                <h2>Camera Info</h2>
                            </div>
                            <div className={style.temp}>
                                <p>Camera IP: {camera.ip}</p>
                            </div>
                            <div className={style.temp}>
                                <p>Camera Location: {camera.location}</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CameraDetails;