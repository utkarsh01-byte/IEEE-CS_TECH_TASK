import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import styles from "./herosection.module.css";

const HeroSection = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const reveal2 = useTransform(
    scrollYProgress,
    [0.01, 0.3],
    ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]
  );
  const reveal3 = useTransform(
    scrollYProgress,
    [0.35, 0.8],
    ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]
  );

  const y1 = useTransform(smoothScroll, [0.08, 0.14], ["0%", "-100%"]);
  const op1 = useTransform(smoothScroll, [0.08, 0.09], [1, 0]);

  const y2 = useTransform(
    smoothScroll,
    [0.08, 0.14, 0.46, 0.5],
    ["100%", "0%", "0%", "-100%"]
  );
  const op2 = useTransform(
    smoothScroll,
    [0.08, 0.14, 0.46, 0.47],
    [0, 1, 1, 0]
  );

  const y3 = useTransform(smoothScroll, [0.46, 0.52], ["100%", "0%"]);
  const op3 = useTransform(smoothScroll, [0.46, 0.47], [0, 1]);

  const phrases = [
    { text: "Feeling lonely?", y: y1, opacity: op1 },
    { text: "Your words unheard?", y: y2, opacity: op2 },
    { text: "Feeling misunderstood?", y: y3, opacity: op3 },
  ];

  const RenderText = ({ colorClass }) => (
    <div className={`${styles["text-container"]} ${styles[colorClass]}`}>
      {phrases.map((phrase, i) => (
        <motion.h1
          key={i}
          style={{ opacity: phrase.opacity, y: phrase.y }}
          className={styles["hero-text"]}
        >
          {phrase.text}
        </motion.h1>
      ))}
    </div>
  );

  return (
    <section ref={targetRef} className={styles["hero-wrapper"]}>
      <div className={styles["sticky-viewport"]}>
        <RenderText colorClass="brown-layer" />

        <div className={styles["image-container"]}>
          <div className={`${styles["absolute-layer"]} ${styles["z-10"]}`}>
            <img
              src="https://companion.uprock.pro/thumb/2/J6iOwz1MyE0s68Q983mgBA/1024r1536/d/chatgpt_image_23_iyun_2025_g_16_20_46.webp"
              alt="1"
              className={styles["hero-img"]}
            />
          </div>

          <motion.div
            style={{ clipPath: reveal2 }}
            className={`${styles["absolute-layer"]} ${styles["z-20"]}`}
          >
            <img
              src="https://companion.uprock.pro/thumb/2/mG70xPoUzsE9BQuOL_W0Gg/1024r1536/d/chatgpt_image_23_iyun_2025_g_17_26_10.webp"
              alt="2"
              className={styles["hero-img"]}
            />
          </motion.div>

          <motion.div
            style={{ clipPath: reveal3 }}
            className={`${styles["absolute-layer"]} ${styles["z-30"]}`}
          >
            <img
              src="https://companion.uprock.pro/thumb/2/jvfGfiKGnnxs0M-QDK4omQ/1024r1536/d/chatgpt_image_23_iyun_2025_g_17_19_29.webp"
              alt="3"
              className={styles["hero-img"]}
            />
          </motion.div>

          <RenderText colorClass="white-layer" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
