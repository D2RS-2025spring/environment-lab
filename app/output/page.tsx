"use client";
import { BreadcrumbBar } from "@/components/bread-crumb";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Markdown from "react-markdown";
import { useMemo } from "react";

const breadcrumbItems = [
  { title: "网站首页", href: "/" },
  { title: "研究成果", href: "/output" },
];

const markdown = `
## 科学研究

1. 湖北省农业农村厅， 湖北省2024年地膜污染使用回收长效机制构建项目， 2024-10至2025-10，在研，主持。

2. 湖北省农业农村厅，湖北省2024年地膜科学使用回收项目技术支撑，2024-06至2025-06， 在研，主持。

3. 农业农村部科学技术司，湖北省水稻、玉米等农产品产地土壤环境、保护地、露地蔬菜等农田地膜残留监测采样、制样、流转与成果集成等，2024-08至2024-12，在研，主持。

4. 湖北省农业科学院农业质量标准与检测技术研究所，湖北省农产品重金属检测采样技术服务，2024-08至2024-12，在研，主持。

5. 十堰市茅箭区农业农村局，湖北省十堰市茅箭区茅塔河农业面源污染综合治理示范项目可行性研究报告，2024-08至2024-12，在研，主持。

6. 湖北省农业生态环境保护站，水稻覆膜种植关键技术研发及应用效果评价服务项目，2024-08至2025-12，在研，主持。

7. 十堰市农业生态环境保护站，十堰市生态低碳农业技术开发，2024-05至2025-12，在研，主持。

8. 湖北省农业农村厅，湖北省2023年地膜科学使用回收项目技术支撑，2023-10至2024-06，在研，主持。

9. 十堰市农业农村局，十堰市绿色食品原料标准化生产基地创建技术支撑，75万，2023-12至2025-12，在研，主持。

10. 鹤峰县农业农村局，鹤峰县重点流域农业面源污染治理项目勘测设计及科技支撑，2023-06至2024-12，在研，主持。

11. 湖北省农业农村厅， 湖北省2023年地膜污染使用回收长效机制构建项目， 2023-10至2024-10，在研，主持。

12. 中电建华东勘察设计院， 载铁生物炭基潮汐流人工湿地深度净化污水厂尾水技术的开发与应用项目关键技术研发科研合作，2023-05月至2024-09，在研，主持。

13. 江西省水利科学院， 重点项目， 202224ZDKT17。 江西省典型水库净化带截污净水技术研究与示范。 2022-01至2024-12，主持。

14. 江西省水利科学院， 推广课题， 202223TGKT03。 新型生态草沟技术在水土流失面源污染防治中的推广应用，主持。

15. 华中农业大学，基地建设项目，2662021ZH004，农业面源污染防控综合治理，2021-06至2022-07，主持。

16. 嘉鱼县农业农村局，嘉鱼县重点流域农业面源污染治理项目勘测设计及科技支撑，2021-06至2023-06，主持。

17. 广西省自然科学基金，2020JJA150019，富营养化海湾再悬浮沉积物中有机磷的组成特征及其矿化机制研究，2021-01至2022-12，主持。

18. 竹溪县农业农村局，竹溪县典型流域农业面源污染综合治理试点项目技术指导，2020-10至2022-12，主持。

19. 十堰市农业生态环境保护站，竹山县典型流域农业面源污染综合治理试点项目技术指导，2020-05至2021-12，主持。

20. 华中农业大学优秀人才培育项目，2662020ZHPY002，颗粒态有机磷的矿化机制与环境效应，2020-05至2022-04，主持。

21. 国家自然科学基金面上项目，41877461，浅水湖泊颗粒有机物光解驱动磷释放的机制研究，2019-01至2022-12，主持。

22. 重点研发计划项目子课题，2018YFD0800600，耕作、灌溉等田块内氮磷、农药增效减损农艺技术研发，2018-01至2020-12，主持。

23. 重点研发计划项目子课题，2017YFD0800102-04，土壤矿物、矿物-有机质复合体对氮磷转化的影响，2017-07至2020-12，主持。

24. 华中农业大学资源与环境学院人才培育项目，颗粒有机物的地化特征与环境效应，2018-01至2018-12，主持。

25. 华中农业大学优秀人才培育项目，2662016PY061，浅水富营养化湖泊沉积物再悬浮过程中磷光化学释放的动力学机制，2016/01-2018/12，主持。

26. 霍英东教育基金会，青年教师基金，151078，沉积物再悬浮过程中铁及其配合物驱动磷释放的光化学机制研究，2016-03至2019-03，主持。

27. 国家自然科学基金青年基金，41401547，富营养化湖泊中光敏物质驱动有机磷转化的机理研究，2015-01至2017-12，主持。

28. 中国博士后科学基金会，特别资助，2015T80855，再悬浮情景下Fe3+诱导磷释放的光化学机制研究，2015-01至2017-12，主持。

29. 湖北省自然科学基金面上项目，2014CFB283，浅水湖泊有机磷向生物可利用性磷转化的光化学机制研究，2015-01至2016-12，主持。

30. 淡水国家重点实验室开放课题，2015FB04，磷酸盐氧同位素表征的湖泊有机磷光化学分解机制研究，2015-01至2015-12，主持。

31. 中国博士后科学基金会，面上项目（一等资助），2013M540619，湖泊硝态氮调控有机磷转化的光化学机制研究，2013-08至2015-08，主持。

32. 华中农业大学，自主创新基金，2013QC044，TiO2光催化与菹草植物修复协同消减植酸的机制研究，2012-01至2014-12，主持。

33. 环保部，水体污染控制与治理科技重大专项子课题，2012ZX07104-001，三峡库区水生态风险阈值及其安全保障方案研究，2012-01至2015-12，主持。



获奖情况

1. 2021年 神农中华农业科技奖 三等奖

2. 2021年 校教学成果奖 一等奖（排名2）

3. 2020年 湖北省科学技术进步奖 二等奖

4. 2020年 资源与环境学院青年教师讲课竞赛 三等奖

5. 2020年 全英文课程建设项目“环境工程专业导论”结题优秀

6. 2020年 资源与环境学院优秀班主任

7. 2019年 华中农业大学本科生创新论文（设计） 指导奖

8. 2018年 华中农业大学优秀专业学位硕士学位论文 指导奖

9. 2017年 华中农业大学本科生创新论文（设计） 指导奖

10. 2017年 资源与环境学院毕业生就业工作“先进个人”。

11. 2017年 国家级大学生创新训练项目结题优秀奖 指导教师；

12. 2016年 华中农业大学教学质量优秀 三等奖；

13. 2016年 资源与环境学院毕业生就业工作“先进个人”；

14. 2016年 华中农业大学国家级大学生创新训练项目结题优秀奖 指导教师；

15. 2016年 华中农业大学国家级大学生创新创业训练项目“十佳项目”  指导教师；

16. 2015年 华中农业大学教学质量优秀三等奖；

17. 2015年 华中农业大学第12届青年教师讲课竞赛院二等奖、校优胜奖；

18. 2014年 华中农业大学教学质量优秀三等奖；

19. 2014年 华中农业大学优秀班主任奖；

20. 2013年 华中农业大学教学质量优秀三等奖；

21. 2013年 湖北省优秀博士学位论文

22. 2013年 湖北省优秀学士学位论文 指导教师；

23. 2009年 湖北省第十三届自然科学优秀学术论文 二等奖。

## 出版专著

1. 刘广龙。 三峡库区水质与水生态环境分区评价。 科学出版社， 2017。

## 科研论文

1. Minli Guo, Mingxing Yu, Xu Wang, Naidong Xiao, Arnaud Huguet, Yunlin Zhang, Guanglong Liu*. Deciphering the link between particulate organic matter molecular composition and lake eutrophication by FT-ICR MS analysis. Water Research, 2025, 272, 122936.

2. Yongcan Jiang#, Yi Wang#, Yinlong Shao, Dong Yang, Minli Guo, Yu Wen, Hong Tang, Guanglong Liu*. Molecular-scale investigation on the photochemical transformation of dissolved organic matter after immobilization by iron minerals with FT-ICR MS. Environmental Science: Processes & Impacts, 2024, DOI: 10.1039/D4EM00288A.

3. Anqi Hu#, Yongcan Jiang#*, Jiaqi An, Xiaodian Huang, Abdelbaky Hossam Elgarhy, Huafen Cao, Guanglong Liu*. Novel Fe/Ca oxide co-embedded coconut shell biochar for phosphorus recovery from agricultural return flows. RSC Adv., 2024, 14, 27204.

4. Yongcan Jiang#*, Minli Guo#, Yinlong Shao, Yunling Du, Jie Wang, Zekai Huang, Jianfeng Li, Yi Wang, Guanglong Liu*. Molecular characterization on the fractionation of organic phosphorus induced by iron oxide adsorption using ESI-FT-ICR MS. Ecotoxicology and Environmental Safety, 2024, 284, 116910.

5. Mengjie Qu, Xuan Cheng, Qiang Xu, Ziming Zeng, Mingming Zheng, Yunjun Mei, Jianwei Zhao*, Guanglong Liu*. Fate of glyphosate in lakes with varying trophic levels and its modification by root exudates of submerged macrophytes. Journal of Hazardous Materials. 2024, 462, 132757.

6. Jiaqi An, Yongcan Jiang*, Huafen Cao, Ceng Yi, Suxia Li, Mengjie Qu*, Guanglong Liu*. Photodegradation of glyphosate in water and stimulation of by-products on algae growth. Ecotoxicology and Environmental Safety, 263, 2023, 115211.

7. Minli Guo, Xiaolu Li, Yi Wang, Yunlin Zhang, Qinglong Fu, Arnaud Huguet, Guanglong Liu*. New insights into the mechanism of phosphate release during particulate organic matter photodegradation based on optical and molecular signatures. Water Research, 2023, 236, 119954.

8. Abdelbaky Hossam Elgarhy, Belal N. A. Mahran, Guanglong Liu*, Talaat A. Salem, ElSayed ElBastamy ElSayed*, Lubna A. Ibrahim. Comparative study for removal of phosphorus from aqueous solution by natural and activated bentonite. Scientific Reports, 2022, 12, 19433.

9. Zhibang Luo, Wenting Zhang, Yitong Wang, Tianwei Wang, Guanglong Liu*, Wei Huang. Spatial optimization of ecological ditches for non-point source pollutants under urban growth scenarios. Environmental Monitoring and Assessment, 2023, 195, 105.

10. Abdelbaky Hossam Elgarhy, Belal N. A. Mahran, Guanglong Liu*, Talaat A. Salem, ElSayed ElBastamy ElSayed*, Lubna A. Ibrahim. Comparative study for removal of phosphorus from aqueous solution by natural and activated bentonite. Scientific Reports, 2022, 12, 19433.

11. Mengjie Qu, Longtao Wang, Qiang Xu, Jiaqi An, Yunjun Mei*, Guanglong Liu*. Influence of glyphosate and its metabolite aminomethylphosphonic acid on aquatic plants in different ecological niches. Ecotoxicology and Environmental Safety, 2022, 246, 114155. 

12. Jie Wang#, Fengjie Li#, Mi Wang, Abdelbaky Hossam Elgarhy, Guanglong Liu*, Lichao Zhang, Ronggui Hu*. The effect of iron oxide types on the photochemical transformation of organic phosphorus in water. Chemosphere, 2022, 307, 135900.

13. Jie Wang, Yongcan Jiang, Musheng Xu, Cong Han, Lichao Zhang, Guanglong Liu*. Resin-based iron-manganese binary oxide for phosphate selective removal. Environmental Science and Pollution Research, 2022, Doi.org/10.1007/s11356-022-22525-8.

14. Xiaolu Li, Minli Guo, Yi Wang, Guanglong Liu*, Qinglong Fu. Molecular insight into the release of phosphate from dissolved organic phosphorus photo-mineralization in shallow lakes based on FT-ICR MS analysis. Water Research, 2022, 222, 118859.

15. Junkai Gao#, Guanglong Liu#, Xiaowen Li, Mengjuan Tang, Xiuyun Cao, Yiyong Zhou, Chunlei Song*. Organic carbon quantity and composition jointly modulate the differentiation of nitrate reduction pathways in sediments of the Chinese eutrophic lake, Lake Chaohu. Water Research, 2022, 220, 118720.

16. Guanglong Liu*, Cong Han, Minghao Kong, Wael H. M. Abdelraheem, Mallikarjuna N. Nadagouda*, Dionysios D. Dionysiou*. Nanoscale Zero-Valent Iron Confined in Anion Exchange Resins to Enhance Selective Adsorption of Phosphate from Wastewater. ACS ES&T Engineering, 2022, 2, 1454-1464（封面论文）.

17. Yi Wang, Minli Guo, Xiaolu Li, Guanglong Liu*, Yumei Hua, Jianwei Zhao, Arnaud Huguet, Suxia Li. Shifts in microbial communities in shallow lakes depending on trophic states: Feasibility as an evaluation index for eutrophication. Ecological Indicators, 2022, 136, 108691.

18. Mengjie Qu, Yunjun Mei, Guanglong Liu*, Jianwei Zhao, Wei Liu, Suxia Li, Fan Huang, Duanwei Zhu. Transcriptomic profiling of atrazine phytotoxicity and comparative study of atrazine uptake, movement, and metabolism in Potamogeton crispus and Myriophyllum spicatum. Environmental Research, 2021, 194, 110724.

19. Xuguang Li, Abdelbaky Hossam Elgarhy*, Mohamed Elfatih Hassan, Yanbo Chen, Guanglong Liu*, Reham ElKorashey. Removal of inorganic and organic phosphorus compounds from aqueous solution by ferrihydrite decoration onto graphene. Environmental Monitoring and Assessment, 2020, 192: 410.

20. Minli Guo, Xiaolu Li, Chunlei Song, Guanglong Liu*, Yiyong Zhou. Photo-induced phosphate release during sediment resuspension in shallow lakes: A potential positive feedback mechanism of eutrophication. Environmental Pollution, 2020, 258: 113679.

21. Xiaolu Li, Minli Guo, Xiaodi Duan, Jianwei Zhao, Yumei Hua, Yiyong Zhou, Guanglong Liu*, Dionysios D. Dionysiou*. Distribution of organic phosphorus species in sediment profiles of shallow lakes and its effect on photo-release of phosphate during sediment resuspension. Environment International, 2019, 130: 104916.

22. Mohamed Elfatih Hassan*, Guanglong Liu*, Eltigani Osman Musa Omer, Arafat M. Goja, Sadananda Acharya. Silver embedded C-TiO2 exhibits improved photocatalytic properties with potential application in waste water treatment. Arabian Journal of Chemistry, 2019. 12: 1134-1140.

23. Jianwei Zhao, Yongcan Jiang, Minghao Kong, Guanglong Liu*, Dionysios D. Dionysiou*. Fe(III)-oxalate complex mediated phosphate released from diazinon photodegradation: Pathway signatures based on oxygen isotopes. Journal of Hazardous Materials, 2018, 358: 319-326.

24. Xiaolu Li, Yiyong Zhou, Guanglong Liu*, Hongjun Lei*, Duanwei Zhu. Mechanisms of the photochemical release of phosphate from resuspended sediments under solar irradiation. Science of the Total Environment, 2017, 595: 779-786.

25. Guanglong Liu#, Qian Tang#, Yiyong Zhou*, Xiuyun Cao, Jianwei Zhao, Duanwei Zhu. Photo-induced phosphate released from organic phosphorus degradation in deionized and natural water. Photochemical & Photobiological Sciences, 2017, 16: 467-475.

26. Xiaolu Li, Shaobo Yuan, Yiyong Zhou, Guanglong Liu*, Duanwei Zhu. Photodecomposition of Organic Phosphorus in Aquatic Solution under Solar Irradiation with Nitrate: Kinetics and Influencing Water Parameters. Environmental Progress & Sustainable Energy, 2017, 36: 404-411.

27. Guanglong Liu, Wenwen Guo, Shaobo Yuan, Hong Zhu, Tewu Yang, Yiyong Zhou, Duanwei Zhu*. Occurrence and characterization of CaCO3-P coprecipitation on the leaf surface of Potamogeton crispus in water. Environmental Science and Pollution Research, 2016, 23: 23308-23315.

28. Yongcan Jiang, Naixin Kang, Yiyong Zhou, Guanglong Liu*, Duanwei Zhu. The role of Fe(III) on phosphate released during the photo-decomposition of organic phosphorus in deionized and natural waters. Chemosphere, 2016, 164: 208-214.

29. Mohamed Elfatih Hassan, Yanbo Chen, Guanglong Liu*, Duanwei Zhu, Jianbo Cai. Heterogeneous photo-Fenton degradation of methyl orange by Fe2O3/TiO2 nanoparticles under visible light. Journal of Water Process Engineering, 2016, 12: 52-57.

30. Jianbo Cai, Wei Xin, Guanglong Liu*, Die Lin, Duanwei Zhu. Effect of calcination temperature on structural properties and photocatalytic activity of Mn-C-codoped TiO2, Materials Research, 2016, 19: 401-407.

31. Guanglong Liu, Li Gong, Yiyong Zhou*, Duanwei Zhu, Xiuyun Cao, Chunlei Song. NO3-/NO2- photosensitized degradation of phenol under simulated sunlight. Fresenius Environmental Bulletin, 2015, 24: 664-669.

32. Mohamed Elfatih Hassan, Jing Chen, Guanglong Liu*, Duanwei Zhu, Jianbo Cai. Enhanced Photocatalytic Degradation of Methyl Orange Dye under the Daylight Irradiation over CN-TiO2 Modified with OMS-2. Materials. 2014, 7: 8024-8036.

33. Mohamed Elfatih Hassan, Longchao Cong, Guanglong Liu*, Duanwei Zhu, Jianbo Cai. Synthesis and characterization of C-doped TiO2 thin films for visible-light-induced photocatalytic degradation of methyl orange, Applied Surface Science, 2014, 294: 89-94.

34. Guanglong Liu#, Changseok Han#, Miguel Pelaez, Duanwei Zhu, Shuijiao Liao, Vlassis Likodimos, Athanassios G. Kontos, Polycarpos Falaras, Dionysios D. Dionysiou*. Enhanced visible light photocatalytic activity of C-N-codoped TiO2 films for the degradation of microcystin-LR. Journal of Molecular Catalysis A: Chemical, 2013, 373: 58-65.

35. Wei Xin, Duanwei Zhu, Guanglong Liu*, Yumei Hua, Wenbing Zhou. Synthesis and characterization of Mn–C–Codoped TiO2 nanoparticles and photocatalytic degradation of Methyl orange dye under sunlight irradiation, International Journal of Photoenergy, 2012, 767905.

36. Guanglong Liu, Shuijiao Liao, Duanwei Zhu*, Yumei Hua, Wenbing Zhou. Innovative photocatalytic degradation of polyethylene film with boron-doped cryptomelane under UV and visible light irradiation. Chemical Engineering Journal. 2012, 213: 286-294.

37. Guanglong Liu#, Changseok Han#, Miguel Pelaez, Duanwei Zhu, Shuijiao Liao, Vlassis Likodimos, Nikolaos Ioannidis, Athanassios G. Kontos, Polycarpos Falaras, Patrick S.M. Dunlop, Anthony J. Byrne, Dionysios D. Dionysiou*. Synthesis, characterization and photocatalytic evaluation of visible light-activated C-doped TiO2 nanoparticles, Nanotechnology. 2012, 23: 294003.

38. Guanglong Liu, Shuijiao Liao, Duanwei Zhu*, Linghua Liu, Dongsheng Cheng, Huaidong Zhou. Photodegradation of aniline by goethite doped with boron under ultraviolet and visible light irradiation, Materials Research Bulletin. 2011, 13: 88-94.

39. Guanglong Liu, Shuijiao Liao, Duanwei Zhu*, Jingzhen Cui, Wenbing Zhou. Solid-phase photocatalytic degradation of polyethylene film with manganese oxide, Solid State Science. 2011, 46: 1290-1295.

40. Guanglong Liu, Duanwei Zhu*, Wenbing Zhou, Shuijiao Liao, Jingzhen Cui, Kang Wu, David Hamilton. Solid-phase photocatalytic degradation of polystyrene plastic with goethite modified by boron under UV - vis light irradiation. Applied Surface Science. 2010, 256: 2546-2551.

41. Guanglong Liu, Duanwei Zhu, Shuijiao Liao*, Liying Ren, Jingzhen Cui, Wenbing Zhou. Solid-phase photocatalytic degradation of polyethylene plastic with goethite under UV-light irradiation. Journal of Hazardous Materials, 2009,  172: 1424-1429.

42. 瞿梦洁, 韩玉成, 万智鹏, 谭艳, 安珈奇, 梅运军, 刘广龙*. 稻虾共作水域沉积物有机磷农药残留特征及其对磷循环驱动机制.农业环境科学学报, 2022, 1-12.

43. 刘海霞, 李素霞*, 刘广龙*, 黄凯旋, 杨斌, 苏静君, 王杰, 张晋谊, 侯景耀. 基于复合指纹图谱和贝叶斯模型的茅尾海悬浮颗粒物源解析.中国环境科学, 2022, 42: 2844-2851.

44. 刘广龙, 李涛, 薛利红, 樊丹, 戴志刚, 甘晓东, 张凯, 周宇翔, 胡荣桂*. “产业治污”模式削减丘陵区农业面源氮排放, 农业环境科学学报, 2021, 40: 1963-1970.（封面论文）

45. 刘广龙, 石巍方, 朱端卫*, 黄庆超, 王雨春, 周怀东. 三峡水库不同水位运行下大宁河水动力过程模拟. 水资源与水工程学报, 2017, 28: 150-155.

46. 黄庆超,石巍方,刘广龙*,王雨春,周怀东,朱端卫. 基于Delft3D的三峡水库不同工况下香溪河水动力水质状况模拟. 水资源与水工程学报, 2017, 28: 33-39.

47. 刘广龙, 朱端卫, 周易勇*, 曹秀云, 宋春雷, 华玉妹, 赵建伟. 硝酸根对有机磷光解释放磷酸根的影响, 中国环境科学, 2016, 36: 3657-3664.

48. 蒋永参, 彭云霄, 刘广龙*, 周易勇, 朱端卫. 湖泊水体中铁(III)-草酸络合物驱动有机磷光解释放磷酸根. 环境科学, 2017, 38: 563-571.

49. 陈广, 刘广龙*, 朱端卫, 王雨春, 周怀东. 城镇化视角下三峡库区重庆段水生态安全评价.长江流域资源与环境, 2015, 24: 213-220.

50. 黄庆超, 刘广龙*, 朱端卫, 王雨春, 周怀东. 不同水位运行下三峡库区干流水质变化特征. 人民长江, 2015, 46: 132-136.

51. 陈广, 刘广龙*, 朱端卫, 王雨春, 周怀东. DPSIR模型在流域生态安全评估中的研究. 环境科学与技术, 2014, 6, 464-470.

52. 刘广龙, 廖水姣, 朱端卫*. (羟基)氧化铁催化降解有机污染物的半导体反应学说初论. 化学通报, 2013, 76: 217-223.



## 授权专利

1. 蒋永参, 邵银龙, 刘广龙, 杜运领, 王贤彪, 胡金龙, 华玉妹. 副蕈状芽孢杆菌促进厌氧铁氨氧化过程的污水处理方法. ZL202311054031.0, 2024.

2. 蒋永参, 邵银龙, 刘广龙, 杜运领, 杨东, 郦建锋, 胡安淇. 应用负载铁/钙氧化物生物炭的污水处理方法. ZL202311046091.8, 2024.

3. 蒋永参, 邵银龙, 刘广龙, 温宇, 马景胜, 胡安淇. 用于农业面源污染防治的生态拦截沟渠. ZL202321997718.3, 2024.

4. 白羽菲, 刘广龙, 李小娜, 胡迦迪. 一种含磷废水净化装置. ZL202220769416.X. 2022

5. 安徽中邦济国环保科技有限公司, 刘广龙. 农业面源污染智慧监管平台, 2022SR0815222.

6. 张利超, 贺敏华, 邓熔, 刘广龙, 刘再荣, 李军, 朱青平, 宋月君, 丁根棚, 代晨薇, 张文博. 一种用于水土保持监测的泥沙含量取样测定装置. 20211231, CN202023309314.X.

7. 田欣, 邴海健, 祝贺, 吴艳宏, 刘广龙, 王昌全, 林超文. 用于防治农田面源污染的新型生态沟渠系统. ZL202120592620.4, 2021.

8. 田欣, 邴海健, 祝贺, 吴艳宏, 刘广龙, 王昌全. 可漂浮生态种植组件及可漂浮生态种植系统. ZL202023037182.X, 20210907.

9. 刘广龙, 朱端卫, 胡荣桂, 高雪松, 赵建伟, 华玉妹, 周文兵, 李旭光, D．D．狄奥尼索, M．N．纳达古达, 任帮兴, W．阿卜杜勒拉希姆. 一种复合除磷吸附剂及水体除磷方法. ZL201810862228.X, 2021.

10. Guanglong Liu, Xuguang Li, Haijian Bing, Changquan Wang, Zhenghua Zhe, Tao Li, Renkai Yan, Jianwei Zhao, Yumei Hua, Dionysios (Dion) D. Dionysiou, Mallikarjuna N. Nadagouda, Bangxing Ren, Wael Abdelraheem. Preparation method and application for a resin-based iron oxide-containing composite phosphate removal adsorbent. US 17/007, 198. 美国发明专利.

11. 刘广龙, 李旭光, 邴海健, 王昌全, 戢正华, 李涛, 闫仁凯, 赵建伟, 华玉妹. 一种树脂基负载铁氧化物复合除磷吸附剂的制备方法及其应用. ZL201911162590.7, 2020-09-15.

12. 刘广龙, 朱端卫, 胡荣桂, 高雪松, 赵建伟, 华玉妹, 周文兵, 李旭光. 一种复合除磷吸附剂及水体除磷方法. CN108993444A, 2018.

13. 刘广龙, 朱端卫, 胡荣桂, 赵建伟, 林杉, 蔡建波, 华玉妹, 陈燕波. 一种水铁矿-石墨烯复合材料及其应用. ZL101610203352.6, 2018-08-31.

14. 刘广龙, 朱端卫, 赵建伟, 周文兵, 蔡建波, 华玉妹, 万小琼. 一种负载金属Ag的C掺杂TiO2纳米颗粒可见光催化剂及其应用. ZL201510222662.8, 2017-10-10.

15. 刘广龙, 朱端卫, 蔡建波, 周文兵, 赵建伟, 华玉妹, 龚荔. 玻璃片载体上碳掺杂TiO2可见光响应催化膜及其制备方法. ZL201310477166.8, 2015-03-04.

16. 华玉妹, 杨栋, 赵建伟, 刘广龙, 朱端卫. 一种赤泥复合材料及其制备方法和应用. ZL 201610621979.3, 2019-06-11.

17. 华玉妹, 张云,陈航, 赵建伟, 刘广龙, 朱端卫. 一种河岸带减污方法. ZL 201610200331.9, 2018-12-28.

18. 赵建伟, 王龙涛, 单保庆, 朱端卫, 张洪, 刘广龙, 华玉妹, 周文兵, 万小琼,蔡建波, 肖乃东. 生活污水集约式深度去污及脱氮处理系统与方法. ZL201510488808.3, 2017-10-31.

19. 朱端卫, 李震宇, 肖乃东, 周洋, 肖雪, 周文兵, 蔡建波, 赵建伟, 万小琼, 刘广龙, 华玉妹. 一株分解酸性土壤难溶性磷酸铝的微紫青霉菌及其应用. ZL 201610051401.9, 2019-04-26.

20. 周文兵, 刘雪琴, 朱端卫, 万小琼, 赵建伟, 华玉妹, 刘广龙. 一种凤眼莲纤维素黄原酸钙盐的制备方法及应用. ZL 2014102131407, 2017-01-04.

21. 朱端卫, 廖水姣, 刘广龙, 任丽英, 崔京珍, 周文兵, 耿明建, 赵建伟, 华玉妹, 杨特武. 一种紫外光可降解聚乙烯或聚丙烯膜的制备方法. ZL200810197235.9, 2011-04-20.

`;

export default function Output() {
  const toc = useMemo(() => {
    const lines = markdown.split("\n");
    return lines
      .filter((line) => line.startsWith("#"))
      .map((line) => ({
        title: line.replace(/^#+\s+/, ""),
        level: line.match(/^#+/)?.[0].length || 0,
        href: `#${line
          .replace(/^#+\s+/, "")
          .toLowerCase()
          .replace(/\s+/g, "-")}`,
      }));
  }, []);

  return (
    <div>
      <BreadcrumbBar items={breadcrumbItems} />
      <div className="flex gap-20 mt-10">
        {/* 目录侧边栏 */}
        <motion.div
          className="w-50 flex-shrink-0"
          initial={{ opacity: 0, x: -100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="fixed w-50 p-2">
            <nav className="grid grid-cols-1 gap-2">
              {toc.map((item, index) => (
                <Button variant="ghost" key={index}>
                  <a key={index} href={item.href} className="block text-lg">
                    {item.title}
                  </a>
                </Button>
              ))}
            </nav>
          </div>
        </motion.div>
        {/* 主要内容区 */}
        <motion.div
          className="flex-grow prose dark:prose-invert"
          initial={{ opacity: 0, x: -100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Markdown
            components={{
              h1: ({ children }) => (
                <h1
                  id={children?.toString().toLowerCase().replace(/\s+/g, "-")}
                >
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2
                  id={children?.toString().toLowerCase().replace(/\s+/g, "-")}
                >
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3
                  id={children?.toString().toLowerCase().replace(/\s+/g, "-")}
                >
                  {children}
                </h3>
              ),
            }}
          >
            {markdown}
          </Markdown>
        </motion.div>
      </div>
    </div>
  );
}
