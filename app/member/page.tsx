"use client";
import { BreadcrumbBar } from "@/components/bread-crumb";
import { InfiniteMovingCards } from "@/components/infinite-moving-cards";
import { motion } from "motion/react";

const breadcrumbItems = [
  { title: "网站首页", href: "/" },
  { title: "组内成员", href: "/member" },
];
export default function Member() {
  return (
    <div>
      <BreadcrumbBar items={breadcrumbItems} />
      <div className="py-32 space-y-20 md:mx-10">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
          <motion.h2
            className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight md:text-4xl lg:max-w-3xl"
            initial={{ opacity: 0, x: -100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            组内成员
          </motion.h2>
          <motion.p
            className="text-md max-w-[600px] font-medium text-muted-foreground sm:text-xl text-center"
            initial={{ opacity: 0, x: -100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            课题组由多位教授、博士后、博士生和硕士生组成，研究方向涵盖了环境科学等多个领域。
          </motion.p>
        </div>
      </div>
      <motion.div
        className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="fast"
          pauseOnHover={true}
        />
      </motion.div>
    </div>
  );
}

const testimonials = [
  {
    quote: "刘广龙，华中农业大学资源与环境学院，教授。",
    name: "刘广龙",
    handle: "@liugl",
    avatar:
      "https://zyhj.hzau.edu.cn/__local/4/27/33/0729CFD95BD3BC786F6C9F274B9_FBE3761B_2AC9A.png",
    href: "https://zyhj.hzau.edu.cn/info/1183/7632.htm",
  },
  {
    quote: "赵建伟，华中农业大学资源与环境学院，副教授。",
    name: "赵建伟",
    handle: "@jwzhao",
    avatar:
      "https://zyhj.hzau.edu.cn/__local/6/10/43/FD63EB59364D6FF1F66B5DC0174_418D9A5A_9FF8.jpg",
    href: "https://zyhj.hzau.edu.cn/info/1184/7625.htm",
  },
  {
    quote: "谭文峰，华中农业大学资源与环境学院，教授。",
    name: "谭文峰",
    handle: "@tanwf",
    avatar:
      "https://faculty.hzau.edu.cn/_resources/group1/M00/00/00/00WEqGA_Kr2AcHWzAAFnF025vwc657.png",
    href: "https://zyhj.hzau.edu.cn/info/1183/7552.htm",
  },
];
