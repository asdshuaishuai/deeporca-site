# DeepOrca 生态官网

DeepOrca 完整生态的介绍网站——纯静态 HTML/CSS/JS，零依赖、零构建。

> **品牌**：生态伞名是 **DeepOrca**，站内统一写「DeepOrca 生态」。`deepStudio` 只是本地目录名（同级的 `deepcodeUI/deepStudio/`），**不是品牌，不要写进站点文案**。
>
> **截图**：产品截图暂时下线（页面不展示）。`assets/` 下的 PNG 全部保留，`css/style.css` 的 `.shot-*` / `.origin-shot` 规则与 `js/main.js` 的页签逻辑也保留，恢复时把画廊标记加回 `index.html` 即可。

## 覆盖的生态项目

| 项目 | 角色 | 仓库 |
|---|---|---|
| **DeepOrca** | AI 创作 Studio 桌面客户端（原型 · 设计 · 编码） | [d2rabbit/deepOrca](https://github.com/d2rabbit/deepOrca) |
| **MoonViz** | Agent 驱动的原型设计基础引擎（100% MoonBit） | [asdshuaishuai/moonviz](https://github.com/asdshuaishuai/moonviz) |
| **deepDesign Studio** | 人类编辑路线的 Tauri 视觉编辑器 | [asdshuaishuai/deepdesign-studio](https://github.com/asdshuaishuai/deepdesign-studio) |
| **deepOffice** | 文学化办公文档引擎（100% MoonBit，Office/WPS 进出） | [asdshuaishuai/deepoffice](https://github.com/asdshuaishuai/deepoffice) |
| **MoonPainter** | Agent 驱动的图层绘制引擎（纯 MoonBit，`.mpd` 事实源） | [asdshuaishuai/moonpainter](https://github.com/asdshuaishuai/moonpainter) |
| **ddpView-mac** | DDP 只读查看器 · macOS 原生（SwiftUI，引擎 CLI 子进程渲染） | [asdshuaishuai/ddpView-mac](https://github.com/asdshuaishuai/ddpView-mac) |
| **ddpView** | DDP 只读查看器 · Windows/Linux（Electron，WASM-GC 进程内渲染） | [asdshuaishuai/ddpView](https://github.com/asdshuaishuai/ddpView) |
| **deepAutoTest** | 源码驱动的 API 自动化测试工作台 | 设计阶段（四层已落地，仓库待建） |
| **html-native** | 参考 RN 构建的系统小程序级 UI 框架（C99，HTML 即原生窗口） | [asdshuaishuai/html-native](https://github.com/asdshuaishuai/html-native) |

## 本地预览

```bash
# 任意静态服务器均可
python3 -m http.server 8080
# 打开 http://localhost:8080
```

或直接双击 `index.html`。

## 部署

整站为纯静态资源，可直接部署到 GitHub Pages、CloudBase 静态托管、Vercel、Nginx 等任意静态站点服务，无需构建步骤。

## 目录结构

```
deeporca-site/
├── index.html        # 单页官网（hero + 11 个编号分区 + footer）
├── css/style.css     # 纸感图录主题（暖纸底 · 墨灰字 · 低饱和陶土/苔绿）
├── js/main.js        # 导航 / 截图页签 / 滚动浮现
└── assets/           # 站点图标 + 产品截图（截图暂不展示，文件保留）
```
