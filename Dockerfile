FROM node:18-alpine

WORKDIR /xiaohu-demo-vue

COPY public/ /xiaohu-demo-vue/public
COPY src/ /xiaohu-demo-vue/src
COPY package.json/ /xiaohu-demo-vue/package.json

RUN yarn

CMD ['npm', 'start']