# AGENTS.md

## 项目定位

DeepOrca 生态官网 —— 纯静态单页站点，**零依赖、零构建、零工具链**。

- **伞名是 `DeepOrca`**：站内统一写「DeepOrca 生态」（`<title>` / 导航品牌 / hero 标题 / 页脚 / 文件头注释）。它既是旗舰产品名，也是整个生态的群名。
- **`deepStudio` 不是品牌**：它只是同级的本地目录名（`deepcodeUI/deepStudio/`），**不要写进站点文案**。GitHub 上的 `DeepStudio` 账号也与本项目无关。
- **生态是八个开源项目**（不是六个）：DeepOrca、MoonViz、deepDesign Studio、deepOffice、MoonPainter、ddpView、html-native + deepAutoTest（仓库待建）。

- 无 `package.json`、无 node_modules、无打包器、无框架。
- 全部源码只有 3 个文件：`index.html`、`css/style.css`、`js/main.js`（合计约 1300 行）。
- 站点语言为中文，文案、`alt`、`aria-label` 均用中文。
- 远程仓库：`asdshuaishuai/deeporca-site`，默认分支 `main`，提交信息用中文的 conventional commits（`feat:` / `fix:` / `docs:`）。

## 事实来源（改文案前必读）

**站点描述的是别的仓库，别在站内自证。** 改任何项目信息前，先去同级的真实工作区核对：

```bash
# 真实项目仓库在 ../deepStudio/，每个子目录是一个独立 git 仓库
ls /Volumes/data/dev/coding/deepcodeUI/deepStudio/

# 仓库地址以真实 remote 为准，不要凭记忆写
git -C /Volumes/data/dev/coding/deepcodeUI/deepStudio/<dir> remote get-url origin

# 事实数字（工具数/组件数/测试数/版本/状态）读该目录的 README
```

- 顶层 `../deepStudio/README.md` 是**项目地图**（角色 + 远端地址），改链接前先看它。
- ⚠️ 本地目录名 ≠ GitHub 仓库名：`deepDesign/` 的远端是 `deepdesign-studio`，`deepoffice/` 的远端是小写。**必须查 remote，不能由目录名推断。**
- ⚠️ **一个项目名可能对应两个仓库**：`ddpView-mac`（macOS / SwiftUI / 引擎 CLI 子进程渲染）和 `ddpView`（Windows/Linux / Electron / WASM-GC 进程内渲染）是**两个独立实现**，写查看器相关内容时别只写 mac 那个。
- **计数口径**：「八个开源项目」= 8 个真实开源仓库（DeepOrca、MoonViz、deepdesign-studio、deepoffice、moonpainter、ddpView-mac、ddpView、html-native）；**deepAutoTest 是第 9 个但仓库待建、尚未开源**，不要把它算进「开源项目」数。
- 历史教训：站点曾把 deepDesign 的链接写成 `moonviz-demo-tauri`（已改名 301），把 MoonViz 工具数写成 47（实为 52）、测试数 174（实为 209）、deepAutoTest 测试数 99（实为 121）、ddpView 只写了 mac 一个实现——这些都来自「没查真实仓库就写」。

## 目录结构

```
deeporca-site/
├── index.html        # 单页全部内容，12 个编号分区（01–12）+ hero + footer
├── css/style.css     # 纸感图录主题，全部视觉 token 集中在 :root
├── js/main.js        # IIFE 包裹的原生 JS，无依赖
└── assets/           # 产品截图与图标（PNG，文件名小写连字符）
```

## 命令

没有 build / lint / test / typecheck —— **不要尝试安装依赖或初始化 npm 项目**。

```bash
# 本地预览（唯一需要的命令）
python3 -m http.server 8080
# 打开 http://localhost:8080
```

改动后直接刷新浏览器验证即可；`index.html` 也可双击打开（资源全为相对路径）。

## 架构与编辑规则

- **单文件即整站**：所有分区都在 `index.html` 里，改结构就是改这一个文件。
- **分区结构固定**，新增分区要完全照抄现有模板：
  ```html
  <section class="section" id="xxx">        <!-- 交替使用 section / section-alt -->
    <div class="container">
      <header class="section-head reveal">
        <span class="section-no">0N</span>  <!-- 编号必须连续 -->
        <h2>标题 <small>· 副标题</small></h2>
      </header>
      ...
    </div>
  </section>
  ```
- **深浅交替**：分区按 `section` → `section-alt` 交替，改动顺序时注意保持交替规律。
- **编号连续**：`section-no` 目前是 01–12，插入/删除分区后要重排后续所有编号与 `<!-- === NN 分区 === -->` 注释，并同步更新 hero 与 footer 的描述。
- **旧变量别名**：`:root` 里的 `--ink` / `--ink2` / `--ink3` / `--panel` 是别名，供文件尾追加的 deepDesign 段（`.usage` `.eco-links` `.shots`）使用；直接删掉会让那段文字掉色。
- **导航三处同步**：新增分区必须同时改 `.nav-links`（顶部导航）、`.footer-links`（页脚链接）、`section id`，三者通过 `#id` 锚点对应，缺一处就会出现导航失效。
- **滚动浮现**：任何需要入场动画的块都要加 `reveal` 类，由 `main.js` 的 `IntersectionObserver` 统一处理；不加就没有动画（不是 bug）。

### 截图页签（shot-tabs）—— 当前下线

**产品截图暂时不展示**：`index.html` 里两处 `.shot-frame` 画廊和 origin 配图已移除。但 `assets/` 下的 PNG、`css/style.css` 的 `.shot-*` / `.origin-shot` 规则、`js/main.js` 的页签初始化全部保留 —— 恢复时把画廊标记加回 HTML 即可，不要顺手删这些「看似没用」的 CSS/JS。

> ⚠️ `.origin` 因为只剩文字子元素，`grid-template-columns` 已从 `1fr 1.1fr` 改为 `1fr`；恢复配图时要改回去（见 CSS 中的注释）。

组件原本的接线方式（供恢复时参考）—— `main.js` 会为每个 `.shot-frame` 独立初始化，可多个画廊共存：

```html
<div class="shot-tabs" role="tablist">
  <button class="shot-tab is-active" role="tab" data-shot="0">标签</button>  <!-- 序号从 0 开始 -->
</div>
<div class="shot-stage">
  <figure class="shot is-active"><img ... /></figure>  <!-- 顺序必须与 data-shot 一一对应 -->
</div>
```

`data-shot` 索引与 `.shot` 出现顺序必须严格对应，初始激活项两边都要有 `is-active`。

### 图片约定

- 存放在 `assets/`，命名小写连字符（如 `app-welcome.png`）。目前页面里只剩 `orca-icon.png`（导航与页脚各一处），其余为暂不展示的截图。
- 新增/恢复图片必须写死 `width` / `height`（防布局抖动）+ `loading="lazy"` + 中文 `alt`。
- 三者缺一都会影响 LCP 或无障碍评分，别省。

## 约定

- **无构建**：不引入框架、不加 npm 依赖、不写 JSX/TS；JS 保持 ES5 风格（`var` + 函数表达式 + IIFE + `"use strict"`），与 `main.js` 现状一致。
- **样式**：颜色/圆角/字号一律走 `:root` 的 CSS 变量（`--bg` `--brand` `--radius` 等），不要写死色值；新分区优先复用现有工具类（`.split` `.tick-list` `.pkg-list` `.lane` `.flow-node` 等）。
- **设计方向：平静 · 柔和 · 艺术感（纸感图录风）**——暖纸底 `#faf7f2`、墨灰字 `#322e29`、低饱和陶土 `#8a5f3a` / 苔绿 `#6f8268` 点缀，标题用衬线 `--font-display`。**不要**加回霓虹色、发光光晕、高饱和渐变或强对比深色底——这套主题就是刻意去掉它们的。
- ⚠️ `.hero-bg` 与 `.hero-inner` 的 `z-index` 是**必需的**：`.orb` 的 `filter: blur(90px)` 会把背景层提到正文之上，正文会被暖色光晕整片罩住。删掉这两条 z-index 会复现该 bug（CSS 里有注释）。
- **响应式断点**：`1024px` / `820px` / `640px` 三档，移动端导航靠 `.nav-links.is-open`；新增布局要在三档下都过一遍。
- **无障碍**：交互元素保留 `aria-label` / `aria-expanded` / `role="tab"`，外链统一 `target="_blank" rel="noopener"`，动画尊重 `prefers-reduced-motion`。
- **外链**：生态项目的 GitHub 地址出现在导航、正文、footer 三处，改仓库地址时要全局搜索替换。

## 敏感区域

- `README.md` 的生态项目表格与 `index.html` 的分区内容**必须保持一致**（项目名、角色、仓库链接、研发状态）。改一处要同步另一处。
- 近期提交 `e98e751` / `ea2403a` 做过**敏感信息剔除**：不要把内部信息、隐私内容、未公开的仓库或人员信息写回页面；deepAutoTest 目前是「设计阶段，仓库待建」，不要擅自补链接。
- 部署为纯静态，可直接上 GitHub Pages / CloudBase 静态托管 / Vercel / Nginx，**不要引入需要构建的部署流程**。

## 参考

- `README.md` —— 本仓库的生态项目清单与部署说明。
- `../deepStudio/README.md` —— **真实项目地图**（角色 + 远端地址），核对事实的权威来源。
- 各项目 `../deepStudio/<dir>/README.md` —— 数字、版本、能力口径的原始出处。
