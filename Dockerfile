FROM node:20-alpine

RUN apk add --no-cache libc6-compat

WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile --shamefully-hoist

COPY . .

RUN pnpm run build

RUN chmod -R 777 /app

EXPOSE 3000

CMD ["pnpm", "next", "start"]