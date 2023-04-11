import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useAnimation,
  useScroll,
} from "framer-motion";
import GenieLamp from "./components/GenieLamp";
import LandingPage from "./components/LandingPage";
import "./styles/landing-page.css";
import arrow from "./arrow.png";
import Hoodie from "./components/Hoodie";

const App = () => {
  const [landing, setLanding] = useState(false);
  const [scroll, setScroll] = useState(0);

  const controls = useAnimation();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    scrollYProgress.onChange((v) => setScroll(v));
    console.log(scroll);
  }, [scrollYProgress, scroll]);

  useEffect(() => {
    controls.start({
      y: ["73vh", "75vh", "73vh"],
      opacity: [1, 1, 1],
      transition: { duration: 4, repeat: Infinity, repeatType: "loop" },
    });
  }, [controls]);
  return (
    <div>
      <AnimatePresence>
        {landing === false ? (
          <motion.div className="hero-text">
            <motion.div className="hero-text-container">
              <motion.h1
                onClick={() => setLanding(true)}
                initial={{ y: "70vh", opacity: 0 }}
                animate={{ y: "64vh", opacity: 1, transition: { duration: 1 } }}
                exit={{ opacity: 0 }}
              >
                Open the Lamp
              </motion.h1>
              <motion.img
                onClick={() => setLanding(true)}
                initial={{ y: "78vh", opacity: 0 }}
                animate={controls}
                exit={{ opacity: 0 }}
                className="arrow"
                src={arrow}
              ></motion.img>
            </motion.div>
          </motion.div>
        ) : (
          ""
        )}
      </AnimatePresence>
      <motion.div
        className="canvas"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 2 } }}
      >
        <Canvas>
          <GenieLamp state={setLanding} landing={landing} />
          <Hoodie scroll={scroll} landing={landing} />
          {/* <OrbitControls  enableZoom={false} /> */}
        </Canvas>
      </motion.div>

      <LandingPage scroll={scroll} active={landing} />
    </div>
  );
};

export default App;
