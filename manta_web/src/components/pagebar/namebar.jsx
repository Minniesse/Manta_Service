import React, { useState } from 'react';
import style from './namebar.module.css';
import { useLocation } from 'react-router-dom';

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
    <div
      className={style.pageBoxStyle}
    >
      {content}
    </div>
  );
};

export default PageBox;
