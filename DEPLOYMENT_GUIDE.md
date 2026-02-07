# 🚀 ECAI 照片智能归类系统 - 部署指南

## 📋 前置准备

1. **注册 Vercel 账号**
   - 访问 https://vercel.com/signup
   - 使用 GitHub、GitLab 或 Email 注册（免费）

2. **安装 Node.js**（如果使用 CLI 部署）
   - 下载：https://nodejs.org/
   - 安装最新 LTS 版本

---

## 🎯 推荐部署方式：通过 Vercel 网站（最简单）

### 步骤 1：准备文件
我已经为您创建了以下文件在 `web-app` 目录下：
- ✅ `index.html` - 完整的应用页面
- ✅ `vercel.json` - Vercel 配置文件
- ✅ `README.md` - 说明文档

### 步骤 2：部署到 Vercel

#### 方式 A：直接上传（最简单）

1. **访问 Vercel**
   - 打开浏览器，访问：https://vercel.com/new

2. **登录账号**
   - 使用 GitHub、GitLab 或 Email 登录

3. **选择部署方式**
   - 点击 **"Upload"** 标签（在页面顶部）
   - 或者点击 **"Upload Files"** 按钮

4. **上传文件**
   - **重要**: 创建一个空文件夹，命名为 `ecaiphotosearch`
   - 将 `web-app` 目录下的所有文件复制到这个新文件夹
   - 拖拽这个文件夹到 Vercel 的上传区域

5. **配置项目**
   ```
   Project Name: ecaiphotosearch
   Framework Preset: Other
   Root Directory: ./
   ```

6. **部署**
   - 点击 **"Deploy"** 按钮
   - 等待 1-2 分钟

7. **获取网址**
   - 部署成功后会显示访问网址
   - 格式类似：`https://ecaiphotosearch.vercel.app`

#### 方式 B：通过 GitHub（推荐给开发者）

1. **创建 GitHub 仓库**
   - 登录 GitHub
   - 点击右上角 `+` → `New repository`
   - 仓库名：`ecaiphotosearch`
   - 设为 Public 或 Private 都可以
   - 点击 `Create repository`

2. **上传文件到 GitHub**

   **方法 A：通过 GitHub 网页**
   - 点击 `Add file` → `Upload files`
   - 拖拽 `web-app` 目录下的所有文件
   - 点击 `Commit changes`

   **方法 B：通过 Git 命令**
   ```bash
   cd web-app
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/你的用户名/ecaiphotosearch.git
   git push -u origin main
   ```

3. **在 Vercel 导入**
   - 访问 https://vercel.com/new
   - 点击 `Continue with GitHub`
   - 授权 Vercel 访问你的 GitHub
   - 选择 `ecaiphotosearch` 仓库
   - 点击 `Import`

4. **配置项目**
   ```
   Project Name: ecaiphotosearch
   Framework Preset: Other
   Root Directory: ./web-app
   ```

5. **部署**
   - 点击 `Deploy` 按钮
   - 等待 1-2 分钟

6. **获取网址**
   - 部署成功后会显示访问网址
   - 格式类似：`https://ecaiphotosearch.vercel.app`

---

## 🎨 部署完成后的操作

### 1. 测试应用
1. 打开部署网址（例如：`https://ecaiphotosearch.vercel.app`）
2. 测试上传照片功能
3. 测试检索照片功能

### 2. 自定义域名（可选）
1. 在 Vercel 项目页面
2. 点击 `Settings` → `Domains`
3. 添加自定义域名（需要先购买域名）

### 3. 分享给他人
- 直接分享部署网址
- 无需任何安装，任何人都可以访问

---

## ❓ 常见问题

### Q1: 部署失败怎么办？
**A**: 检查以下几点：
- 文件是否正确上传
- `index.html` 文件是否存在
- 网络连接是否正常

### Q2: 上传照片后没有响应？
**A**: 检查：
- 照片大小是否太大（建议 < 5MB）
- 照片格式是否支持（JPG、PNG、GIF、WebP）
- 浏览器控制台是否有错误信息（F12）

### Q3: 检索功能不工作？
**A**: 确保：
- 输入了有效的标签
- 标签之间用逗号分隔
- 数据库中有相关照片

### Q4: 如何更新应用？
**A**:
- 如果通过 GitHub 部署：推送代码后会自动重新部署
- 如果直接上传：删除项目重新上传

---

## 📞 获取帮助

如果遇到问题：

1. **查看 Vercel 部署日志**
   - 在 Vercel 项目页面
   - 点击 `Deployments`
   - 查看最新的部署日志

2. **检查浏览器控制台**
   - 按 F12 打开开发者工具
   - 查看 Console 和 Network 标签
   - 查找错误信息

3. **联系技术支持**
   - 将错误信息发送给技术支持团队

---

## 🎊 恭喜！

部署成功后，您将拥有：
- ✅ 完整的照片智能归类系统
- ✅ 可在浏览器中直接访问
- ✅ 可以分享给任何人使用
- ✅ 完全免费，无需购买服务器
- ✅ 自动更新和维护

**现在开始部署吧！** 🚀
