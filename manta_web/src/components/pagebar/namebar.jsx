import React, { useState } from 'react';
import style from './namebar.module.css';
import { useLocation } from 'react-router-dom';
import { MotionValue, motion, useMotionValue, useSpring, useTransform, useAnimation } from "framer-motion";

function PageBox () {
    const location = useLocation();
    let content;
    //set the condition when we open that page for PageNameBar
    if (location.pathname === '/') {
        content = 'Home';
      } else if (location.pathname === '/OverviewMaps') {
        content = 'CCTV Maps';
      } else {
        content = 'Page';
      }
  return (
    <>
    <div className={style.LeftBar}>
      <div className={style.pageBoxStyle}>
        {content}
      </div>
      <motion.div
        whileHover={{ scale: 0.9 }}
        whileTap={{ scale: 1.3, borderRadius: "100%"}}
      >
      <img src="/src/assets/appearance.svg" alt="Icon" />
      </motion.div>
    </div>
    </>
  );
};

export default PageBox;
