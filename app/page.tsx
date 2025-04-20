"use client";

import { Timeline } from "@/components/timeline";
import { ImagesSlider } from "@/components/image-slider";
import { AnimatedTestimonials } from "@/components/animated-testimonials";
import { Separator } from "@/components/ui/separator";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function Home() {
  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: true });
  return (
    <div>
      <ImagesSlider className="h-[50vh]" images={images} />
      <motion.div
        className="w-full"
        initial={{ opacity: 0, x: -100, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <h2 className="text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight md:text-4xl py-20">
          导师介绍
          <Separator className="mt-2 border-t-2" />
        </h2>
        <AnimatedTestimonials testimonials={testimonials} />
      </motion.div>

      <motion.div
        ref={timelineRef}
        className="w-full mt-8"
        initial={{ opacity: 0, x: -100, scale: 0.8 }}
        animate={
          isInView
            ? { opacity: 1, x: 0, scale: 1 }
            : { opacity: 0, x: -100, scale: 0.8 }
        }
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight md:text-4xl py-20">
          组内动态
          <Separator className="mt-2 border-t-2" />
        </h2>
        <Timeline data={timeLineData} />
      </motion.div>
    </div>
  );
}
// 轮播图片
const images = [
  "https://boot-img.xuexi.cn/image/1005/process/b0c88221c3cf4e9584c419756b3f5dd2.png",
  "https://pic.rmb.bdstatic.com/bjh/241207/dump/beb7e08d531be541dfd3cab2bd11e392.jpeg",
  "https://copyright.bdstatic.com/vcg/edit/19d4bb1084c65d0078d0c92b693b006c.jpg",
];
// 导师资料
const testimonials = [
  {
    quote: `2006年获学士学位（华中农业大学、环境科学专业），2011年获博士学位（华中农业大学、农业环境工程），2013年至2017年在中国科学院水生生物研究所从事博士后研究，并先后于美国EPA（环境保护局）、辛辛那提大学、特拉华大学、澳大利亚格里菲斯大学河流研究所进行了访学研究。\n
      研究方向为农业面源污染综合防治，重点开展了土水界面磷素生物地球化学循环理论研究及农业面源污染综合防治技术支撑、地膜科学使用与回收技术服务、绿色食品原料标准化生产基地创建等社会服务工作，累计主持科研经费5000余万元，于Water Research、ACS ES&T Engineering、Environment International、Journal of Hazardous Materials、Chemical Engineering Journal等专业主流期刊发表论文67篇，其中第一/通讯作者SCI论文36篇。以第一发明人授权发明专利6项（美国专利1项），出版专著1部，编制地方标准4项，获省部级奖励4项。`,
    name: "刘广龙",
    designation: "华中农业大学资源与环境学院，教授",
    src: "https://zyhj.hzau.edu.cn/__local/4/27/33/0729CFD95BD3BC786F6C9F274B9_FBE3761B_2AC9A.png",
  },
  {
    quote: `现任国家环境保护土壤健康与绿色修复重点实验室主任、农业农村部长江中下游耕地保育重点实验室主任。长期从事水土界面过程与土壤健康方面的研究工作。\n
  先后主持国家自然科学基金重点/国际合作、国家重点研发专项、欧盟“土地退化”等项目20余项；发表学术论文200余篇，其中SCI论文150余篇。曾获中组部“万人计划”科技创新领军人才、科技部科技创新领军人才、国家杰出青年科学基金、教育部新世纪优秀人才计划、湖北省自然科学基金创新群体负责人等。\n
  兼任界面与污染国际委员会委员，第11届界面与污染国际会议主席、第21届环境生物地球化学国际研讨会共同主席，教育部科学技术委员会环境学部委员，中国土壤学会常务理事、中国土壤学会土壤化学专业委员会副主任，湖北省第三次土壤普查专家组组长、工作领导小组办公室副主任等。`,
    name: "谭文峰",
    designation: "华中农业大学资源与环境学院，教授",
    src: "https://zyhj.hzau.edu.cn/__local/B/C0/5A/3168EF86485F52F6A4910D0CB7E_1322B55D_16EDE.jpg",
  },
  {
    quote: `赵建伟，男，博士，副教授，主要从事河湖治理、城市面源、农业面源等研究。中国环境科学学会水处理与回用专业委员会委员，中国化学会会员。\n
      主持国家及省部级科研课题10余项，以及多项横向课题，参加河湖修复工程和面源控制工程10余项。\n
      担任《Chemosphere》、《Science of The Total Environment》、《Ecological engineering》、《环境科学学报》、《中国环境科学》等杂志审稿人。发表中英文论文50余篇，授权发明专利20余项。参编专著两部、国家级教材一部。`,
    name: "赵建伟",
    designation: "华中农业大学资源与环境学院，副教授",
    src: "https://zyhj.hzau.edu.cn/__local/6/10/43/FD63EB59364D6FF1F66B5DC0174_418D9A5A_9FF8.jpg",
  },
];
// 动态数据
const timeLineData = [
  {
    title: "2025-01-27",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-8">
          “湖北地膜污染治理回收利用长效机制构建”项目验收会在我校召开
        </p>
        <div className="mb-8">
          <div className="flex gap-2 items-center text-neutral-500 dark:text-neutral-300 text-xs md:text-sm">
            1月23日，“湖北地膜污染治理回收利用长效机制构建”项目验收会在我校国际学术交流中心六楼会议室举行。项目负责人、华中农业大学资源与环境学院教授刘广龙从项目基本信息、项目实施方案、主要研究进展、经费执行情况和后续工作计划等方面向与会专家及领导详细地汇报了“湖北地膜污染治理回收利用长效机制构建”项目的完成情况。
            <br />
            <br />
            他提到，项目团队成功开发了地膜适用性评价体系，建立了残留监测网络，完成了农膜数据库与项目核查系统的开发，并在地膜回收生态价值核算与地膜回收产业化示范基地构建等方面取得了显著成果。
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://zyhj.hzau.edu.cn/__local/6/F2/B8/5E9C7919C308385B3DF168D7FEF_99F08788_61732.png"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <img
            src="https://zyhj.hzau.edu.cn/__local/7/4F/F5/4966977878504A685D63F0A607C_5FD2ACB7_3AEF3.png"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2024-12-25",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-8">
          湖北省三普办调研我院三普成果汇编和数据管理工作
        </p>
        <div className="mb-8">
          <div className="flex gap-2 items-center text-neutral-500 dark:text-neutral-300 text-xs md:text-sm">
            2024年12月24日，湖北省第三次土壤普查工作正在有序推进中。湖北省第三次土壤普查办公室常务副主任柯建国一行来到华中农业大学，针对资源与环境学院主持承担的第三次全国土壤普查县级成果编制及数据管理工作进展展开调研。此次调研旨在加快推进我省第三次全国土壤普查成果编制工作，确保我省第三次全国土壤普查数据得到安全管理和规范处理。
            <br />
            <br />
            自2022年第三次全国土壤普查开展以来，我校资源与环境学院主导承担了包括外业采样调查与质控、内业检测质控、成果编制等多项任务，工作任务量约占湖北省全部任务的
            30%。同时，学院的众多教授还在普查工作中担任关键技术职务。据悉，谭文峰教授担任湖北省第三次土壤普查技术总负责人、成果汇总技术专家组组长，张海涛副教授任该技术组副组长；王天巍教授任外业调查与采样技术专家组组长，蔡崇法教授为湖北省第三次土壤普查咨询顾问。为普查工作提供了坚实的技术支撑。
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://zyhj.hzau.edu.cn/__local/B/E6/9C/5C25872084CFAEBDA8DDFBACA21_E93DB01F_28891.jpeg"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <img
            src="https://zyhj.hzau.edu.cn/__local/E/A7/EA/1FCC4828B0CF0F9CAE9608B4ECE_1E2B62E7_565EA.png"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2023-12-30",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-8">
          学院举办2023年环境科学专业技能竞赛
        </p>
        <div className="mb-8">
          <div className="flex gap-2 items-center text-neutral-500 dark:text-neutral-300 text-xs md:text-sm">
            2023年12月30日下午，2023年环境科学专业技能竞赛决赛在西附楼报告厅举行。本次竞赛主要围绕环境监测、风险评估和污染修复技术研究为主题，要求参赛队伍围绕我们周边环境质量进行污染调查、评估和污染治理分析，旨在推动我院环境科学专业实践教学改革，创新实践教学体系，增强环境科学专业学生的理论实践能力。参赛队伍自行组队，在指导老师的协助下自主选题，最终有7个小组参加本次集中汇报。学院邱国红教授、刘名茗教授、周云教授、于书霞副教授、赵建伟副教授、葛小东副教授、宋明伟副教授、王小明副教授、石巍方老师和曹梦华副教授等师生40余人出席比赛，竞赛活动由环境科学与工程系主任邱国红教授主持。
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://zyhj.hzau.edu.cn/__local/B/36/76/A187F135B944F4213250351AFA4_2BEAAEC2_16A36.png"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <img
            src="https://zyhj.hzau.edu.cn/__local/7/43/43/25E186F59219CE0EACFA4F3D3F5_E036EB46_1490C.png"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
];
