# SVG Image Animation Project

一个基于 Next.js 的 SVG 动画展示项目，展示了复杂的 SVG 动画效果。

## 项目特性

- 🎨 **SVG 动画**：使用 CSS 动画实现复杂的 SVG 绘制效果
- ⏱️ **时序控制**：5 秒总周期的精确动画时序控制
- 🎯 **渐变效果**：支持线性渐变和径向渐变
- 📱 **响应式设计**：基于 Next.js 的现代化 Web 应用

## 动画序列

### 完整动画流程（5 秒周期）：

1. **0-40% (0-2 秒)**：左侧曲线绘制动画
2. **40-45% (2-2.25 秒)**：数字"89"淡出
3. **45-50% (2.25-2.5 秒)**：数字"90"淡入，同时图标变红
4. **60-80% (3-4 秒)**：右侧连线绘制动画

## 技术栈

- **框架**：Next.js 15.4.5
- **语言**：TypeScript
- **样式**：Tailwind CSS
- **动画**：CSS Keyframes
- **SVG**：原生 SVG + CSS 动画

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 启动生产服务器

```bash
npm start
```

## 项目结构

```
svg-image/
├── public/                 # 静态资源
│   ├── example.svg        # 主要动画SVG文件
│   ├── database.svg       # 数据库图标
│   ├── love.svg          # 爱心图标
│   ├── dav.svg           # Dav图标
│   ├── info.svg          # 信息图标
│   └── circle.svg        # 圆形图标
├── src/
│   └── app/
│       ├── page.tsx      # 主页面
│       ├── layout.tsx    # 布局组件
│       └── globals.css   # 全局样式
├── package.json          # 项目配置
└── README.md            # 项目说明
```

## 动画技术细节

### SVG 渐变系统

- 使用 `linearGradient` 实现颜色渐变
- 支持百分比坐标和绝对坐标系统
- 渐变坐标需要与路径坐标精确匹配

### CSS 动画

- 使用 `stroke-dasharray` 和 `stroke-dashoffset` 实现绘制效果
- 通过 `@keyframes` 定义复杂的动画序列
- 支持 `ease-in-out` 等缓动函数

### 时序控制

- 使用百分比精确控制动画时序
- 支持动画延迟和持续时间控制
- 多元素动画同步协调

## 贡献

欢迎提交 Issue 和 Pull Request！

## 许可证

MIT License
