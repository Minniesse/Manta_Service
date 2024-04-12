import style from './Cameradetails.module.css';
import React from 'react';

const CameraDetails = ({ camera }) => {
    return (
        <div className={style.details}>
            {/* <h2>{camera.model}</h2>
            <p>Status: {camera.status}</p>
            <p>IP: {camera.camera_he}</p> */}
            <div className={style.cctvname}>
                <h2>Camera Info</h2>
                <p>{camera.model}</p>
            </div>
        </div>
    );
};

export default CameraDetails;