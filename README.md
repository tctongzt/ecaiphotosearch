# ECAI 照片智能归类系统

## 部署到 Vercel

### 方法1：通过 Vercel CLI（推荐）

1. **安装 Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **在 web-app 目录下运行**
   ```bash
   cd web-app
   vercel
   ```

3. **按照提示操作**
   - Set up and deploy? Yes
   - Which scope? 选择你的账号
   - Link to existing project? No
   - What's your project's name? ecaiphotosearch
   - In which directory is your code located? ./ (当前目录)
   - Want to override the settings? No

4. **完成部署**
   - 部署完成后会得到一个网址，类似 `https://ecaiphotosearch.vercel.app`

### 方法2：通过 Vercel 网站部署

1. **访问** https://vercel.com/new
2. **登录或注册 Vercel 账号**
3. **上传代码**
   - 选择 "Upload" 选项
   - 拖拽 web-app 文件夹到页面
   - 或者选择从 Git 仓库导入
4. **配置项目**
   - Project Name: ecaiphotosearch
   - Framework Preset: Other
   - Root Directory: ./
   - Output Directory: ./
5. **点击 Deploy**
6. **等待部署完成**
7. **访问应用**
   - 部署成功后会显示访问网址

### 方法3：通过 GitHub 部署

1. **将 web-app 文件夹上传到 GitHub**
2. **访问** https://vercel.com/new
3. **选择 "Continue with GitHub"**
4. **选择你的仓库**
5. **配置项目**
   - Project Name: ecaiphotosearch
   - Framework Preset: Other
   - Root Directory: web-app
6. **点击 Deploy**

## 功能说明

### 📤 上传照片
- 支持拖拽上传
- 支持点击选择文件
- AI 自动识别标签
- 保存到数据库

### 🔍 检索照片
- 根据标签检索
- 支持多标签组合
- 显示相似照片

### 🏷️ 标签分类
- **内容分类**: 环境、建筑、场景、医院门头、医生就诊、科室门牌、医生介绍、药店门头、药品信息陈列、药店宣传场景、会议研讨、人物、动物
- **文档类型**: PPT、文档材料、签到表
- **色彩风格**: 冷色系、暖色系、灰色系

## 技术栈

- 前端: HTML + CSS + JavaScript
- 后端 API: Coze 工作流
- 部署: Vercel
- 认证: JWT Token

## 注意事项

- 照片需要是公开可访问的 URL
- 建议上传小于 5MB 的照片
- 支持常见图片格式：JPG、PNG、GIF、WebP

## 联系方式

如有问题，请联系技术支持。
