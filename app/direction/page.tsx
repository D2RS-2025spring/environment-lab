"use client";
import { BreadcrumbBar } from "@/components/bread-crumb";
import { motion } from "motion/react";
import Markdown from "react-markdown";

const breadcrumbItems = [
  { title: "网站首页", href: "/" },
  { title: "研究方向", href: "/direction" },
];

export default function Direction() {
  return (
    <div>
      <BreadcrumbBar items={breadcrumbItems} />
      <div className="flex justify-center mt-10">
        {/* 主要内容区 */}
        <motion.div
          className="flex-grow prose dark:prose-invert max-w-3xl"
          initial={{ opacity: 0, x: -100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Markdown>{markdown}</Markdown>
        </motion.div>
      </div>
    </div>
  );
}
const markdown = `
## 农业面源污染监测与综合防治
![](https://pic1.zhimg.com/70/v2-f87fd27ee75d7b5b73e4e4656f07411c_1440w.avis?source=172ae18b&biz_tag=Post)
农业面源污染是农业生产活动中氮、磷等营养物质及新型污染物通过非固定排放途径扩散至环境所引发的系统性生态问题。其污染源涵盖化肥过量施用、畜禽养殖废弃物、残留地膜及抗生素等，具有分散性、滞后性及迁移途径复杂化等特点。例如，经济作物种植区因过量施肥导致氮磷淋失，占地下水硝酸盐污染的70%以上；水产养殖尾水中抗生素和激素浓度虽低，但长期积累对生态系统构成潜在威胁。更严峻的是，微塑料、病原微生物等新型污染物已渗透至土壤和水体，形成复合污染网络。

针对污染特征，我国近年来构建了“天地网”协同监测体系，突破性研发出全球首套面源污染智能监测系统。该系统集成纳米传感材料与人工智能算法，可在流动水体中实时检测3类农药和3类抗生素，灵敏度达ng/mL级，响应时间缩短至1分钟以内。通过物联网技术，监测数据实时生成污染热力图，预警准确率超90%，并在太湖、海河等流域实现180天无人值守运行，运维成本降低70%。同位素示踪技术（如δ¹⁵N-NO₃⁻和δ¹⁸O-NO₃⁻）的应用，进一步解析了污染物迁移路径，为精准溯源提供科学依据。

综合防治策略强调“源头减量-过程拦截-末端治理”的全链条治理。在长江流域，通过“减源-增汇-截获-循环”模式，结合生态沟渠和农林复合系统，削减氮磷流失40%以上。西北旱区推广地膜回收与深松耕作技术，有效降低棉田微塑料残留；西藏农牧区则通过水肥耦合优化提升青稞产量与生态效益。政策层面，《农业面源污染治理与监督指导实施方案》将缓控释肥、秸秆还田装备纳入农机补贴，推动“种养循环”市场化机制，破解畜禽粪污资源化利用“最后一公里”难题。

农业面源污染的监测与综合防治是实现农业高质量可持续发展的核心抓手。从生态维度看，精准监测可量化污染负荷，避免水体富营养化与土壤退化；从经济视角，智能技术降低治理成本，而绿色补贴政策激发农户参与动力。更深远的意义在于，其通过平衡粮食安全与生态安全，将传统污染物转化为资源，重塑“山水林田湖草沙”生命共同体，为全球农业面源污染治理贡献中国方案。
`;
