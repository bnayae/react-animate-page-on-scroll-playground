import React from "react";
// import { Zoom, Fade, Slide } from "react-awesome-reveal";
import { AnimatePresence, motion } from "framer-motion";
// import { useMotionValue } from "framer-motion";
// import { useTransform } from "framer-motion";

interface IProps {
  className?: any;
  content: string;
  effect: string;
}
// https://github.com/dennismorello/react-awesome-reveal#demo
export const PageARaw = ({ content, effect }: IProps) => {
  const variants = {
    before: { opacity: 0, y: 100 },
    after: { opacity: 1, y: 0 },
  };

  // const x = useMotionValue(0);
  // const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0]);

  return (
    <section className="page">
      <AnimatePresence>
        <motion.div
          initial="before"
          animate="after"
          variants={variants}
          transition={{
            ease: "easeOut",
            duration: 1,
            y: { duration: 2 },
            delay: 0.5,
          }}
        >
          <h2 data-aos={effect}>{content}</h2>
        </motion.div>
      </AnimatePresence>
      {/* <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
      >
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ ease: "easeOut", duration: 2, delay: 0.5 }}
        >
          <h2 data-aos={effect}>{content}</h2>
        </motion.div>
      </motion.div> */}
      {/* <motion.div initial="hidden" animate="visible" variants={variants}>
        <h2 data-aos={effect}>{content}</h2>
      </motion.div>
      <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
      >
        <h2 data-aos={effect}>{content}</h2>
      </motion.div>
      <motion.div drag="x" style={{ x, opacity }}>
        <h2 data-aos={effect}>{content}</h2>
      </motion.div> */}
      {/* <Zoom duration={1000}>
        <h2 data-aos={effect}>{content}</h2>
      </Zoom>
      <Fade delay={1000} direction="right">
        <h2 data-aos={effect}>{content}</h2>
      </Fade>
      <Slide cascade delay={5000} duration={800} damping={0.5} direction="up">
        <p>I enter first...</p>
        <p>...then comes my turn...</p>
        <p>...and finally you see me!</p>
      </Slide> */}
      <p>{content}</p>
    </section>
  );
};
