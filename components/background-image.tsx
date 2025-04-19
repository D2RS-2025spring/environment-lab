"use client";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

export function BackgroundImage() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  return (
    <div className="flex flex-col">
      <motion.div
        initial={{
          scale: 0.8,
          opacity: 0,
          x: -200,
        }}
        animate={{
          scale: 1,
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
        }}
        className={`absolute inset-0 w-full overflow-hidden ${
          isHome ? "h-[50vh]" : "h-16"
        }`}
      >
        <img src="./bg.jpg" alt="背景图片" />
      </motion.div>
    </div>
  );
}
