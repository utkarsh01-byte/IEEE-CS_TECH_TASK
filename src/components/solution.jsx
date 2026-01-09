import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./solution.module.css";
import handVideo from "../videos/hand.mp4";

const SolutionSection = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const cardWidth = useTransform(scrollYProgress, [0.1, 0.6], ["40%", "100%"]);
  const borderRadius = useTransform(
    scrollYProgress,
    [0.1, 0.6],
    ["40px", "0px"]
  );

  const solutionOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className={styles.scrollWrapper}>
      <div className={styles.viewport}>
        <motion.div
          style={{ opacity: solutionOpacity }}
          className={styles.headerArea}
        >
          <h2 className={styles.giantText}>Solution</h2>
        </motion.div>

        <motion.div
          style={{ width: cardWidth, borderRadius: borderRadius }}
          className={styles.expandingCard}
        >
          <div className={styles.innerContent}>
            <div className={styles.topSection}>
              <h3 className={styles.companionInsideTitle}>Companion</h3>
            </div>

            <div className={styles.videoCenteringContainer}>
              <video autoPlay muted loop playsInline className={styles.video}>
                <source src={handVideo} type="video/mp4" />
              </video>
            </div>

            <div className={styles.bottomSection}>
              <p className={styles.companionSubText}>
                Companion is a personal AI device that learns thousands of
                conversations from different people with an open line of
                psychological support.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SolutionSection;
