# alincc

一个面向 **Claude Code 国内使用 / 第三方接入核验** 的轻量静态站点。

## 在线页面
建议配合 GitHub Pages 使用：

- `index.html`：主落地页 / 主文章页
- `styles.css`：页面样式
- `script.js`：轻量交互脚本
- `robots.txt`：搜索引擎抓取规则
- `sitemap.xml`：站点地图

## 这次更新做了什么
这次不再沿用“代理商大排行”式写法，而是改成了更稳的结构：

1. **官方事实优先**
   - Claude Code 官方产品页
   - Claude Code 官方文档
   - Anthropic 官方 pricing

2. **第三方接入只写可核验内容**
   - 是否有公开文档
   - 是否明确支持 Claude Code
   - 是否给出 `~/.claude/settings.json` 示例
   - 是否能看到 `ANTHROPIC_BASE_URL` / `ANTHROPIC_AUTH_TOKEN`

3. **不再拍脑袋排名**
   - 不给不透明星级排行
   - 不把营销词写成事实
   - 不把短期体验写成长期结论

## 页面主线
站点当前围绕这几个模块组织：

- Hero：一句话讲清核心立场
- Claude Code 是什么
- 已交叉验证的官方事实
- 第三方接入核验框架
- 可核验示例（非排名）
- 核验清单
- FAQ
- CTA

## 参考来源
官方：
- https://claude.com/pricing
- https://claude.com/product/claude-code
- https://code.claude.com/docs/en/overview

第三方公开文档示例：
- https://docs.aicodewith.com/zh/docs/claude-code
- https://docs.uniapi.ai/integration/claude_code

## 部署
如果你要用 GitHub Pages，直接将仓库发布为 Pages 即可。

推荐：
- 分支：`main`
- 根目录：`/ (root)`

发布后主页一般为：

`https://yxhpy.github.io/alincc/`

## 核心立场
**官方优先，第三方备用；先验证，再长期用。**

这句话就是整个项目的底。别花里胡哨，稳比什么都值钱。
