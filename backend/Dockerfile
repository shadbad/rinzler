FROM node:20.12.0-alpine3.19

WORKDIR /usr/src/app

ARG ENV

COPY package*.json ./

RUN npm ci 

COPY . .

RUN npm run build

EXPOSE 5000:5000

ENV NODE_ENV=$ENV

CMD ["node", "dist/index.js"]