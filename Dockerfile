FROM node:20-alpine

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

RUN chmod -R 777 /app

EXPOSE 3000

CMD ["npm", "run", "start"]
