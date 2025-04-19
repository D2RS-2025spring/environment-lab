"use client";
import { useEffect, useRef, useState } from "react";
import { ThemeSwitch } from "@/components/theme-switch";
import { motion } from "motion/react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "网站首页" },
  { href: "/direction", label: "研究方向" },
  { href: "/output", label: "研究成果" },
  { href: "/member", label: "组内成员" },
  { href: "/contact", label: "联系我们" },
];

export function NavBar() {
  const navItemsRef = useRef<Array<HTMLLIElement | null>>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
    left: 0,
  });

  // 根据鼠标位置，更新导航菜单背景元素尺寸和位置
  useEffect(() => {
    if (hoveredIndex !== null && navItemsRef.current[hoveredIndex]) {
      const currentItem = navItemsRef.current[hoveredIndex];
      setDimensions({
        width: currentItem?.offsetWidth || 0,
        height: currentItem?.offsetHeight || 0,
        left: currentItem?.offsetLeft || 0,
      });
    }
  }, [hoveredIndex]);

  return (
    <motion.nav
      className="relative flex justify-between items-center px-6 h-16 bg-background/10 backdrop-blur-sm z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {/* logo and title */}
      <div className="absolute left-6 flex items-center">
        <div className="mr-2">
          <img src="https://www.hzau.edu.cn/images/LOGO.png" className="h-10" />
        </div>
        <h1 className="text-xl font-semibold text-white">环境工程课题组</h1>
      </div>

      {/* 菜单 - 居中定位 */}
      <div className="hidden md:flex flex-1 justify-center items-center w-full">
        <ul className="flex list-none relative">
          {/* 动态背景元素 */}
          {hoveredIndex !== null && (
            <motion.div
              className="absolute bg-accent rounded-md top-0"
              initial={false}
              animate={{
                width: dimensions.width,
                height: dimensions.height,
                x: dimensions.left,
                opacity: 1,
              }}
              transition={{
                type: "ease",
                duration: 0.3,
              }}
            />
          )}

          {navLinks.map((link, index) => (
            <li
              key={link.href}
              ref={(el) => {
                navItemsRef.current[index] = el;
              }}
              className="mx-2"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link
                href={link.href}
                className="text-white no-underline hover:text-primary px-3 py-2 rounded-md block relative z-10"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="absolute right-6 hidden md:flex items-center gap-4">
        <ThemeSwitch />
      </div>
    </motion.nav>
  );
}
