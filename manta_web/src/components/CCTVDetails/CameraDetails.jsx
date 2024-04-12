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
                        
                    </div>
                    <div className={style.cctvinfocontentleft}>
                            <div className={style.box1}>
                                <p></p>
                            </div>
                            <div className={style.box2}>
                                <p></p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CameraDetails;