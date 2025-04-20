"use client";
import { BreadcrumbBar } from "@/components/bread-crumb";
import { motion } from "motion/react";

const breadcrumbItems = [
  { title: "网站首页", href: "/" },
  { title: "联系我们", href: "/contact" },
];
//{ opacity: 1, x: 0, scale: 1 }
export default function Contact() {
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
            联系我们
          </motion.h2>
          <motion.p
            className="text-md max-w-[600px] font-medium text-muted-foreground sm:text-xl"
            initial={{ opacity: 0, x: -100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            欢迎对课题组研究方向感兴趣的合作者、同学与我们取得联系！
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <ContactCard
              icon="✉️"
              title="邮箱"
              content="liugl@mail.hzau.edu.cn"
              description="我们将在收到邮件后尽快回复您"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <ContactCard
              icon="📍"
              title="地址"
              content="湖北省武汉市洪山区华中农业大学"
              description="邮编: 430070"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function ContactCard({
  icon,
  title,
  content,
  description,
}: {
  icon: string;
  title: string;
  content: string;
  description: string;
}) {
  return (
    <div className="rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow bg-gradient-to-b from-muted/50 to-muted/10">
      <div className="text-4xl mb-4">{icon}</div>
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
        {title}
      </h2>
      <p className="text-gray-600 mb-2">{content}</p>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
}
