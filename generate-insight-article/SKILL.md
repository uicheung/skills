---
name: generate-insight-article
description: >
  Generate structured, deeply-researched Chinese long-form articles
  spanning AI前沿、科技趋势、太空探索、思想与哲学、健康科学、国际政治、行情/市场分析.
  The agent produces insight-driven articles based on user-provided topics,
  always grounded in the latest verifiable news and developments.
  Writing style defaults to immersive narrative with philosophical depth,
  suitable for a 20-30 minute deep reading experience.
---

# Generate Insight Article

本技能旨在帮助用户产出**有深度、有温度、有信息增量**的长篇中文洞察文章。

核心原则：**事实有据、思考有深度、叙事有温度、观点可沉淀**。

## 支持的领域

| 领域 | 定位 | 说明 |
|---|---|---|
| AI 前沿 | 行业趋势与影响分析 | 不涉及编程教程，聚焦行业动态、技术突破的社会影响、伦理争议 |
| 科技趋势 | 技术变革的人文视角 | 关注硬件、生物技术、量子计算等领域的重大突破及其深远影响 |
| 太空探索 | 人类文明的星际叙事 | 聚焦最新航天任务、深空发现、商业航天进展及文明意义 |
| 思想与哲学 | 当代议题的哲学审视 | 从哲学框架重新审视当下正在发生的一切，连接古今思想脉络 |
| 健康科学 | 生命科学与医学前沿 | 关注医学突破、药物研发、公共卫生趋势及健康生活方式研究 |
| 国际政治 | 全球格局与地缘博弈 | 聚焦国际关系、大国博弈、区域冲突及全球治理议题 |
| 行情/市场分析 | 金融市场与行业动态 | 关注股市、债市、外汇、大宗商品及新兴市场趋势与投资逻辑 |

## 流程触发场景

### 触发条件
1. 用户明确提出想写一篇洞察类/思想类文章
2. 用户与 Agent 讨论某个前沿话题时，对话自然延伸到需要系统性梳理的程度
3. 用户提供了某个感兴趣的话题方向，希望 Agent 协助完成一篇文章

### 初始引导话术
为了帮你撰写一篇有深度的洞察文章，我们需要经历四个阶段：**背景对齐 → 信息搜索验证 → 大纲草拟 → 内容写作**。我们先从第一阶段开始。

---

## 第一阶段：背景信息收集

*目标*：对齐 Agent 与用户之间的信息差，明确文章的"灵魂"与"边界"。

### 初始提问
1. 本篇文章的**核心主题**是什么？用一句话概括你想要探讨的问题。
2. 你希望读者读完之后，产生什么样的**思考或感受**？（例如：感到震撼、开始反思、获得全新视角、改变某种固有认知……）
3. 你心中是否有**必须出现的核心观点、论据或金句**？
4. 是否有特定的**叙事风格**偏好？（例如：纪实叙事、散文随笔、对话体、思想实验……）
5. 是否有特定的**排版或格式要求**？
6. 还有其他约束、背景信息或你已关注的**参考资料**需要补充吗？

### 阶段结束条件
当 Agent 能基于已收集到的信息，主动提出关于文章立场的追问（例如"你在这个议题上更倾向于乐观还是审慎？"），且用户确认信息充分，或用户主动要求结束时，即判定此阶段结束。

### 阶段过渡话术
> 我已经对你的需求有了清晰的理解。接下来，在我们正式规划文章大纲之前，**我需要先去搜索和验证相关的最新信息**，确保文章建立在真实、时效的资讯基础之上。我们进入第二阶段。

---

## 第二阶段：信息搜索与验证

*目标*：通过多源信息检索，确保文章内容基于最新、可信的事实，而非 Agent 的训练数据截止日期前的旧信息。

### 核心原则
1. **绝不凭记忆编造**——所有涉及"最新""近期""刚刚"的表述，必须有可检索到的信源支撑
2. **多源交叉验证**——同一事实至少从 2 个独立来源确认
3. **标注信源时效**——在搜索结果中注明信息发布时间，判断是否为"最新"
4. **区分事实与观点**——事实部分必须可溯源，观点部分需标明是谁的观点

### 搜索策略

#### AI 前沿领域推荐信源
| 信源 | 语言 | 说明 |
|---|---|---|
| https://openai.com/blog | EN | OpenAI 官方博客，模型发布与研究方向 |
| https://www.anthropic.com/news | EN | Anthropic 官方新闻 |
| https://deepmind.google/technologies/gemini/ | EN | Google DeepMind 最新动态 |
| https://www.meta.ai/resources/models | EN | Meta AI 开源模型动态 |
| https://www.dbreunig.com/ai-latest | EN | AI 领域每日新闻聚合 |
| https://www.artificialintelligence-news.com | EN | AI News 日报 |
| https://arxiv.org/list/cs.AI/recent | EN | arXiv AI 分类最新论文（每日更新） |
| https://jiqizhixin.com | CN | 机器之心，国内最活跃的 AI 媒体 |
| https://www.36kr.com/information/AI/ | CN | 36氪 AI 专栏 |
| https://x.com/OpenAI , @AnthropicAI, @GoogleDeepMind | EN | 官方 X 账号，获取一手声明 |
| https://www.theverge.com/ai-artificial-intelligence | EN | The Verge AI 版块 |
| https://www.technologyreview.com/topic/artificial-intelligence/ | EN | MIT Technology Review AI 专题 |

#### 科技趋势领域推荐信源
| 信源 | 语言 | 说明 |
|---|---|---|
| https://www.technologyreview.com | EN | MIT Technology Review |
| https://www.wired.com | EN | Wired 科技文化杂志 |
| https://arstechnica.com | EN | Ars Technica 深度科技报道 |
| https://www.theverge.com | EN | The Verge 科技媒体 |
| https://www.nature.com/subjects/technology | EN | Nature 科技板块 |
| https://www.36kr.com | CN | 36氪 |
| https://www.ifanr.com | CN | 爱范儿 |
| https://sspai.com | CN | 少数派 |
| https://www.geekpark.net | CN | 极客公园 |

#### 太空探索领域推荐信源
| 信源 | 语言 | 说明 |
|---|---|---|
| https://www.nasa.gov/news/all-news/ | EN | NASA 官方新闻 |
| https://www.spacex.com/news | EN | SpaceX 官方动态 |
| https://www.esa.int/News | EN | 欧洲航天局新闻 |
| https://www.cmsa.gov.cn | CN | 中国载人航天工程办公室 |
| https://spaceflightnow.com | EN | Spaceflight Now 航天新闻 |
| https://www.universetoday.com | EN | Universe Today |
| https://arstechnica.com/science/ | EN | Ars Technica 科学版块 |
| https://www.nature.com/subjects/astronomy-and-astrophysics | EN | Nature 天文与天体物理 |
| https://www.planetary.org | EN | 行星协会 |

#### 思想与哲学领域推荐信源
| 信源 | 语言 | 说明 |
|---|---|---|
| https://aeon.co | EN | Aeon，深度思想长文 |
| https://plato.stanford.edu | EN | 斯坦福哲学百科 |
| https://www.philosophynow.org | EN | Philosophy Now 杂志 |
| https://nautil.us | EN | Nautilus 科学与思想 |
| https://www.brainpickings.org | EN | Maria Popova 的思想博客 |
| https://3quarksdaily.com | EN | 3 Quarks Daily 思想聚合 |
| https://www.thepublicdiscourse.com | EN | 公共思想讨论 |
| https://dingjingzhou.com | CN | 丁教舟（哲学普及） |
| https://www.thepaper.cn | CN | 澎湃新闻·思想市场 |

#### 健康科学领域推荐信源
| 信源 | 语言 | 说明 |
|---|---|---|
| https://www.nejm.org | EN | 新英格兰医学期刊 |
| https://www.thelancet.com | EN | The Lancet 柳叶刀 |
| https://www.nature.com/subjects/biological-sciences | EN | Nature 生物科学 |
| https://www.cell.com | EN | Cell 细胞期刊 |
| https://www.who.int/news | EN | WHO 世界卫生组织新闻 |
| https://www.cdc.gov | EN | CDC 美国疾控中心 |
| https://www.sciencedirect.com | EN | ScienceDirect 医学研究 |
| https://www.cn-healthcare.com | CN | 健康界 |
| https://www.yicai.com | CN | 第一财经·健康 |
| https://www.thepaper.cn/滚动 | CN | 澎湃新闻·科技 |

#### 国际政治领域推荐信源
| 信源 | 语言 | 说明 |
|---|---|---|
| https://www.foreignaffairs.com | EN | Foreign Affairs 外交事务 |
| https://www.brookings.edu | EN | Brookings Institution 布鲁金斯学会 |
| https://www.cfr.org | EN | Council on Foreign Relations 外交关系协会 |
| https://www.rits | EN | RAND Corporation 兰德公司 |
| https://www.theatlantic.com/international | EN | The Atlantic 大西洋月刊国际版 |
| https://www.economist.com/international | EN | The Economist 国际版 |
| https://www.guancha.cn | CN | 观察者网 |
| https://www.guancha.cn/military/ | CN | 观察者网·军事频道 |
| https://www.xinhuanet.com/world | CN | 新华网·国际 |
| https://www.cctv.com/military | CN | 央视网·军事 |

#### 行情/市场分析领域推荐信源
| 信源 | 语言 | 说明 |
|---|---|---|
| https://www.bloomberg.com/markets | EN | Bloomberg Markets |
| https://www.wsj.com/market-data | EN | WSJ Market Data |
| https://www.ft.com/markets | EN | Financial Times Markets |
| https://www.reuters.com/markets | EN | Reuters Markets |
| https://www.cnbc.com/markets | EN | CNBC Markets |
| https://finance.yahoo.com | EN | Yahoo Finance |
| https://www.eastmoney.com | CN | 东方财富网 |
| https://www.cls.cn/market | CN | 财联社·市场 |
| https://www.jiemian.com | CN | 界面新闻·财经 |
| https://xueqiu.com | CN | 雪球财经 |

### 搜索执行规范
1. **先广后深**：首先用 3-5 个不同信源进行广泛搜索，获取该话题的全景概览
2. **标注日期**：每条检索结果必须注明发布日期，Agent 据此判断时效性
3. **提取关键事实**：将搜索到的事实整理为结构化摘要，包含：事件、时间、来源、可信度
4. **识别争议点**：标注不同信源对同一事件的描述差异，这往往是文章深度的切入点
5. **形成信息摘要报告**：在进入下一阶段前，向用户展示搜索结果摘要，确认信息准确

### 搜索结果呈现模板

```markdown
## 信息搜索摘要
**话题：**[主题]

### 已确认的事实（2+ 信源交叉验证）
| 事实 | 时间 | 信源 | 可信度 |
|---|---|---|---|
| … | 2025-xx-xx | 来源A, 来源B | 高 |

### 单一信源信息（需进一步验证）
| 信息 | 时间 | 信源 | 备注 |
|---|---|---|---|

### 存在争议的观点
| 争议点 | 观点A | 观点B |
|---|---|---|

### 信息缺口
- 尚未找到关于 XXX 的权威信源
```

### 阶段结束条件
当 Agent 完成信息搜索并向用户呈现摘要报告，用户确认信息充分且准确后，即判定此阶段结束。

### 阶段过渡话术
> 信息搜索和验证已完成，我们对这个话题的最新进展有了清晰的把握。现在让我基于这些真实信息，来规划文章的大纲结构。进入第三阶段。

---

## 第三阶段：文章大纲草拟

*目标*：通过头脑风暴，将信息与思考融合为有机的文章骨架。

### 大纲规划原则
1. **叙事弧线优先**：大纲不是知识点列表，而是故事线——有起承转合、有悬念、有高潮
2. **事实与思辨交织**：每个"事实章节"后紧跟对应的"思辨章节"，避免堆砌资讯或空谈哲学
3. **至少 3-5 个大纲方向**，每个方向体现不同的切入角度或叙事策略
4. **用户需求为锚点**：用户在第一阶段提出的核心观点和必须出现的内容，必须在大纲中有明确位置

### 大纲方向示例（以"AI"话题为例）
方向 A：时间线叙事 —— 以最新事件为锚点，倒推历史脉络，展望未来
方向 B：问题驱动式 —— 从一个尖锐的提问出发，用事实和思考层层剥开
方向 C：多视角碰撞式 —— 展示不同立场（乐观派/审慎派/哲学家/工程师）的观点交锋
方向 D：思想实验式 —— 设定一个极端场景，在推演中自然引入最新现实
方向 E：个人叙事式 —— 以"我"的观察和体验为线索，串联事实与思考


### 大纲呈现模板

```markdown
## 大纲方向 [编号]：[一句话概括]
- **开篇引入：**[简要描述如何切入，用什么场景或问题抓住读者]
- **第一部分 [标题]：**[内容概括，注明此部分使用哪些搜索到的事实]
- **第二部分 [标题]：**[内容概括]
- **第三部分 [标题]：**[内容概括，注明此部分进入思辨层面]
- **第四部分 [标题]：**[内容概括]
- **结尾回响：**[简要描述如何收束，留下什么余味]
- **预估字数：**约 XXXX 字
- **叙事风格：**[风格描述]
- **目标读者感受：**[描述]
```


### 用户必须展示的内容规划
若用户在第一阶段提出了必须出现的观点、金句或素材，需在每个大纲方向中标明其出现位置。

### 阶段结束条件
Agent 向用户展示 3-5 个大纲方向，用户选择其一或提出融合修改意见，直至用户确认最终大纲。大纲需写入本地文件。

### 阶段过渡话术
> 大纲已确认。接下来我们进入最后的写作阶段，我将逐段完成文章内容，并在过程中与你协作打磨。

---

## 第四阶段：文章内容写作

*目标*：分段完成文章正文，在保持深度的同时确保叙事的沉浸感和可读性。

### 步骤一：确认文笔风格
向用户确认偏好的写作风格，或给出风格选项：

| 风格 | 特征 | 适用场景 |
|---|---|---|
| **沉浸叙事** | 场景化开篇，以故事推进，节奏从容 | 科技事件报道、太空探索 |
| **思辨散文** | 旁征博引，语言有文学质感，允许抒情 | 哲学思考、文明反思 |
| **冷静分析** | 语言克制，逻辑严密，以论证取胜 | AI 伦理分析、技术趋势判断 |
| **对话体** | 设定虚拟对话者，在问答中推进 | 争议性话题、思想实验 |
| **混合风格** | 根据章节内容灵活切换以上风格 | 长篇深度文章 |

若用户无特殊要求，默认采用**混合风格**：开篇用沉浸叙事引入，中间根据内容切换冷静分析与思辨散文，结尾回到文学质感收束。

### 步骤二：遵循文章编写规范

用户可附加规范，以下为内置规范：

#### 固定文章头格式

```markdown
| 主题 | <文章标题> |
|---|---|
| 领域 | AI前沿 / 科技趋势 / 太空探索 / 思想与哲学 / 健康科学 / 国际政治 / 行情/市场分析 |
| 导读 | <用两三句话概括文章核心问题与阅读价值，让读者决定是否深入阅读> |
| 写作日期 | <YYYY-MM-DD> |
```


#### 参考资料标注

文章末尾必须附上完整的参考资料列表：

```markdown
## 参考资料

### 事实信源
- [来源标题] —— 发布日期：YYYY-MM-DD
- [来源标题] —— 发布日期：YYYY-MM-DD

### 思想参考
- [书籍/论文/文章标题]，作者，出版年份
- [书籍/论文/文章标题]，作者，出版年份

### 延伸阅读
- [推荐阅读标题]
```

#### 格式与风格规范
1. **全文中文**，引用的外文术语首次出现时附英文原文
2. 不使用 emoji 和颜文字（如 ✓ ✗ 等），不使用过度网络化的表达
3. 文章中**引用的事实必须可溯源**——每个重大事实在文中或文末有对应信源
4. 不应存在不实内容或过时信息——所有"最新""刚刚"等表述必须经第二阶段验证
5. 章节间行文逻辑自洽，不矛盾、不割裂
6. **章节标题简洁有力**，应是内容的概括或题引，禁止使用"开篇""结尾""总结"等元语言
7. 允许使用 mermaid 图表、表格等可视化方式辅助表达
8. 文章总体字数在 **8000–15000 汉字**，适配 20–30 分钟深度阅读
9. 不得泄露任何未公开的敏感信息或商业机密

#### 去 AI 味规范
1. **严禁八股升华句式**：不得出现"不是因为……而是……"、"值得被记录/铭记"、"真实/虚幻"、"这就是生活/成长的本质"等强行拔高或说教式表达
2. **取消独立结尾段落**：事情讲完、细节抛出后直接停笔留白，不要帮读者总结中心思想
3. **Show, don't tell**：遵守"展示，不要告知"原则——不喊口号，多写具体的动作、对话、环境细节，让读者自己感受
4. **口语化语气**：行文像在微信上跟朋友随口讲一件刚发生的事，自然流畅，不带播音腔或新闻联播腔

#### 开篇规范
文章开头必须是一个**能让人停下来的场景、故事或提问**，不允许以"本文将探讨……""随着……的发展"这类模板化句式开头。

#### 结尾规范
文章结尾应当**有余味**——可以是一个未回答的问题、一个让人深思的意象、或者一个开放性的邀请，不允许以"总之""综上所述"等总结性词语收束。

### 步骤三：逐段输出与迭代优化

1. **按大纲顺序逐段输出**，每段输出后暂停，等待用户反馈
2. 使用命令行工具（如 `wc -m`）**核实总体字数是否达标**
3. **迭代修改时禁止重新粘贴整篇文章**，仅通过文本替换功能完成局部修改
4. 每段输出后主动询问：
   > 这一段你觉得如何？有没有需要调整的地方——节奏、深度、用词、或是信息的准确性？

### 质量自检清单（在全文完成后执行）

在向用户确认满意之前，Agent 需进行以下自检：

```markdown
## 自检报告

### 事实核查
- [ ] 文中所有"最新""近期"等时效性表述均有信源支撑
- [ ] 无凭空编造的事件、数据或引言
- [ ] 不同信源的交叉验证已完成

### 深度检验
- [ ] 文章不仅仅是资讯的堆砌，有独立的思考和判断
- [ ] 至少存在一个让读者"停下来想一想"的段落
- [ ] 事实与思辨的比例均衡（建议 40:60 至 50:50）

### 叙事质量
- [ ] 开篇能抓住注意力
- [ ] 段落之间有自然的过渡，不跳跃
- [ ] 结尾有余味，给人思考空间
- [ ] 全文无模板化表达和空洞的修辞

### 格式规范
- [ ] 文章头格式完整
- [ ] 参考资料列表完整且格式正确
- [ ] 字数在目标范围内
- [ ] 无 emoji、无元语言标题
```

### 阶段结束条件
当用户对所有章节内容满意，且 Agent 完成质量自检清单后，判定此阶段结束。

### 结束话术
> 文章已完成，存储路径为：`[文件路径]`
>
> 全文约 XXXX 字，包含 X 个主要章节。如果你后续有新的想法或发现新的信息需要补充，随时可以在此基础上继续迭代。

---

## 附录：领域交叉写作指南

当文章涉及多个领域交叉时（例如"AI × 哲学""太空探索 × 思想"），遵循以下原则：

1. **以一个领域为主轴，另一个为透镜**——例如以 AI 最新事件为主轴，用哲学框架作为分析透镜
2. **避免两头都浅**——宁可在一个领域深挖、另一个作为点缀，也不要面面俱到却点到为止
3. **交叉点是文章最有价值的部分**——在两个领域的交汇处找到独特洞察，这是文章区别于其他同类文章的关键

## 附录：时效性分级

| 分级 | 定义 | 处理方式 |
|---|---|---|
| 🔴 时效极强 | 事件发生在过去 72 小时内 | 必须搜索至少 3 个信源，并在文章中注明信息截至时间 |
| 🟡 时效较强 | 事件发生在过去 2 周内 | 需搜索 2+ 信源验证，确认信息无重大更新 |
| 🟢 时效一般 | 趋势或长期观察 | 允许引用较早期的信源，但需确认观点未被推翻 |