import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

function Dock() {
  let mouseX = useMotionValue(Infinity);

return (
    <>
        {/* <h1 className="text-center text-2xl font-bold text-white">Dock</h1> */}
        <motion.div
            className="flex justify-center"
            style={{ x: mouseX }}
            onMouseMove={(event) => mouseX.set(event.pageX)}
        >
            hello
        </motion.div>
    </>
);
}
export default Dock;
