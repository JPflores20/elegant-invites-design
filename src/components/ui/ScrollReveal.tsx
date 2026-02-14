import { motion, useInView, UseInViewOptions } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  className?: string;
  viewport?: UseInViewOptions;
}

export const ScrollReveal = ({ 
  children, 
  width = "100%", 
  delay = 0,
  className = "",
  viewport = { once: true, amount: 0.2 }
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, viewport);

  return (
    <div ref={ref} style={{ width }} className={className}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};
