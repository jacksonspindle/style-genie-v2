import React from "react";
import { motion } from "framer-motion";

const LandingPage = (props) => {
  console.log(props.active);
  return props.active ? (
    <motion.div
      initial={{ y: -700, opacity: 0 }}
      animate={{ y: -900, transition: { duration: 1, delay: 0.5 }, opacity: 1 }}
      className="landing-page-container"
    >
      <motion.div className="hero-container">
        <motion.div className="hero">
          <motion.h1>X Hoodie Model</motion.h1>
          <motion.h2>
            The futures most innovative hoodie for maximizing your creativity.
            <br></br>
            Be among the first to obtain the future of tech wear.
          </motion.h2>
        </motion.div>
        <div class="input-container">
          <input placeholder="email" />
        </div>
      </motion.div>
      {/* <motion.div>
        <motion.div>
          <h2>Value Prop 1</h2>
        </motion.div>
        <motion.div>
          <h2>Value Prop 2</h2>
        </motion.div>
        <motion.div>
          <h2>Value Prop 3</h2>
        </motion.div>
        <motion.div>
          <h2>Value Prop 4</h2>
        </motion.div>
      </motion.div> */}
    </motion.div>
  ) : (
    ""
  );
};

export default LandingPage;
