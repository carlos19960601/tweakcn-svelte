# 构建阶段
FROM oven/bun:alpine AS builder

WORKDIR /app

# 复制依赖配置文件
COPY package.json bun.lock ./

# 安装所有依赖（包括 devDependencies，因为构建需要）
RUN bun install --frozen-lockfile

# 复制源代码
COPY . .

# 构建应用
RUN bun run build

# 生产阶段
FROM oven/bun:alpine AS runner

WORKDIR /app

# 设置环境变量
ENV NODE_ENV=production \
    PORT=3000 \
    HOST=0.0.0.0

# 创建非特权用户
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001

# 复制必要的运行时文件
COPY --from=builder --chown=nodejs:nodejs /app/package.json ./
COPY --from=builder --chown=nodejs:nodejs /app/build ./build
COPY --from=builder --chown=nodejs:nodejs /app/bun.lock ./

# 安装生产依赖
RUN bun install --frozen-lockfile --production

# 切换到非特权用户
USER nodejs

# 暴露端口
EXPOSE 3000

# 健康检查
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD node -e "require('http').get('http://localhost:3000/', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# 启动应用
CMD ["bun", "build/index.js"]

