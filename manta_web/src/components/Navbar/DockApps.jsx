import React, { useRef } from "react";
import { MotionValue, motion, useMotionValue, useSpring, useTransform, useAnimation } from "framer-motion";
import style from "./DockApps.module.css";
import icon1 from "../../assets/Maps.svg";
import icon2 from "../../assets/Settings.svg";
import icon3 from "../../assets/Find_my.svg";
import icon4 from "../../assets/Facetime.svg";
import { useNavigate } from "react-router-dom";

function Dock() {
  let mouseX = useMotionValue(Infinity);
  let navigate = useNavigate();

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={style.Dock}
    >
      <AppIcon mouseX={mouseX} icon={icon1} navigate={navigate} route="/OverviewMaps"/>
      <AppIcon mouseX={mouseX} icon={icon2} navigate={navigate} route="/CCTVConfig" />
      <AppIcon mouseX={mouseX} icon={icon3} />
      <AppIcon mouseX={mouseX} icon={icon4} />
    </motion.div>
  );
}

function AppIcon({ mouseX, icon, navigate, route = "" }) {
  let ref = useRef(null);
  const controls = useAnimation();

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current ? ref.current.getBoundingClientRect() : { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-150, 0, 150], [60, 120, 60]);
  let width = useSpring(widthSync, { mass: 0.3, stiffness: 200, damping: 12 });

  const handleClick = () => {
    if (route) navigate(route);
    controls.start({
      y: [0, -30, 0, -5, 0],
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    });
  };

  return (
    <motion.div
      ref={ref}
      style={{ width: width }}
      onClick={handleClick}
      animate={controls}
    >
      <img src={icon} alt="icon" style={{ width: "100%", height: "100%", display: "flex" }} />
    </motion.div>
  );
}

export default Dock;