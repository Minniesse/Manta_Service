import React, { useState } from 'react';
import style from './namebar.module.css';
import { useLocation } from 'react-router-dom';
import { motion } from "framer-motion";

function PageBox ({ toggleMapType }) {
  const location = useLocation();
  const [isTabVisible, setIsTabVisible] = useState(false);
  
  

  let content;
  if (location.pathname === '/') {
    content = 'Home';
  } else if (location.pathname === '/OverviewMaps') {
    content = 'CCTV Maps';
  } else {
    content = 'Page';
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
        <motion.div
          whileHover={{ scale: 0.9 }}
          whileTap={{ scale: 1.3, rotate: 10, rotateX: -10 }}
          onClick={() => setIsTabVisible(!isTabVisible)}
        >
          <img src="/src/assets/appearance.svg" alt="Icon" />
        </motion.div>
      </div>
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
          <motion.div className={style.item3} variants={item}>
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
  );
}

export default PageBox;
