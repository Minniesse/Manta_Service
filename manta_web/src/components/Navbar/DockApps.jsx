import React, { useRef } from "react";
import { MotionValue, motion, useMotionValue, useSpring, useTransform } from "framer-motion";

function Dock() {
  let mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      style={{
        margin: "0 auto",
        display: "flex",
        height: "50px", // Increased height
        alignItems: "flex-end",
        gap: "24px", // Increased gap
        borderRadius: "16px",
        backgroundColor: "#4B5563",
        padding: "24px", // Increased padding
        paddingBottom: "18px", // Adjusted paddingBottom for visual balance
        width: "fit-content", 
      }}
    >
      {[...Array(4).keys()].map((i) => (
        <AppIcon mouseX={mouseX} key={i} />
      ))}
    </motion.div>
  );
}

function AppIcon({ mouseX }) {
  let ref = useRef(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current ? ref.current.getBoundingClientRect() : { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-150, 0, 150], [60, 120, 60]); // Adjusted sizes
  let width = useSpring(widthSync, { mass: 0.3, stiffness: 200, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{
        width: width,
        aspectRatio: "1/1",
        borderRadius: "50%",
        backgroundColor: "#9CA3AF",
      }}
    />
  );
}

export default Dock;
