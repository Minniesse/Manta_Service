import style from './Cameradetails.module.css';
import React, { useState } from 'react';
import cctvstreamingdummy from '../../assets/cctvstreamingdummy.svg';
import analytics from '../../assets/analytics.svg';
import checkicon from '../../assets/Check.svg';
import erroricon from '../../assets/Error.svg';
import editcctv from '../../assets/editcctv.svg';

const CameraDetails = ({ camera }) => {
    const [isEnabled, setIsEnabled] = useState(false);

    const handleSwitchChange = () => {
        setIsEnabled(!isEnabled);
    };

    return (
        <div className={style.details}>
            <div className={style.cctvname}>
                <div className={style.nameleft}>
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
                <img src={editcctv} className={style.editbutton} />
            </div>
            <div className={style.cctvinfo}>
                <div className={style.left}>
                    <div className={style.cctvstreaming}></div>
                    <div className={style.cctvinfocontent}>
                            <div className={style.box1}>
                                <div className={style.box1content}>
                                    <img src={erroricon} className={style.error} />
                                    <p>System Errors</p>
                                </div>
                            </div>
                            <div className={style.box2}>
                                <p></p>
                            </div>
                    </div>
                </div>
                <div className={style.right}>
                    <div className={style.Maps}>
                        <p>CCTV Location</p>
                        <div className={style.mapvisualize}></div>
                        <div className={style.mapbutton}>
                            <img src={analytics} alt="cctvstreamingdummy" />
                            <p>View Analytics Dashboard</p>
                        </div>
                    </div>
                    <div className={style.camtoggle}>
                        Enable Camera
                        <div
                                className={`${style.toggleButton} ${isEnabled ? style.enabled : ''}`}
                                onClick={handleSwitchChange}
                            >
                                <div className={style.toggleThumb}></div>
                        </div>
                    </div>
                    <div className={style.functions}>
                        <div className={style.functionitem}>
                            <span>Set region of Interest</span>
                            <img src={checkicon} alt="check" />
                        </div>
                        <div className={style.functionitem}>
                            <span>Set Camera Location</span>
                            <img src={checkicon} alt="check" />
                        </div>
                        <div className={style.functionitem}>
                            <span>Set Traffic Analysis</span>
                            <img src={checkicon} alt="check" />
                        </div>
                    </div>
                    <div className={style.additionalfunctitle}>
                        <span>Additional System (Optional)</span>
                    </div>
                    <div className={style.additionalfunc}>
                        {/* <div className={style.additionalfuncitem}>
                            <span>Latitude</span>
                            <input type="text" placeholder="34.04924594193164" />
                        </div>
                        <div className={style.additionalfuncitem}>
                            <span>Longitude</span>
                            <input type="text" placeholder="-118.24104309082031" />
                        </div> */}
                        <div className={style.additionalfuncitem}>
                            <span>System1</span>
                        </div>
                        <div className={style.additionalfuncitem}>
                            <span>System2</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CameraDetails;