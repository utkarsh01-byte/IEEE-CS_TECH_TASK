import React, { useState, useEffect } from "react";
import { useScroll } from "framer-motion";
import Navbar from "./components/navigation.jsx";
import HeroSection from "./components/herosection.jsx";
import SolutionSection from "./components/solution.jsx";
import styles from "./App.module.css";

function App() {
  const [showNav, setShowNav] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      if (latest > 1700) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    });
  }, [scrollY]);

  return (
    <div className={styles.appWrapper}>
      <div className={styles.bgVideoContainer}>
        <video autoPlay muted loop playsInline className={styles.bgVideo}>
          <source
            src="https://video.srv18.com/v/mp4/39725c490839145c5f5d57486a709377/1920"
            type="video/mp4"
          />
        </video>
      </div>

      <Navbar visible={showNav} />

      <main className={styles.mainContent}>
        <div
          style={{ backgroundColor: "white", position: "relative", zIndex: 10 }}
        >
          <HeroSection />
        </div>

        <div
          style={{
            backgroundColor: "transparent",
            position: "relative",
            zIndex: 5,
          }}
        >
          <SolutionSection />
        </div>

        <div
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "4rem",
              color: "#311e03",
              fontFamily: "sans-serif",
            }}
          >
            How can a companion help?
          </h2>
        </div>
      </main>
    </div>
  );
}

export default App;