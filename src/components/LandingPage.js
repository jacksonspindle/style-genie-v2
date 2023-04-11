import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Hoodie from "./Hoodie";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import creativityIcon from "../images/creativityIcon.png";
import aiIcon from "../images/aiIcon.png";
import qualityIcon from "../images/qualityIcon.png";
import communityIcon from "../images/communityIcon.png";
import Shirt from "./Shirt";

const LandingPage = (props) => {
  console.log(props.scroll);
  return props.active ? (
    <motion.div className="landing-page-container">
      <AnimatePresence>
        {props.scroll < 0.02 ? (
          <motion.div
            initial={{ y: -700, opacity: 0 }}
            animate={{
              y: -900,
              transition: { duration: 1, delay: 0.5 },
              opacity: 1,
            }}
            exit={{ opacity: 0 }}
          >
            <motion.div className="hero-container">
              <motion.div className="hero">
                <motion.h1>X Hoodie Model</motion.h1>
                <motion.h2>
                  The futures most innovative hoodie for maximizing your
                  creativity.
                  <br></br>
                  Be among the first to obtain the future of tech wear.
                </motion.h2>
              </motion.div>
              <div class="input-container">
                <input placeholder="email" />
              </div>
            </motion.div>
          </motion.div>
        ) : (
          ""
        )}
      </AnimatePresence>
      <motion.div className="propositions">
        <motion.div>
          <motion.h2>Everyone's Creative</motion.h2>
          <img src={creativityIcon} alt="prop-icon"></img>
          <motion.p>
            Complete creative control no more being told what to wear.
          </motion.p>
        </motion.div>
        <motion.div>
          <motion.h2>Harness AI</motion.h2>
          <img src={aiIcon} alt="prop-icon"></img>
          <motion.p>Maximize your creativity designing with AI</motion.p>
        </motion.div>
        <motion.div>
          <motion.h2>Premium Quality</motion.h2>
          <img src={qualityIcon} alt="prop-icon"></img>
          <motion.p>
            Premium quality physical garments with digital counterparts
          </motion.p>
        </motion.div>
        <motion.div>
          <motion.h2>Creative Community</motion.h2>
          <img src={communityIcon} alt="prop-icon"></img>
          <motion.p>
            Access to a vibrant community of cutting-edge creatives
          </motion.p>
        </motion.div>
      </motion.div>
      <motion.div className="promo-video-container">
        <motion.div className="promo-video"></motion.div>
      </motion.div>
      <motion.div className="why-we-made-this-container">
        <motion.div style={{ height: "600px" }}>
          <Canvas>
            <Shirt scroll={props.scroll} />
            <Environment preset="city" />
          </Canvas>
        </motion.div>
        <motion.div>
          <motion.h1>Why We Made This</motion.h1>
          <motion.p>
            At StyleGenie, we believe in the transformative power of creativity
            and the limitless potential that technology brings to the world of
            fashion. We are living in a thrilling era where artificial
            intelligence, 3D rendering, and advanced tools like DALLE 2 and
            ChatGPT are reshaping the creative landscape, making it more
            accessible than ever before. With these breakthroughs, artistic
            expression is no longer confined to those with traditional technical
            skills in design, 3D modeling, or video editing.
            <br></br>
            <br></br>
            Unfortunately, the fashion industry has been slow to adapt, often
            limiting customers' choices and stifling their creative freedom.
            That's where we come in. StyleGenie was founded to revolutionize the
            relationship between a brand and its community, creating a more
            collaborative and intimate bond. Our mission is to empower you to
            design and wear clothing that truly reflects your unique style and
            vision.
            <br></br>
            <br></br>
            Our easy-to-use platform bridges the gap between cutting-edge
            technology and your creativity, allowing you to effortlessly harness
            the power of AI without the burden of mastering these tools
            yourself. With StyleGenie, you can create custom designs that you're
            proud to wear and showcase your individuality like never before.
            Welcome to the future of fashion—where your imagination has no
            limits, and the possibilities are endless.
          </motion.p>
        </motion.div>
      </motion.div>
      <motion.div className="follow-the-journey-container">
        <motion.h1 className="follow-the-journey">Follow the Journey</motion.h1>
        <div class="input-container">
          <input placeholder="email" />
        </div>
      </motion.div>

      <motion.div className="why-we-made-this-container">
        <motion.div
          style={{ backgroundColor: "black", margin: "1rem", height: "500px" }}
        ></motion.div>
        <motion.div>
          <motion.h1>Design Portal</motion.h1>
          <motion.h2>Intuitive 3D Design Environment</motion.h2>
        </motion.div>
      </motion.div>
      <motion.div className="why-we-made-this-container">
        <motion.div>
          <motion.h1>Genie</motion.h1>
          <motion.h2>
            Collaborate with the Genie to grant any of your design wishes.
          </motion.h2>
        </motion.div>
        <motion.div
          style={{ backgroundColor: "black", margin: "1rem", height: "500px" }}
        ></motion.div>
      </motion.div>
      <motion.div className="why-we-made-this-container">
        <motion.div
          style={{ backgroundColor: "black", margin: "1rem", height: "500px" }}
        ></motion.div>
        <motion.div>
          <motion.h1>Creative Community</motion.h1>
          <motion.h2>
            Collaborate and connect with a rich community of creatives and
            innovators
          </motion.h2>
          <motion.button>Join Discord</motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  ) : (
    ""
  );
};

export default LandingPage;
