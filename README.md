# DeepOrca 生态官网

DeepOrca 完整生态的介绍网站——纯静态 HTML/CSS/JS，零依赖、零构建。

## 覆盖的生态项目

| 项目 | 角色 | 仓库 |
|---|---|---|
| **DeepOrca** | AI 创作 Studio 桌面客户端（原型 · 设计 · 编码） | [d2rabbit/deepOrca](https://github.com/d2rabbit/deepOrca) |
| **MoonViz** | Agent 驱动的原型设计基础引擎（100% MoonBit） | [asdshuaishuai/moonviz](https://github.com/asdshuaishuai/moonviz) |
| **deepDesign Studio** | 人类编辑路线的 Tauri 视觉编辑器 | [asdshuaishuai/moonviz-demo-tauri](https://github.com/asdshuaishuai/moonviz-demo-tauri) |
| **ddpView** | macOS 原生只读查看器（SwiftUI） | [asdshuaishuai/ddpView-mac](https://github.com/asdshuaishuai/ddpView-mac) |
| **deepAutoTest** | 源码驱动的 API 自动化测试工作台 | 设计阶段（kernel 已落地，仓库待建） |
| **html-native** | 原生 UI 框架 / 系统级 PWA 引擎（C99，HTML 即原生窗口） | [asdshuaishuai/html-native](https://github.com/asdshuaishuai/html-native) |

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
├── index.html        # 单页官网（10 个分区：总览 / 六大项目 / 设计哲学 / 数据流 / 开源感谢）
├── css/style.css     # 深海主题样式
├── js/main.js        # 导航 / 页签 / 滚动浮现
└── assets/           # DeepOrca 图标与产品截图
```
