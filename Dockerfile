# 使用 Node.js 官方基础镜像
FROM node:16

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json，并安装依赖
COPY package*.json ./
RUN npm install --production

# 复制应用代码
COPY . .

# 公开端口
EXPOSE 3000

# 启动应用
CMD ["node", "app.js"]
