import { ReactNode } from 'react';
import { motion } from 'motion/react';

const animations = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

export default function AnimatedPage({ children }: { children: ReactNode }) {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="page-wrapper"
    >
      {children}
    </motion.div>
  );
}
