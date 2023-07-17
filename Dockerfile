FROM node:18-alpine3.16
WORKDIR /app

COPY package.json .
RUN yarn install

COPY . .
RUN yarn build

EXPOSE 4173
CMD ["yarn", "preview", "--host"]
