import React, { useEffect } from "react";
// import { Zoom, Fade, Slide } from "react-awesome-reveal";
import { AnimatePresence, motion } from "framer-motion";
// import { useMotionValue } from "framer-motion";
// import { useTransform } from "framer-motion";
import "./Page.css";
import { usePageClass } from "../Hooks/PageContext";

interface IProps {
  className?: any;
  content: string;
}

// https://github.com/dennismorello/react-awesome-reveal#demo
export const PageARaw = ({ content, className }: IProps) => {
  const variants = {
    init: { opacity: 0, y: 100 },
    target: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    console.log(`@@ ${content}`);
  }, []);

  const responsiveClasses = usePageClass(["item"]);

  return (
    <section className={`page ${className}`}>
      {/* <Suspense fallback={<div>loading...</div>}> */}
      <AnimatePresence>
        <motion.div
          initial="init"
          animate="target"
          variants={variants}
          transition={{
            type: "spring",
            ease: "easeOut",
            duration: 1,
            y: { duration: 2 },
            delay: 0.5,
          }}
        >
          <h2>{content}</h2>
        </motion.div>
      </AnimatePresence>
      <div className={responsiveClasses}>
        <h2>{content}</h2>
      </div>
      {/* </Suspense> */}
      <p>{content}</p>
    </section>
  );
};
