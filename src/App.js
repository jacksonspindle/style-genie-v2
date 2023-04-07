import React from "react";
import { motion, useAnimation } from "framer-motion";

const Wave = () => {
  const controls = useAnimation();

  const wavePath = "M50,0 C150,75 0,75 50,150 L150,150 L150,0 Z";
  const wavePath2 = "M50,0 C0,75 150,75 50,150 L150,150 L150,0 Z";

  const animateWave = async () => {
    await controls.start({
      d: wavePath,
      transition: { duration: 10, ease: "easeInOut" },
    });
    await controls.start({
      d: wavePath2,
      transition: { duration: 10, ease: "easeInOut" },
    });
    animateWave();
  };

  React.useEffect(() => {
    animateWave();
  });

  return (
    <>
      <motion.svg
        viewBox="0 0 150 150"
        preserveAspectRatio="none"
        style={{ width: "100%", height: "100%" }}
      >
        <defs>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
            <feOffset dx="5" dy="5" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.3" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="shadow2" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
            <feOffset dx="-5" dy="-5" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.45" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <motion.path
          d={wavePath}
          fill="#dde1e7"
          animate={controls}
          style={{
            filter: "url(#shadow) url(#shadow2)",
          }}
        />
      </motion.svg>
    </>
  );
};

export default Wave;
