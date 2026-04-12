FROM node:20-alpine AS deps

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --legacy-peer-deps

FROM deps AS dev

ENV NODE_ENV=development

EXPOSE 3000

CMD ["npm", "run", "dev", "--", "--hostname", "0.0.0.0", "--port", "3000"]

FROM deps AS builder

COPY . .

RUN npm run build

FROM node:20-alpine AS prod

RUN apk add --no-cache libc6-compat

WORKDIR /app

ENV NODE_ENV=production

COPY package.json package-lock.json ./

RUN npm install --legacy-peer-deps --omit=dev

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./next.config.ts

EXPOSE 3000

CMD ["npm", "run", "start", "--", "--hostname", "0.0.0.0", "--port", "3000"]
