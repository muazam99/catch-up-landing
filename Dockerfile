FROM node:20-slim AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --include=optional && npm i lightningcss-linux-x64-gnu@1.30.2 @tailwindcss/oxide-linux-x64-gnu --no-save
FROM node:20-slim AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:20-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
COPY --from=builder /app ./
EXPOSE 3000
CMD ["npm","run","start"]