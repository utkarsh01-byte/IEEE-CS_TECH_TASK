import React from "react";
import { motion } from "framer-motion";
import styles from "./navigation.module.css";

const Navbar = ({ visible }) => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: -100,
      x: "-50%",
    },
    visible: {
      opacity: 1,
      y: 0,
      x: "-50%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      y: -20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  const menuItems = ["About", "Functions", "Advantages", "Specifications"];

  return (
    <motion.nav
      variants={containerVariants}
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      className={styles.navbar}
    >
      {menuItems.map((item, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className={styles.navItem}
        >
          {item}
        </motion.div>
      ))}

      <motion.button variants={itemVariants} className={styles.preOrderBtn}>
        Pre-order
      </motion.button>
    </motion.nav>
  );
};

export default Navbar;
