import React, { useState } from 'react';
import style from './namebar.module.css';
import { useLocation } from 'react-router-dom';
import { motion } from "framer-motion";
import addcam from '../../assets/add_button.svg';

function PageBox ({ toggleMapType, setIsButtonClicked }) {
  const location = useLocation();
  const [isTabVisible, setIsTabVisible] = useState(false);
  const [isCCTVConfigTabVisible, setIsCCTVConfigTabVisible] = useState(false);

  let content;
  if (location.pathname === '/') {
    content = 'Home';
  } else if (location.pathname === '/OverviewMaps') {
    content = 'CCTV Maps';
  }
  else if (location.pathname === '/CCTVConfig' || location.pathname.startsWith('/CCTVConfig/')) {
    content = 'CCTV Config';
  } else {
    content = 'CCTV Config';
  }

  const container = {
    hidden: { 
      opacity: 0, 
      x: 100
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delayChildren: 0.01,
        staggerChildren: 0.2,
        when: "beforeChildren",
      }
    }
  };
  
  const item = {
    hidden: { scale: 0.7, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "backOut",
      }
    }
  };  

  return (
    <>
      <div className={style.LeftBar}>
        <div className={style.pageBoxStyle}>
          {content}
        </div>
        {location.pathname === '/OverviewMaps'&&  (
          <>
            <motion.div
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 1.3, rotate: 10, rotateX: -10 }}
              onClick={() => setIsTabVisible(!isTabVisible)}
            >
              <img src="/src/assets/appearance.svg" alt="Icon" />
            </motion.div>
            <motion.div
              className={style.notificationTab}
              variants={container}
              initial="hidden"
              animate={isTabVisible ? "visible" : "hidden"}
            >
              <motion.div className={style.title} variants={item}>Choose the Appearance</motion.div>
              <div className={style.itemsContainer}>
                <motion.div className={style.item1} variants={item} onClick={() => toggleMapType('satellite')}>
                  <img src="/src/assets/tempIcon.svg" alt="Icon" />
                  <span>Satellite</span>
                </motion.div>
                <motion.div className={style.item2} variants={item}>
                  <img src="/src/assets/tempIcon.svg" alt="Icon" />
                  <span>Heatmap</span>
                </motion.div>
                <motion.div className={style.item3} variants={item} onClick={() => toggleMapType('Traffic')}>
                  <img src="/src/assets/tempIcon.svg" alt="Icon" />
                  <span>Traffic</span>
                </motion.div>
                <motion.div className={style.item4} variants={item}>
                  <img src="/src/assets/tempIcon.svg" alt="Icon" />
                  <span>Vehicles</span>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
        {(location.pathname === '/CCTVConfig' || location.pathname.startsWith('/CCTVConfig/')) && (
          <>
            <motion.div
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 1.3, rotate: 10, rotateX: -10 }}
              onClick={() => {
                setIsCCTVConfigTabVisible(!isCCTVConfigTabVisible);
                setIsButtonClicked(true);
              }}
            >
              <img src={addcam} alt="Add Camera" className={style.addcam}/>
            </motion.div>
            <motion.div
              className={style.notificationTab}
              variants={container}
              initial="hidden"
              animate={isCCTVConfigTabVisible ? "visible" : "hidden"}
              style={{
                position: 'absolute',
                top: '35%',
                right: '70%',
                transform: 'translate(-50%, -50%)',
                zIndex: 9999,
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                width: '200px',
                height: '55px',
              }}
              onAnimationComplete={() => {
                if (!isCCTVConfigTabVisible) {
                  setIsButtonClicked(false);
                }
              }}
            >
              <motion.div className={style.title} variants={item}>
                <label htmlFor="textInput">Add your new </label>
                <input type="text" id="textInput" className={style.inputbox}/>
              </motion.div>
            </motion.div>
          </>
        )}
      </div>
    </>
  );
}

export default PageBox;