# Angus Love · 日记站

一个极简的中文日记博客。Astro 生成，部署在 Cloudflare，绑定 anguslove.me。

## 日常写日记（最常用）

1. 在 `src/diary/` 里新建一个 `.md` 文件，文件名如 `2026-07-14-xxx.md`
2. 开头写信息区（天气可省略）：

   ```
   ---
   title: 标题
   date: 2026-07-14
   weather: 晴
   ---

   正文从这里开始，段落之间空一行。
   ```

3. 保存并推送到 GitHub，网站 1 分钟内自动更新

## 首次部署（一次性，约 10 分钟）

1. 把这个文件夹上传到你的 GitHub 新仓库（不含 node_modules 和 dist）
2. 登录 Cloudflare 后台 → Workers & Pages → Create → 连接 GitHub 仓库
3. 构建设置：Build command 填 `npm run build`，输出目录填 `dist`
4. 部署成功后，在项目的 Settings → Domains 里添加 anguslove.me
   （域名如果不在 Cloudflare，按提示改一下 DNS 记录即可）

## 文件说明

- `src/diary/` —— 你的日记，每篇一个文件。其中两篇标了「示例」的看完可删
- `drafts/` —— 两篇早前的草稿（《开篇》《从王子日记到 Angus Love》），内容请自行审阅；想发布就把文件移到 `src/diary/` 并在信息区补上 `weather`（可选）
- `src/pages/about.astro` —— 「关于我」页面，文字可直接改
- `src/styles/global.css` —— 全部样式；开头的变量区可改配色
- `wrangler.jsonc` —— 如果以后想用命令行 `wrangler deploy` 部署，用得上

## 本地预览（可选）

装好 Node.js 后，在文件夹里运行 `npm install`，再运行 `npm run dev`，
浏览器打开 http://localhost:4321 即可边写边看。
